//Needs links to my Github, Linkedin, and a Third Platform?

import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>My Full Stack Development Portfolio</strong> - a React site by{" "}
          <a href="https://github.com/brandonespencer" target="_blank" rel="noreferrer">
            brandonespencer
          </a>
          .
          <hr />
          <a
            href="https://www.linkedin.com/in/brandonespencer/"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}{" "}
          <a href="https://www.brandonespencer.com/" target="_blank" rel="noreferrer">
           website
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
