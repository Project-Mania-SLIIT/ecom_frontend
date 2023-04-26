import React from "react";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

const index = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <br />

        <h1>
          <strong>WHO WE ARE</strong>
        </h1>
        <br />
        <br />
        <section>
          <div className="row">
            <div className="col-md-6 gx-5 mb-4">
              <div
                className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
                data-mdb-ripple-color="light"
              >
                <img
                  src="https://www.pcclean.io/wp-content/gallery/library-hd-wallpapers/919004.jpg"
                  className="img-fluid"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  />
                </a>
              </div>
            </div>
            <div className="col-md-6 gx-5 mb-4">
              <h3>
                <strong>
                  We believe a world-class library should be a direct reflection
                  of the exquisite nature of the content we preserve.
                </strong>
              </h3>
              <p>
                asdjfikfjdsklfdsjklfdsjkldfjkldfsjdfskljdfslkjdsf
                klsdjfkldsjlkfdsjlk;dfsjlkdfsjlkdsf
                sdjkldsfjdfskljdflskjdfslkjkdfs kl;sfjlkfdsjkdfskdfsklfdsjkdsf
              </p>
            </div>
          </div>
        </section>
        {/* Section: Content*/}
        <hr className="my-5" />
        {/*Section: Content*/}
        <section className="text-center">
          <h4 className="mb-5">
            <strong>What We Provide</strong>
          </h4>
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=30&auto=format&w=600&h=400&fit=crop&dpr=2"
                    className="img-fluid"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    />
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>Books</strong>
                  </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://c0.wallpaperflare.com/preview/422/190/338/announcement-article-articles-copy-coverage.jpg"
                    className="img-fluid"
                  />
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>Articles</strong>
                  </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://saylordotorg.github.io/text_understanding-media-and-culture-an-introduction-to-mass-communication/section_08/9c8126a9510afacdff08bffc2a09c4d3.jpg"
                    className="img-fluid"
                  />
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>Magazines</strong>
                  </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default index;
