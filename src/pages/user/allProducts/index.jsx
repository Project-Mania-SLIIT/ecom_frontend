import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

const AllProducts = () => {

  const [product, setproduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/product")
      .then((res) => {
        setproduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <Navbar />
      <div>
        <button
          className="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselExampleCaptions"
          data-mdb-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-mdb-target="#carouselExampleCaptions"
          data-mdb-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <main>
        <div className="container">
          <nav
            className="navbar navbar-expand-lg navbar-dark mt-3 mb-5 shadow p-2"
            style={{ backgroundColor: "#1C4E80" }}
          >
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Categories:
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent2"
                aria-controls="navbarSupportedContent2"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-bars" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent2"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item acitve">
                    <a className="nav-link text-white" href="#">
                      All
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                      Shirts
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                      Sport wears
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                      Outwears
                    </a>
                  </li>
                </ul>
                <form className="w-auto py-1" style={{ maxWidth: "12rem" }}>
                  <input
                    type="search"
                    className="form-control rounded-0"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </div>
            </div>
          </nav>
          <section>
            <div className="text-center">
              <div className="row">
              {product.map((prd) => (
                <div key={prd._id} className="col-lg-3 col-md-6 mb-4">
                  <div className="card">
                    <a href={"single/"+prd._id}>
                      <div
                        className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                        data-mdb-ripple-color="light"
                      >
                        <img
                          src={prd.image}
                          className="w-100"
                        />
                      </div>
                    </a>
                    <div className="card-body">
                      <a href className="text-reset">
                        <h5 className="card-title mb-2">{prd.name}</h5>
                      </a>
                      <a href className="text-reset ">
                        <p>{prd.category}</p>
                      </a>
                      <h6 className="mb-3 price">Rs.{prd.price}.00</h6>
                    </div>
                  </div>
                </div>
              ))}
              </div>
              <div className="row">

              </div>
            </div>
          </section>
          <nav
            aria-label="Page navigation example"
            className="d-flex justify-content-center mt-3"
          >
            <ul className="pagination">
              <li className="page-item disabled">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  4
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  5
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">»</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AllProducts;
