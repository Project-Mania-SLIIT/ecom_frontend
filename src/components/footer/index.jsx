import React from "react";
const Footer = () => {
  return (
    <div>
      <footer
        className="text-center text-white mt-4"
        style={{ backgroundColor: "#1C4E80" }}
      >
        <hr className="text-dark" />
        <div className="container">
          {/* Section: Social media */}
          <section className="mb-3">
            {/* Facebook */}
            <a
              className="btn-link btn-floating btn-lg text-white"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-facebook-f" />
            </a>
            {/* Twitter */}
            <a
              className="btn-link btn-floating btn-lg text-white"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-twitter" />
            </a>
            {/* Google */}
            <a
              className="btn-link btn-floating btn-lg text-white"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-google" />
            </a>
            {/* Instagram */}
            <a
              className="btn-link btn-floating btn-lg text-white"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-instagram" />
            </a>
            {/* YouTube */}
            <a
              className="btn-link btn-floating btn-lg text-white"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-youtube" />
            </a>
            {/* Github */}
            <a
              className="btn-link btn-floating btn-lg text-white"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-github" />
            </a>
          </section>
          {/* Section: Social media */}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            textColor: "#E0E0E0",
          }}
        >
          © 2023 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            ProjectMania
          </a>
        </div>
        {/* Copyright */}
      </footer>
    </div>
  );
};

export default Footer;
