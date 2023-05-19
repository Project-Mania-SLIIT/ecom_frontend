import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { useParams } from "react-router";
import AddFeedbackModal from "../../../components/modals/Feedback/AddFeedbackModal";
import Swal from "sweetalert2";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

const Index = () => {
  const params = useParams();
  const [product, setproduct] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const productId = params.id;
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    //console.log(params.id)
    axios
      .get("http://localhost:5001/product/" + productId)
      .then((res) => {
        console.log(res);
        setproduct(res.data);
        //console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const cartData = {
    userId: localStorage.getItem("user_id"),
    products: [
      {
        product: productId,
        quantity: quantity,
      },
    ],
  };

  const handleAddCart = () => {
    axios
      .post("http://localhost:5004/api/cart", cartData)
      .then(function (response) {
        Swal.fire({
          title: "Success!",
          text: "Added to Cart",
          icon: "success",
          confirmButtonText: "Ok",
        });
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  // useEffect(() => {
  //   //console.log(params.id)
  //   axios
  //     .get("http://localhost:5003/api/feedback/grfbprd" + productId)
  //     .then((res) => {
  //       setFeedback(res.data);
  //       console.log(res.data)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5003/api/feedback/grfbprd/${productId}`)
      .then((res) => {
        setFeedback(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          <div className="col-md-6 mb-4">
            <img src={product.image} className="img-fluid" alt="" />
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-md-6 mb-4">
            {/*Content*/}
            <div className="p-4">
              <div className="mb-3">
                <a href>
                  <span className="badge bg-dark">{product.category}</span>
                </a>
              </div>
              <a href className="text-reset">
                <h2 className="card-title">{product.name}</h2>
              </a>
              <h4 className="price">Rs.{product.price}.00</h4>
              <form className="d-flex justify-content-center">
                {/* Default input */}
                <div className="me-5" style={{ width: "100px" }}>
                  No. of Items
                  <input
                    type="number"
                    defaultValue={1}
                    className="form-control"
                    value={quantity}
                    onChange={(e) => {
                      setQuantity(e.target.value);
                    }}
                  />
                </div>
                <button
                  className="btn btn-primary ms-5"
                  type="submit"
                  onClick={handleAddCart}
                >
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
          <div className="col-md-6 text-center">
            <AddFeedbackModal
              prodid={productId}
              prodname={product.name}
              prodimage={product.image}
            />
          </div>
        </div>
        <br />
        <div className="">
          <h4>Reviews</h4>
          {feedback.map((fb) => (
          <MDBCard className="mb-3 border border-success" >
            <MDBCardBody key={fb.feedbackId} > 
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row">
                  <div className="ms-3">
                    <MDBTypography tag="h6" className="font-italic"><i class="fa fa-share" aria-hidden="true"></i> {fb.userEmail}</MDBTypography>
                    <p className="large mb-0 font-weight-bold"><i class="fa fa-star" aria-hidden="true"></i> {fb.satisfaction_rate}/10</p>
                  </div>
                </div>
                <div className="d-flex flex-row">
                  <div style={{ width: "1000px" }}>
                    <MDBTypography tag="h6" className="fw-normal mb-0">
                    <i class="fa fa-comments" aria-hidden="true"></i> {fb.message}
                    </MDBTypography>
                  </div>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
          ))}
        </div>
      </div>
      <div className="" style={{ bottom: "0" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
