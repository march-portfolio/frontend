import Image from "next/image";
import img from "../assets/Profile.jpg";
import page from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className={page.pageWrapper}>
      <div className={page.container}>
        <div className={page.profileCol}>
          <Image
            className={page.Profile_pic}
            src={img}
            alt="Tanuphat Sojindamanee Profile Photo"
            width={260}
            height={260}
            priority
          />
        </div>

        <div className={page.bioCol}>
          <h1 className={page.title}>Tanuphat Sojindamanee</h1>
          <p className={page.nickname}>March · Marsh Me</p>

          <p className={page.description}>
            {" "}
            Software developer working on web applications and AI tools.
            Marsh Me is my engineering portfolio, bringing together client work
            and personal software projects.{" "}
          </p>

          <p className={page.subDescription}>
            {" "}
            My current work includes TTTuniverse, mayclinic and AXEAN Web.
            I also develop AUHIP, a desktop AI assistant. My acting and
            creative work uses the separate identity marchtanu.{" "}
          </p>

          <div className={page.contact_field}>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/tanupatsoj/"
              aria-label="LinkedIn"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              className="gitlab"
              href="https://gitlab.com/marchtanu"
              aria-label="GitLab"
              title="GitLab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-gitlab"></i>
            </a>
            <a
              className="github"
              href="https://github.com/marchtanu"
              aria-label="GitHub"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              className="line"
              href="https://line.me/ti/p/RnNtEUmp5j"
              aria-label="LINE"
              title="LINE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-line"></i>
            </a>
            <a
              className="discord"
              href="https://discordapp.com/users/1312469948391493704"
              aria-label="Discord"
              title="Discord"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-discord"></i>
            </a>
            <a
              className="ig"
              href="https://www.instagram.com/marchtanu"
              aria-label="Instagram"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              className="email"
              href="mailto:march.creative27@gmail.com"
              aria-label="Email"
              title="Email"
            >
              <i className="bi bi-envelope-fill"></i>
            </a>
          </div>

          <div className={page.actionRow}>
            <Link className={page.visit_button} href="/software">
              Explore Engineering <i className="bi bi-arrow-right"></i>
            </Link>
            <Link className={page.secondary_button} href="/pages/about">
              About Me
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
