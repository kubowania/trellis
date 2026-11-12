import Link from "next/link";

const features = [
  {
    title: "One place for every project",
    body: "Keep the whole team's work in a single list, from launches to small fixes.",
  },
  {
    title: "Made for the whole team",
    body: "PMs, designers and engineers all see the same projects and the same status.",
  },
  {
    title: "Nothing to set up",
    body: "Name a project, add a line about it, and you're ready to go.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Plan projects with your whole team.</h1>
        <p className="lead">
          Trellis is a simple project tracker for small product teams. Create a
          workspace, add your projects, and keep everyone on the same page.
        </p>
        <Link href="/onboarding" className="btn">
          Create your workspace
        </Link>
      </section>

      <section className="features">
        {features.map((feature) => (
          <div className="card" key={feature.title}>
            <h2>{feature.title}</h2>
            <p>{feature.body}</p>
          </div>
        ))}
      </section>
    </>
  );
}
