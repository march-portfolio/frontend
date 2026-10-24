import { Dropdown } from "@/shared/dropdown/Dropdown";
import Link from "next/link";
import { softwareProjects } from "@/data/portfolio";
import { pageMetadata } from "@/lib/seo";
import "./about.scss";

export const metadata = pageMetadata("/pages/about");

export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1} className="about-page">
      <div className="about-header">
        <h1 className="about-title">About</h1>
        <p className="about-subtitle">Tanuphat Sojindamanee (March) · Software developer &amp; actor</p>
      </div>
      <Dropdown label="About me" defaultOpen>
        <div className="apple-spec-grid">
          <div className="spec-row"><span className="spec-label">Name</span><span className="spec-value">Tanuphat Sojindamanee (March)</span></div>
          <div className="spec-row"><span className="spec-label">Public name</span><span className="spec-value">March (MarchTanu)</span></div>
          <div className="spec-row"><span className="spec-label">Work</span><span className="spec-value">Software development &amp; acting</span></div>
          <div className="spec-row"><span className="spec-label">Education</span><span className="spec-value">First-year ICT student, Mahidol University</span></div>
        </div>
        <div className="apple-editorial-block">
          <p>I am March (MarchTanu), Tanuphat Sojindamanee. I work on software and web applications, freelance development and personal tools, alongside an active acting career.</p>
          <p>My current professional work includes TTTuniverse, mayclinic and AXEAN Web. Outside that work, I am developing AUHIP and exploring practical creative tools.</p>
        </div>
        <div className="apple-action-row">
          <Link href="/software" className="apple-btn-pill">Engineering projects</Link>
          <Link href="/acting-modeling" className="apple-btn-ghost">Acting &amp; creative work</Link>
          <Link href="/pages/contact" className="apple-btn-ghost">Contact March</Link>
        </div>
      </Dropdown>
      <Dropdown label="Professional work">
        {softwareProjects.filter((project) => project.category === "Client work").map((project) => (
          <div className="apple-milestone" key={project.id}>
            <h2 className="milestone-title">{project.title}</h2>
            <div className="milestone-meta">{project.role} · {project.status}</div>
            <p className="milestone-desc">{project.description}</p>
          </div>
        ))}
      </Dropdown>
      <Dropdown label="Personal projects & earlier work">
        {softwareProjects.filter((project) => project.category !== "Client work").map((project) => (
          <div className="apple-milestone" key={project.id}>
            <h2 className="milestone-title">{project.title}</h2>
            <div className="milestone-meta">{project.role} · {project.status}</div>
            <p className="milestone-desc">{project.description}</p>
          </div>
        ))}
      </Dropdown>
      <Dropdown label="Education & interests">
        <div className="apple-milestone">
          <h2 className="milestone-title">Mahidol University · Faculty of ICT</h2>
          <p className="milestone-desc">I am a first-year ICT student. My interests include software development, AI assistants, creative tools and acting.</p>
        </div>
        <div className="apple-milestone">
          <h2 className="milestone-title">Kindee</h2>
          <p className="milestone-desc">Kindee is my separate health technology project, starting with nutrition education and product validation. It is currently at concept and demo stage.</p>
        </div>
      </Dropdown>
    </main>
  );
}
