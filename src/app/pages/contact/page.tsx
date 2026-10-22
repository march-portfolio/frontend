import ContactForm from "@/components/ContactForm";
import "./contact.scss";

import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/pages/contact");

export default function ContactPage() {
  return (
    <main id="main-content" tabIndex={-1} className="contact-page-wrapper">
      <ContactForm />

      <div className="connect-section">
        <span className="connect-label">Direct Channels</span>
        <div className="contact_icon">
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
      </div>
    </main>
  );
}
