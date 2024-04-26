import React from "react";

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
        <h1 class="section-heading contact-heading">Contact Me</h1>
        <div style={{ marginLeft: "2vh" }}>
          <h3>You can reach me at the following :</h3>
        </div>
        <div class="contact-me">
          <div
            style={{
              margin: "3vh",
            }}
          >
            <div>My LinkedIn profile :</div>
            <a
              href="https://www.linkedin.com/in/nasim-daghash/"
              class="social-media-link"
              target="_blank"
            >
              <span class="about-me about-me-link">
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
            <a href="mailto:nisimdg@walla.com" class="social-media-link">
              <span class="about-me about-me-link">nisimdg@walla.com</span>
            </a>
          </div>
          <div
            style={{
              margin: "3vh",
            }}
          >
            <div>My phone :</div>
            <a class="social-media-link">
              <span class="about-me about-me-link">+(972)-52-2355515</span>
            </a>
          </div>
        </div>
      </div>
      <div style={{ width: "80%", margin: "0 auto", textAlign: "center" }}>
        <a href="./">Home</a>
      </div>
    </div>
  );
}
export default Contact;
