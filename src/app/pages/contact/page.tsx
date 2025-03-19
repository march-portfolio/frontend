import "./contact.scss";

export default function ContactPage() {
  return (
    <>
      <h1>This is contact</h1>
      <div className="contact-field">
        Email:{" "}
        <a href="mailto:march.creative27@gmail.com">
          {" "}
          march.creative27@gmail.com
        </a>
        <br />
        Instagram: <a href="https://www.instagram.com/marchtanu">@march_tanu</a>
        <br />
        Line: <a href="https://line.me/ti/p/RnNtEUmp5j">march9797</a>
        <br />
        Discord:{" "}
        <a href="https://discordapp.com/users/1312469948391493704">
          {" "}
          marchtanu
        </a>
        <br />
        GitLab: <a href="https://gitlab.com/marchtanu"> marchtanu</a>
        <br />
        LinkedIn{" "}
        <a href="https://www.linkedin.com/in/tanupatsoj/">
          {" "}
          Tanupat Sojindamanee
        </a>
      </div>
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
