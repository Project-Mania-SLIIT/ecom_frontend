import React, { useEffect, useState} from "react";
import axios from "axios";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { useParams } from "react-router";

const Index = () => {

  const params = useParams()
  const [product, setproduct] = useState([]);

  useEffect(() => {
    //console.log(params.id)
    axios
      .get("http://localhost:5001/product/" + params.id)
      .then((res) => {
        setproduct(res.data);
        //console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <div>
      <Navbar/>
      <div className="container mt-5">
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          <div className="col-md-6 mb-4">
            <img
              src={product.image}
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
                  <span className="badge bg-dark me-1">{product.category}</span>
                </a>
              </div>
              <p className="lead">
                <span>Rs.{product.price}.00</span>
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
            <h4 className="my-4 h4">Additional information</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              suscipit modi sapiente illo soluta odit voluptates, quibusdam
              officia. Neque quibusdam quas a quis porro? Molestias illo neque
              eum in laborum.
            </p>
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

export default Index;
