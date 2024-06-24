import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "2vh" }}>
      <div style={{ width: "80%", marginBottom: "2vh" }}>
        <p>This job search site was created by :</p>
        <div>
          <h1>Nasim Daghash</h1>
          <div style={{ overflow: "hidden" }}>
            <img
              src={process.env.PUBLIC_URL + "/Nasim.jpg"}
              alt="Nasim"
              style={{
                width: "20vh",
                height: "20vh",
                float: "left",
                margin: "1vh",
              }}
            />

            <p>
              Nasim is a Fullstack freelance developer who lost his job
              following the war in Gaza, and decided not to give up despite the
              difficult market situation.
            </p>
            <p>
              with an experince of almost two years , I decide to search for a
              job and join a company that offer me a place to learn and thrive ,
              I started to collect data about the companies open positions ,
              after collecting a big amount of data ,I decided to build this
              internet site , so other people can take advantage of it too .
            </p>
            <p>
              For more informatiom about me - please visit my{" "}
              <a
                href="https://www.linkedin.com/in/nasim-daghash/"
                target="_blank"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
        <div>
          <h2 style={{ textAlign: "left" }}>
            What makes this site special is:
          </h2>

          <p>
            1. The large amount of company names found in it (more than 1000
            companies names ) Arranged in ascending alphabetical order - no
            duplicates .
          </p>

          <p>
            2. The companies are presented in a table with pagination, where in
            the column next to the company name there is a direct link to the
            jobs page of that company (Sometimes you have to scroll down at the
            company site to find the jobs).
          </p>

          <p>
            3. In the last column there is a link to the company's LinkedIn
            directly to the jobs label (if the company has jobs that have been
            published on LinkedIn).
          </p>

          <p>
            Note that not all the companies publish there open jobs on the
            linkedin and on the oposite not all the companies have jobs page on
            there internet site .
          </p>
          <div style={{ width: "80%", margin: "0 auto", textAlign: "center" }}>
            <Link
              to="/contact"
              style={{
                border: "2px solid blue",
                padding: "5px",
                borderRadius: "5px",
                backgroundColor: "lightblue",
                textDecoration: "none",
              }}
            >
              <b>Contact</b>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
