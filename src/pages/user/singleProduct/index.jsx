import React from "react";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import AddFeedbackModal from "../../../components/modals/Feedback/AddFeedbackModal";
import baraka from "../../../assets/images/black_seed_oil_53bf601c6b24e_1.jpg"
import shoppingCart from "../shoppingCart";

const index = () => {
  return (
    <div>
      <Navbar/>
      <div className="container mt-5">
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          <div className="col-md-6 mb-4">
            <img
              src={baraka}
              className="img-fluid"
              alt=""
            />
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-md-6 mb-4">
            {/*Content*/}
            <div className="p-4">
              <div className="mb-3">
                <a href>
                  <span className="badge bg-dark me-1">Medicines</span>
                </a>
                <a href>
                  <span className="badge bg-info me-1">New</span>
                </a>
                <a href>
                  <span className="badge bg-danger me-1">Bestseller</span>
                </a>
              </div>
              <p className="lead">
                <span>Rs.1000.00</span>
              </p>
              <strong>
                <p style={{ fontSize: "20px" }}>Baraka Black Seed Oil</p>
              </strong>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                dolor suscipit libero eos atque quia ipsa sint voluptatibus!
                Beatae sit assumenda asperiores iure at maxime atque repellendus
                maiores quia sapiente.
              </p>
              <form className="d-flex justify-content-left">
                {/* Default input */}
                <div className="form-outline me-1" style={{ width: "100px" }}>
                  <input
                    type="number"
                    defaultValue={1}
                    className="form-control"
                  />
                </div>
                <button className="btn btn-primary ms-1" type="submit">
                  Add to cart
                  <i className="fas fa-shopping-cart ms-1" />
                </button>
              </form>
            </div>
            {/*Content*/}
          </div>
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
        <hr />
        {/*Grid row*/}
        <div className="row d-flex justify-content-center">
          {/*Grid column*/}
          <div className="col-md-6 text-center">
            <AddFeedbackModal/>
          {/* <button className="btn btn-primary ms-1" type="submit">
                  Leave a review
                  <i className="fa fa-commenting ms-1" />
                </button> */}
          </div>
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          <div className="col-lg-4 col-md-12 mb-4">
            <img
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/11.jpg"
              className="img-fluid"
              alt=""
            />
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-4 col-md-6 mb-4">
            <img
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/12.jpg"
              className="img-fluid"
              alt=""
            />
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-4 col-md-6 mb-4">
            <img
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg"
              className="img-fluid"
              alt=""
            />
          </div>
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
      </div>
      <Footer/>
    </div>
  );
};

export default index;
