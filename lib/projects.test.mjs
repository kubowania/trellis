import { test } from "node:test";
import assert from "node:assert/strict";
import { validateProject, createProject, parseProjects } from "./projects.mjs";

test("a project needs a name", () => {
  assert.equal(validateProject({ name: "   " }), "Give your project a name.");
  assert.equal(validateProject({ name: "Website refresh" }), null);
});

test("project names have a length limit", () => {
  assert.match(validateProject({ name: "x".repeat(61) }), /60 characters/);
});

test("createProject trims input and stamps a date", () => {
  const now = new Date("2026-01-01T00:00:00Z");
  const project = createProject({ name: "  Launch  ", description: " Q1 " }, now);
  assert.equal(project.name, "Launch");
  assert.equal(project.description, "Q1");
  assert.equal(project.createdAt, now.toISOString());
});

test("parseProjects survives bad data", () => {
  assert.deepEqual(parseProjects(null), []);
  assert.deepEqual(parseProjects("not json"), []);
  assert.deepEqual(parseProjects("{}"), []);
});
