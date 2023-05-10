import React, { useState } from "react";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

function App() {
  const [justifyActive, setJustifyActive] = useState("tab1");
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

  const validateName = (name) => {
    const regex = /^[a-zA-Z ]*$/;
    if (!name || !regex.test(name)) {
      return "Please enter a valid name.";
    }
    return "";
  };

  const validateAddress = (address) => {
    if (!address) {
      return "Please enter a valid address.";
    }
    return "";
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !regex.test(email)) {
      return "Please enter a valid email address.";
    }
    return "";
  };

  const validateContactNumber = (contactNumber) => {
    const regex = /^[0-9]*$/;
    if (!contactNumber || !regex.test(contactNumber)) {
      return "Please enter a valid contact number.";
    }
    return "";
  };

  const validateBusinessName = (businessName) => {
    if (!businessName) {
      return "Please enter a valid business name.";
    }
    return "";
  };

  const validateWebsite = (website) => {
    const regex = /^(http|https):\/\/[^ "]+$/;
    if (website && !regex.test(website)) {
      return "Please enter a valid website URL.";
    }
    return "";
  };

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!password || !regex.test(password)) {
      return "Please enter a valid password (at least 8 characters long and containing at least one letter, one number, and one special character).";
    }
    return "";
  };

  const handleSubmit = (e) => {
    console.log("ddsfsd");
    e.preventDefault();
    // const nameError = validateName(formData.name);
    // const addressError = validateAddress(formData.address);
    // const emailError = validateEmail(formData.email);
    // const contactNumberError = validateContactNumber(formData.contactNumber);
    // const businessNameError = validateBusinessName(formData.businessName);
    // const websiteError = validateWebsite(formData.website);
    // const passwordError = validatePassword(formData.password);

    // if (
    //   nameError ||
    //   addressError ||
    //   emailError ||
    //   contactNumberError ||
    //   (formData.isSeller && businessNameError) ||
    //   (formData.isSeller && websiteError) ||
    //   passwordError
    // ) {
    //   setErrors({
    //     name: nameError,
    //     address: addressError,
    //     email: emailError,
    //     contactNumber: contactNumberError,
    //     businessName: businessNameError,
    //     website: websiteError,
    //     password: passwordError,
    //   });
    //   return;
    // }

    // submit the form if there are no errors
    // ...
  };

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <div>
      <Navbar />
      <div>
        <MDBContainer className="p-2 my-5 d-flex flex-column w-50">
          <MDBTabs
            pills
            justify
            className="mb-3 d-flex flex-row justify-content-between"
          >
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleJustifyClick("tab1")}
                active={justifyActive === "tab1"}
              >
                Login
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleJustifyClick("tab2")}
                active={justifyActive === "tab2"}
              >
                Register
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>

          <MDBTabsContent>
            <MDBTabsPane show={justifyActive === "tab1"}>
              <div className="text-center mb-3">
                <p>Sign in with:</p>

                <div
                  className="d-flex justify-content-between mx-auto"
                  style={{ width: "40%" }}
                >
                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="facebook-f" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="twitter" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="google" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="github" size="sm" />
                  </MDBBtn>
                </div>

                <p className="text-center mt-3">or:</p>
              </div>

              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="form1"
                type="email"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form2"
                type="password"
              />

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Remember me"
                />
                <a href="!#">Forgot password?</a>
              </div>

              <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
              <p className="text-center">
                Not a member? <a href="#!">Register</a>
              </p>
            </MDBTabsPane>

            <MDBTabsPane show={justifyActive === "tab2"}>
              <div className="text-center mb-3">
                <p>Sign un with:</p>

                <div
                  className="d-flex justify-content-between mx-auto"
                  style={{ width: "40%" }}
                >
                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="facebook-f" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="twitter" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="google" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="github" size="sm" />
                  </MDBBtn>
                </div>

                <p className="text-center mt-3">or:</p>
              </div>

              <MDBInput
                wrapperClass="mb-4"
                label="Name"
                id="form1"
                type="text"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                onBlur={(e) =>
                  setErrors({ ...errors, name: validateName(e.target.value) })
                }
                error={errors.name} // display error message if there is an error
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Address"
                id="form1"
                type="text"
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="form1"
                type="email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Contact Number"
                id="form1"
                type="text"
                onChange={(e) =>
                  setFormData({ ...formData, contactNumber: e.target.value })
                }
              />
              <div hidden={!isSeller}>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Buisness Name"
                  id="form1"
                  type="text"
                  onChange={(e) =>
                    setFormData({ ...formData, buisnessName: e.target.value })
                  }
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Website"
                  id="form1"
                  type="text"
                  onChange={(e) =>
                    setFormData({ ...formData, website: e.target.value })
                  }
                />
              </div>
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form1"
                type="password"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />

              <div className="d-flex justify-content-center mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  id="flexCheckDefault"
                  label="Select if you are a seller"
                  onChange={() => setIsSeller(!isSeller)}
                />
              </div>

              <MDBBtn className="mb-4 w-100" onClick={handleSubmit}>
                Sign up
              </MDBBtn>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBContainer>
      </div>
      <Footer />
    </div>
  );
}

export default App;
