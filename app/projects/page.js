"use client";

import Link from "next/link";
import { useMemo, useSyncExternalStore } from "react";
import { parseProjects, readRawProjects, subscribeToProjects } from "@/lib/projects.mjs";

const dateFormat = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" });

export default function ProjectsPage() {
  // undefined while rendering on the server, then the stored string (or null) in the browser
  const raw = useSyncExternalStore(subscribeToProjects, readRawProjects, () => undefined);
  const projects = useMemo(() => parseProjects(raw), [raw]);
  const loading = raw === undefined;

  return (
    <>
      <div className="page-head">
        <div>
          <h1>Projects</h1>
          <p className="lead">Everything your team is working on.</p>
        </div>
        {projects.length > 0 && (
          <Link href="/projects/new" className="btn">
            New project
          </Link>
        )}
      </div>

      {loading ? null : projects.length === 0 ? (
        <div className="projects-empty" />
      ) : (
        <div className="project-list">
          {projects.map((project) => (
            <article className="card" key={project.id}>
              <h2>{project.name}</h2>
              {project.description && <p>{project.description}</p>}
              <p className="project-date">Created {dateFormat.format(new Date(project.createdAt))}</p>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
