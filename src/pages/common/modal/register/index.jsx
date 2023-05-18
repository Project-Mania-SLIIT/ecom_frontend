import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import axios from "axios";

export default function Register() {
  const [show, setShow] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    contactNumber: "",
    buisnessName: "",
    website: "",
    password: "",
  });

  const validate = () => {
    let isValidate = true;
    const regexname = /^[a-zA-Z ]*$/;
    const regexemail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const regexcontact = /^[0-9]{10}$/;
    const regexpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
    const regexwebsite = /^(http|https):\/\/[^ "]+$/;
    if (!formData.name || !regexname.test(formData.name)) {
      isValidate = false;
      Swal.fire({
        title: "Error!",
        text: "Please enter a valid name.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
    if (!formData.address) {
      isValidate = false;
      Swal.fire({
        title: "Error!",
        text: "Please enter a valid address.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
    if (!formData.email || !regexemail.test(formData.email)) {
      isValidate = false;
      Swal.fire({
        title: "Error!",
        text: "Please enter a valid email address.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
    if (!formData.contactNumber || !regexcontact.test(formData.contactNumber)) {
      isValidate = false;
      Swal.fire({
        title: "Error!",
        text: "Please enter a valid contact number.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
    // if (!formData.buisnessName && isSeller) {
    //   isValidate = false;
    //   Swal.fire({
    //     title: "Error!",
    //     text: "Please enter a valid business name.",
    //     icon: "error",
    //     confirmButtonText: "Ok",
    //   });
    // }
    // if (
    //   !formData.website ||
    //   (!regexwebsite.test(formData.website) && isSeller)
    // ) {
    //   isValidate = false;
    //   Swal.fire({
    //     title: "Error!",
    //     text: "Please enter a valid website.",
    //     icon: "error",
    //     confirmButtonText: "Ok",
    //   });
    // }
    if (!formData.password || !regexpassword.test(formData.password)) {
      isValidate = false;
      Swal.fire({
        title: "Error!",
        text: "Please enter a valid password. Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
    return isValidate;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      await axios
        .post("http://localhost:5002/user/register", {
          formData,
        })
        .then((res) => {
          Swal.fire({
            title: "Success!",
            text: "Registration Successful",
            icon: "success",
            confirmButtonText: "Ok",
          });
          // Clear form fields
        })
        .catch((err) => {
          Swal.fire({
            title: "Registration Failed!",
            text: err.response.data,
            icon: "error",
            confirmButtonText: "Ok",
          });
        });
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        Register
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Name"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                ></input>
              </div>
              <div class="form-group col-md-6">
                <label for="inputEmail4">Address</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Address"
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                ></input>
              </div>
              <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                ></input>
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Password"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                ></input>
              </div>
            </div>
            <div class="form-group col-md-6">
              <label for="inputEmail4">Contact Number</label>
              <input
                type="number"
                class="form-control"
                placeholder="Contact Number"
                onChange={(e) =>
                  setFormData({ ...formData, contactNumber: e.target.value })
                }
              ></input>
            </div>
            <div hidden={!isSeller}>
              <div class="form-group col-md-6">
                <label for="inputEmail4">Buisness Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Buisness Name"
                  onChange={(e) =>
                    setFormData({ ...formData, buisnessName: e.target.value })
                  }
                ></input>
              </div>
              <div class="form-group col-md-6">
                <label for="inputEmail4">Website</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Website"
                  onChange={(e) =>
                    setFormData({ ...formData, website: e.target.value })
                  }
                ></input>
              </div>
            </div>
            <br />
            <div class="form-group">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                  onChange={() => setIsSeller(!isSeller)}
                ></input>
                <label class="form-check-label" for="gridCheck">
                  Select if you are a seller
                </label>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSubmit}>
            Register
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
