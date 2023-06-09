import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";
import Swal from "sweetalert2";

export default function AddFeedbackModal(props) {
    const [show, setShow] = useState(false);

    const productId = props.prodid;
    const productName = props.prodname;
    const productImage = props.prodimage;
    const userId = localStorage.getItem("user_id");
    const userEmail = localStorage.getItem("email");

    const [satisfaction_rate, setSatrate] = useState("");
    const [message, setMessage] = useState("");

    const FbData = {
        userId,
        productId,
        productName,
        productImage,
        userEmail,
        satisfaction_rate,
        message,
    };

    function handleSubmit(e) {
        e.preventDefault();
    
        if (
            satisfaction_rate.length === 0 ||
            message.length === 0
        ) {
          swal(" Fields Cannot be empty !", "Please enter all data !", "error");
        } else {
          console.log(FbData);
          axios
            .post("http://localhost:5003/api/feedback/addfeedback", FbData)
            .then(function (res) {
              // alert("Added Successfully");
              console.log(res);
              setSatrate("");
              setMessage("");
              Swal.fire({
                title: "Success!",
                text: "Review added Successfully",
                icon: "success",
                confirmButtonText: "Ok",
              })
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      }
    

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <>
      <Button className="btn btn-dark ms-1" onClick={handleShow}>
        Leave a Review
        <i className="fa fa-commenting ms-1" />
      </Button>

      <Modal show={show} size="lg" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Leave a Review</Modal.Title>
        </Modal.Header>

        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Col sm={3}>
                <Form.Label>Satisfactory Rate(0-10):</Form.Label>
              </Col>
              <Col sm={2}>
                <Form.Control
                  type="number"
                  defaultValue={0}
                  className="form-control"
                  max={10}
                  onChange={(e) => {
                    setSatrate(e.target.value);
                  }}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Col sm={3}>
                <Form.Label>Message:</Form.Label>
              </Col>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Exit
            </Button>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Submit Review
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
