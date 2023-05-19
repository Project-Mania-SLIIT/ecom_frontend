/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import "./shoppingCart.css";
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
import axios from "axios";
import { Button } from "react-bootstrap";

export default function shoppingCart() {
  const [cart, setCart] = useState([]);
  const id = localStorage.getItem("user_id");
  const [totalPrice, setTotalPrice] = useState(0);
  const [noOfItems, setNoOfItems] = useState(0);
  
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  }

  useEffect(() => {
    axios
      .get(`http://localhost:5004/api/cart/${id}` ,config)
      .then(function (response) {
        console.log(response);
        setCart(response.data.products);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, [cart]);

  const handleRemoveProduct = (productId, e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5004/api/cart/${id}/` + productId ,config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  axios
    .get(`http://localhost:5004/api/cart/getTotalPrice/${id}` ,config)
    .then((response) => {
      console.log(response.data);
      setTotalPrice(response.data.totalPrice);
    })
    .catch((error) => {
      console.log(error);
    });

  axios
    .get(`http://localhost:5004/api/cart/getCartCount/${id}` ,config)
    .then((response) => {
      setNoOfItems(response.data.count)
    })
    .catch((error) => {
      console.log(error)
    })

  const handleRemove = () => {
    axios
      .delete(`http://localhost:5004/api/cart/${id}` ,config)
      .then((response) => {
        console.log("Deleted");
        setCart([]);
        window.location = "/allProducts";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar />
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol>
              <MDBCard>
                <MDBCardBody className="p-4">
                  <MDBRow>
                    <MDBCol lg="7" className="px-5 py-4">
                      <MDBTypography
                        tag="h3"
                        className="mb-5 pt-2 text-center fw-bold text-uppercase"
                      >
                        Your products
                      </MDBTypography>

                      <hr />

                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-0">You have {noOfItems} items in your cart</p>
                        </div>
                      </div>
                      {cart &&
                        cart.map((ct) => (
                      <MDBCard className="mb-3">
                        <MDBCardBody>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <MDBCardImage
                                  src={ct.product?.image}
                                  fluid
                                  className="rounded-3"
                                  style={{ width: "65px" }}
                                  alt="Shopping item"
                                />
                              </div>
                              <div className="ms-3">
                                <MDBTypography tag="h5">
                                {ct.product?.name}
                                </MDBTypography>
                                <p className="small mb-0">{ct.product?.category}</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{ width: "50px" }}>
                                <MDBTypography
                                  tag="h5"
                                  className="fw-normal mb-0"
                                >
                                  {ct.quantity}
                                </MDBTypography>
                              </div>
                              <div style={{ width: "150px" }}>
                                <MDBTypography tag="h5" className="mb-0">
                                Rs. {ct.product?.price}.00
                                </MDBTypography>
                              </div>
                              <a href="#!" onClick={(e) =>
                                  handleRemoveProduct(ct.product._id, e)
                                } style={{ color: "#cecece" }}>
                                <MDBIcon fas icon="trash-alt" />
                              </a>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between">
                            <h6 className="mb-2">Sub Total</h6>
                            <h6 className="mb-2">Rs. {ct.product?.price * ct.quantity}.00</h6>
                          </div>
                        </MDBCardBody>
                      </MDBCard>
                      ))}
                      <div className="d-flex justify-content-between">
                        <h3 className="mb-2">Total</h3>
                        <h3 className="mb-2">Rs. {totalPrice}.00</h3>
                      </div>
                      <Button onClick={handleRemove}>Discard Cart</Button>
                    </MDBCol>
                    

                    <MDBCol lg="5" className="px-5 py-4">
                      <MDBTypography
                        tag="h3"
                        className="mb-5 pt-2 text-center fw-bold text-uppercase"
                      >
                        Payment
                      </MDBTypography>

                      <form className="mb-5">
                        <MDBInput
                          className="mb-5"
                          label="Card number"
                          type="text"
                          size="lg"
                          placeholder="1234 5678 9012 3457"
                        />

                        <MDBInput
                          className="mb-5"
                          label="Name on card"
                          type="text"
                          size="lg"
                          placeholder="John Smith"
                        />

                        <MDBRow>
                          <MDBCol md="6" className="mb-5">
                            <MDBInput
                              className="mb-4"
                              label="Expiration"
                              type="text"
                              size="lg"
                              minLength="7"
                              maxLength="7"
                              placeholder="MM/YYYY"
                            />
                          </MDBCol>
                          <MDBCol md="6" className="mb-5">
                            <MDBInput
                              className="mb-4"
                              label="Cvv"
                              type="text"
                              size="lg"
                              minLength="3"
                              maxLength="3"
                              placeholder="&#9679;&#9679;&#9679;"
                            />
                          </MDBCol>
                        </MDBRow>

                        <p className="mb-5">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit
                          <a href="#!"> obcaecati sapiente</a>.
                        </p>

                        <MDBBtn block size="lg">
                          Buy now
                        </MDBBtn>

                        <MDBTypography
                          tag="h5"
                          className="fw-bold mb-5"
                          style={{ position: "absolute", bottom: "0" }}
                        >
                          <a href="/allProducts">
                            <MDBIcon fas icon="angle-left me-2" />
                            Back to shopping
                          </a>
                        </MDBTypography>
                      </form>
                    </MDBCol>
                    {/* <MDBCol lg="5">
                <MDBCard className="bg-primary text-white rounded-3">
                  <MDBCardBody>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <MDBTypography tag="h5" className="mb-0">
                        Card details
                      </MDBTypography>
                      <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                        fluid className="rounded-3" style={{ width: "45px" }} alt="Avatar" />
                    </div>

                    <p className="small">Card type</p>
                    <a href="#!" type="submit" className="text-white">
                      <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                    </a>
                    <a href="#!" type="submit" className="text-white">
                      <MDBIcon fab icon="cc-visa fa-2x me-2" />
                    </a>
                    <a href="#!" type="submit" className="text-white">
                      <MDBIcon fab icon="cc-amex fa-2x me-2" />
                    </a>
                    <a href="#!" type="submit" className="text-white">
                      <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                    </a>

                    <form className="mt-4">
                      <MDBInput className="mb-4" label="Cardholder's Name" type="text" size="lg"
                        placeholder="Cardholder's Name" contrast />

                      <MDBInput className="mb-4" label="Card Number" type="text" size="lg"
                        minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />

                      <MDBRow className="mb-4">
                        <MDBCol md="6">
                          <MDBInput className="mb-4" label="Expiration" type="text" size="lg"
                            minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                        </MDBCol>
                        <MDBCol md="6">
                          <MDBInput className="mb-4" label="Cvv" type="text" size="lg" minLength="3"
                            maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                        </MDBCol>
                      </MDBRow>
                    </form>

                    <hr />

                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Subtotal</p>
                      <p className="mb-2">$4798.00</p>
                    </div>

                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Shipping</p>
                      <p className="mb-2">$20.00</p>
                    </div>

                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Total(Incl. taxes)</p>
                      <p className="mb-2">$4818.00</p>
                    </div>

                    <MDBBtn color="info" block size="lg">
                      <div className="d-flex justify-content-between">
                        <span>$4818.00</span>
                        <span>
                          Checkout{" "}
                          <i className="fas fa-long-arrow-alt-right ms-2"></i>
                        </span>
                      </div>
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol> */}
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      {/* <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="h-100 py-5">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol>
              <MDBCard
                className="shopping-cart"
                style={{ borderRadius: "15px" }}
              >
                <MDBCardBody className="text-black">
                  <MDBRow>
                    <MDBCol lg="7" className="px-5 py-4">
                      <MDBTypography
                        tag="h3"
                        className="mb-5 pt-2 text-center fw-bold text-uppercase"
                      >
                        Your products
                      </MDBTypography>

                      {cart &&
                        cart.map((ct) => (
                          <div className="d-flex align-items-center mb-3">
                            <div className="flex-shrink-0">
                              <MDBCardImage
                                src={ct.product?.image}
                                fluid
                                style={{ width: "150px" }}
                                alt="Generic placeholder image"
                              />
                            </div>

                            <div className="flex-grow-1 ms-5">
                              <a
                                href="#"
                                onClick={(e) =>
                                  handleRemoveProduct(ct.product._id, e)
                                }
                                className="float-end text-black"
                              >
                                <MDBIcon fas icon="times" />
                              </a>
                              <MDBTypography tag="h5" className="text-primary">
                                {ct.product?.name}
                              </MDBTypography>
                              <MDBTypography
                                tag="h6"
                                style={{ color: "#9e9e9e" }}
                                className="fw-bold"
                              >
                                Rs. {ct.product?.price}.00
                              </MDBTypography>
                              <div className="def-number-input number-input safari_only">
                                <button className="minus"></button>
                                <input
                                  className="quantity fw-bold text-black"
                                  min={0}
                                  defaultValue={1}
                                  type="number"
                                  value={ct.quantity}
                                />
                                <button className="plus"></button>
                                <div className="row">
                                  <div className="col"></div>
                                  Sub total :
                                  <div className="col"></div>
                                  <div className="col">
                                    Rs. {ct.product?.price * ct.quantity}.00
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}

                      <hr
                        className="mb-4"
                        style={{
                          height: "2px",
                          backgroundColor: "#1266f1",
                          opacity: 1,
                        }}
                      />

                      <div className="d-flex justify-content-between px-x">
                        <p className="fw-bold">Discount:</p>
                        <p className="fw-bold">95$</p>
                      </div>
                      <div
                        className="d-flex justify-content-between p-2 mb-2"
                        style={{ backgroundColor: "#e1f5fe" }}
                      >
                        <MDBTypography tag="h5" className="fw-bold mb-0">
                          Total:
                        </MDBTypography>
                        <MDBTypography tag="h5" className="fw-bold mb-0">
                          RS. {totalPrice}.00
                        </MDBTypography>
                      </div><br/>
                      <Button onClick={handleRemove}>Discard Cart</Button>
                    </MDBCol>


                    
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section> */}
      <Footer />
    </div>
  );
}
