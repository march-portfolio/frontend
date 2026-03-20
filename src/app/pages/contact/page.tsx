import ContactForm from "@/components/ContactForm";
import "./contact.scss";

export default function ContactPage() {
  return (
    <>
          <ContactForm/>
      <div className="contact_icon">
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
    </>
  );
}
