// Projects are stored in the browser (localStorage) so the app needs no database.

export const STORAGE_KEY = "trellis.projects";
const CHANGE_EVENT = "trellis:projects-changed";

export function validateProject({ name }) {
  const trimmed = (name ?? "").trim();
  if (!trimmed) return "Give your project a name.";
  if (trimmed.length > 60) return "Project names can be up to 60 characters.";
  return null;
}

export function createProject({ name, description }, now = new Date()) {
  return {
    id: `${now.getTime()}-${Math.random().toString(36).slice(2, 8)}`,
    name: name.trim(),
    description: (description ?? "").trim(),
    createdAt: now.toISOString(),
  };
}

export function parseProjects(raw) {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

// Browser-only helpers below.

export function readRawProjects() {
  return window.localStorage.getItem(STORAGE_KEY);
}

export function saveProject(project) {
  const projects = parseProjects(readRawProjects());
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify([project, ...projects]));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function subscribeToProjects(callback) {
  window.addEventListener("storage", callback);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}
