import data from "../data";

export default function About() {
  return (
    <section id="about" className="section container fade-in-up">
      <h2 className="mb-4 section-title">About Me</h2>
      <p className="lead text-muted">{data.about}</p>
    </section>
  );
}
