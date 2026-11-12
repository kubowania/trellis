"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createProject, saveProject, validateProject } from "@/lib/projects.mjs";

export default function NewProjectPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const problem = validateProject({ name });
    if (problem) {
      setError(problem);
      return;
    }
    saveProject(createProject({ name, description }));
    router.push("/projects");
  }

  return (
    <>
      <div className="page-head">
        <div>
          <h1>New project</h1>
          <p className="lead">Add a project for your team to work on.</p>
        </div>
      </div>

      <form className="form card" onSubmit={handleSubmit} noValidate>
        <label className="field">
          Project name
          <input value={name} onChange={(event) => setName(event.target.value)} placeholder="e.g. Website refresh" />
        </label>
        <label className="field">
          Description (optional)
          <textarea
            rows={3}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="What is this project about?"
          />
        </label>
        {error && <p className="error">{error}</p>}
        <div>
          <button type="submit" className="btn">
            Create project
          </button>
        </div>
      </form>
    </>
  );
}
