"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OnboardingPage() {
  const router = useRouter();
  const [workspace, setWorkspace] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    window.localStorage.setItem("trellis.workspace", workspace.trim() || "My workspace");
    router.push("/projects");
  }

  return (
    <>
      <div className="page-head">
        <div>
          <h1>Get started with your workspace</h1>
          <p className="lead">Give your workspace a name. You can change it later.</p>
        </div>
      </div>

      <form className="form card" onSubmit={handleSubmit}>
        <label className="field">
          Workspace name
          <input
            value={workspace}
            onChange={(event) => setWorkspace(event.target.value)}
            placeholder="e.g. Acme product team"
          />
        </label>
        <div>
          <button type="submit" className="btn">
            Continue
          </button>
        </div>
      </form>
    </>
  );
}
