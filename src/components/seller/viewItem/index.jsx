import React, { useState } from "react";
// import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ViewItem = () => {
  const [itemCode, setItemCode] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isDisable, setIsDisable] = useState(true);

  React.useEffect(() => {
    setItemCode("IT100");
    setName("test");
    setPrice(100);
    setQuantity(10);
    setDescription("test");
    setImage(
      "data:image/jpeg;base64,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"
    );
  }, [isDisable]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "itemCode":
        setItemCode(value);
        break;
      case "name":
        setName(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "quantity":
        setQuantity(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "image":
        setImage(value);
        break;
      default:
        break;
    }
  };

  const validate = () => {
    let errors = {};
    let formIsValid = true;

    if (!itemCode) {
      formIsValid = false;
      errors["itemCode"] = "Please enter an item code";
    }

    if (!name) {
      formIsValid = false;
      errors["name"] = "Please enter a name";
    }

    if (!price) {
      formIsValid = false;
      errors["price"] = "Please enter a price";
    } else if (!/^\d+(\.\d{1,2})?$/.test(price)) {
      formIsValid = false;
      errors["price"] = "Please enter a valid price (e.g. 10 or 10.99)";
    }

    if (!quantity) {
      formIsValid = false;
      errors["quantity"] = "Please enter a quantity";
    } else if (!/^\d+$/.test(quantity)) {
      formIsValid = false;
      errors["quantity"] = "Please enter a valid quantity (e.g. 10)";
    }

    if (!description) {
      formIsValid = false;
      errors["description"] = "Please enter a description";
    }

    if (!image) {
      formIsValid = false;
      errors["image"] = "Please enter an image URL";
    }

    setFormErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit form data to server
      console.log({
        itemCode,
        name,
        price,
        quantity,
        description,
        image,
      });
      // Clear form fields
      setItemCode("");
      setName("");
      setPrice("");
      setQuantity("");
      setDescription("");
      setImage("");
      setFormErrors({});
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Box>
          <img
            src={image}
            alt="This is item image"
            style={{ width: "700px", borderRadius: "10px" }}
          />
        </Box>
        <TextField
          sx={{ width: "70%" }}
          label="Item Code"
          name="itemCode"
          value={itemCode}
          onChange={handleInputChange}
          error={formErrors["itemCode"]}
          helperText={formErrors["itemCode"]}
          disabled={isDisable}
        />
        <TextField
          sx={{ width: "70%" }}
          label="Name"
          name="name"
          value={name}
          onChange={handleInputChange}
          error={formErrors["name"]}
          helperText={formErrors["name"]}
          disabled={isDisable}
        />
        <TextField
          sx={{ width: "70%" }}
          label="Price"
          name="price"
          value={price}
          onChange={handleInputChange}
          error={formErrors["price"]}
          helperText={formErrors["price"]}
          disabled={isDisable}
        />
        <TextField
          sx={{ width: "70%" }}
          label="Quantity"
          name="quantity"
          value={quantity}
          onChange={handleInputChange}
          error={formErrors["quantity"]}
          helperText={formErrors["quantity"]}
          disabled={isDisable}
        />
        <TextField
          sx={{ width: "70%" }}
          label="Description"
          name="description"
          value={description}
          onChange={handleInputChange}
          error={formErrors["description"]}
          helperText={formErrors["description"]}
          multiline
          rows={5}
          disabled={isDisable}
        />
        <Box
          sx={{
            display: "flex",
            p: 1,
            m: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
            mb: 3,
            justifyContent: "flex-end",
          }}
        >
          <Box hidden={isDisable}>
            <Typography variant="h6" align="left" sx={{ fontSize: 18, ml: 2 }}>
              Add Images
            </Typography>
            <Typography
              variant="h6"
              align="left"
              sx={{ fontSize: 14, ml: 2, mb: 2, color: "#969191" }}
            >
              PNG,JPG,SVG or GIF <br></br>(Maximun file size 50mb)
            </Typography>
          </Box>
          <input
            accept="image/*"
            id="images-input"
            multiple
            type="file"
            hidden
            disabled={isDisable}
          />
          <label htmlFor="images-input" hidden={isDisable}>
            <Button
              variant="contained"
              sx={{
                borderRadius: 2,
                fontSize: 14,
                width: 50,
                height: 45,
                ml: 5,
                color: "primary",
                mt: 2,
              }}
              component="span"
            >
              <Typography variant="h6" sx={{ fontSize: 30 }}>
                +
              </Typography>
            </Button>
          </label>
        </Box>
        <Box
          sx={{
            display: "flex",
            p: 1,
            m: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
            mb: 3,
            justifyContent: "flex-end",
          }}
        >
          <label hidden={!isDisable}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={() => setIsDisable(false)}
            >
              Edit Item
            </Button>
          </label>
          <label hidden={isDisable}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              hidden={true}
            >
              Save Changes
            </Button>
          </label>
          <label hidden={isDisable}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              hidden={true}
              onClick={() => {
                setIsDisable(true);
                setFormErrors({});
              }}
            >
              Cancel
            </Button>
          </label>
        </Box>
      </form>
    </Box>
  );
};

export default ViewItem;
