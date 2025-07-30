
import Image from "next/image";
import img from "../assets/Profile.jpg";
import page from "./page.module.scss";
import Link from "next/link";

export const runtime = "edge";

export default function Home() {

  return (
    <>
      <div className={page.container}>
        <h1 className={page.porfolio}>Portfolio Website</h1>
        <Image
          className={page.Profile_pic}
          src={img}
          alt="March Project Logo"
          width={200}
          height={200}
        />
        <div>
          <h1>Tanupat Sojindamanee</h1>
          <p className={page.description}>
          I am a multi-talented developer with a passion for both art and technology.
          My expertise lies primarily in front-end development, with some experience in back-end as well.
          Beyond coding, my interests include filmmaking, graphic design, drawing, 
          bodybuilding, music, and communication.
          These are the ways I like to express my ideas.
          <br/>
          <b>*To know me better in specific field check out my website*</b>
            {/* I am a full-stack developer with a passion for creating and
            developing web applications. I have experience in both front-end and
            back-end development, and I am always looking to learn new
            technologies and improve my skills. I am currently looking for new
            opportunities to work on exciting projects and collaborate with
            other developers. */}
          </p>
        </div>
        <div className={page.contact_field}>
        <a className="linkedin" href="https://www.linkedin.com/in/tanupatsoj/">
          <i className="bi bi-linkedin"></i>
        </a>
        <a className="gitlab" href="https://gitlab.com/marchtanu">
          <i className="bi bi-gitlab"></i>
        </a>
        <a className="github" href="https://github.com/marchtanu">
          <i className="bi bi-github"></i>
        </a>
        <a className="line" href="https://line.me/ti/p/RnNtEUmp5j">
          <i className="bi bi-line"></i>
        </a>
        <a
          className="discord"
          href="https://discordapp.com/users/1312469948391493704"
        >
          <i className="bi bi-discord"></i>
        </a>
        <a className="ig" href="https://www.instagram.com/marchtanu">
          <i className="bi bi-instagram"></i>
        </a>
        <a className="email" href="mailto:march.creative27@gmail.com">
          <i className="bi bi-envelope-fill"></i>
        </a>
      </div>
        <Link className={page.visit_button} href="/pages/works">Visit Page</Link>
      </div>
    </>
  );
}
