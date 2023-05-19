import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";
import Swal from "sweetalert2";

export default function UpdFeedbackModal(props) {
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
          .put("http://localhost:5003/api/feedback/updatefeedback/" + props.fbid, FbData)
          .then(function (response) {
            setSatrate("");
            setMessage("");
            setShow(false);
            Swal.fire({
                title: "Success!",
                text: "Review updated Successfully",
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
        <Button className="btn btn-success ms-1" onClick={UpdateShow}>
        Edit
      </Button>

      <Modal show={show} size="lg" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Update Review</Modal.Title>
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
                  value={message}
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
            <Button variant="primary" type="submit" onClick={submitForm}>
              Update Review
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}
