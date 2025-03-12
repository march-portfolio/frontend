
import Image from "next/image";
import img from "../assets/Profile.jpg";
import page from "./page.module.scss";
import Link from "next/link";
export default function Home() {

  return (
    <>
      <div className={page.container}>
        <h1>Portfolio Website</h1>
        <div></div>
        <Image
          className={page.Profile_pic}
          src={img}
          alt="March Project Logo"
          width={200}
          height={200}
        />
        <div>
          <h1>Tanupat Sojindamanee</h1>
          <p>
            I am a full-stack developer with a passion for creating and
            developing web applications. I have experience in both front-end and
            back-end development, and I am always looking to learn new
            technologies and improve my skills. I am currently looking for new
            opportunities to work on exciting projects and collaborate with
            other developers.
          </p>
        </div>
        <div className={page.contact_field}>
        <a className={page.linkedin} href="https://www.linkedin.com/in/tanupatsoj/">
            <i className="bi bi-linkedin"></i>
            </a>
            <a className={page.gitlab} href="https://gitlab.com/marchtanu">
            <i className="bi bi-gitlab"></i>
            </a>
            <a className={page.github} href="https://github.com/marchtanu">
            <i className="bi bi-github"></i>
            </a>
            <a className={page.line} href="https://line.me/ti/p/RnNtEUmp5j">
            <i className="bi bi-line"></i>
            </a>
            <a className={page.discord} href="https://discordapp.com/users/1312469948391493704">
            <i className="bi bi-discord"></i>
            </a>
            <a className={page.ig} href="https://www.instagram.com/marchtanu">
            <i className="bi bi-instagram"></i>
            </a>
            <a className={page.email} href="mailto:march.creative27@gmail.com">
            <i className="bi bi-envelope-fill"></i>
            </a>
        </div>
        <Link className={page.visit_button} href="/pages/work">Visit Page</Link>
      </div>
    </>
  );
}
