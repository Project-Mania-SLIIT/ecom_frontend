import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";
import Swal from "sweetalert2";

export default function DelFeedbackModal(props) {
    const [show, setShow] = useState(false);

    const [feedbackId, setFeedbackId] = useState("");
    const [satisfaction_rate, setSatrate] = useState("");
    const [message, setMessage] = useState("");

    const FbData = {
        satisfaction_rate,
        message,
    };

    const UpdateShow = () => {
        console.log(props.fbid);
        setFeedbackId(props.fbid);
        axios
          .get("http://localhost:5003/api/feedback/" + props.fbid)
          .then(function (response) {
            setSatrate(response.data["satisfaction_rate"]);
            setMessage(response.data["message"]);
            setShow(true);
          })
          .catch(function (error) {
            console.log(error);
            alert("invalid");
          });
      };

      function submitForm(e) {
        e.preventDefault();
        axios
          .delete("http://localhost:5003/api/feedback/deletefeedback/" + props.fbid)
          .then(function (response) {
            setShow(false);
            Swal.fire({
                title: "Success!",
                text: "Review Deleted Successfully",
                icon: "success",
                confirmButtonText: "Ok",
            })
          })
          .catch(function (error) {
            console.log(error);
          });
      }

      const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
    <>
        <Button className="btn btn-danger ms-1" onClick={UpdateShow}>
        Delete
      </Button>

      <Modal show={show} size="lg" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Delete Review</Modal.Title>
        </Modal.Header>

        <Form>
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
                  value={satisfaction_rate}
                  max={10}
                  disabled
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
                  value={message}
                  disabled
                />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Exit
            </Button>
            <Button variant="primary" type="submit" onClick={submitForm}>
              Delete Review
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}
