import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ width: "80%", margin: "0 auto" }}>
        <h1 className="section-heading contact-heading">Contact Me</h1>
        <div>
          If your company does not exist on this platform, and you want to add
          it, or if you exist on this platform and you do not want to remain on
          it for any reason, or if you are interested in offering me a position,
          please contact me.
        </div>
        <div style={{ marginLeft: "2vh" }}>
          <h3>You can reach me at the following :</h3>
        </div>
        <div className="contact-me">
          <div
            style={{
              margin: "3vh",
            }}
          >
            <div>My LinkedIn profile :</div>
            <a
              href="https://www.linkedin.com/in/nasim-daghash/"
              className="social-media-link"
              target="_blank"
            >
              <span className="about-me about-me-link">
                https://www.linkedin.com/in/nasim-daghash/
              </span>
            </a>
          </div>

          <div
            style={{
              margin: "3vh",
            }}
          >
            <div>My eMail :</div>
            <a href="mailto:nisimdg@walla.com" className="social-media-link">
              <span className="about-me about-me-link">nisimdg@walla.com</span>
            </a>
          </div>
          <div
            style={{
              margin: "3vh",
            }}
          >
            <div>Phone/WhatsApp :</div>
            <a className="social-media-link">
              <span className="about-me about-me-link">+(972)-52-2355515</span>
            </a>
          </div>
        </div>
      </div>
      <div style={{ width: "80%", margin: "0 auto", textAlign: "center" }}>
        <Link to="/">
          <b>Home</b>
        </Link>
      </div>
    </div>
  );
}
export default Contact;
