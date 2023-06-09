import React, { useState } from "react";
// import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { LoadingOverlay } from "@mantine/core";

const AddItem = () => {
  const [itemCode, setItemCode] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const file = e.target.files[0];

      if (!file) return alert("File not exist.");

      if (file.size > 1024 * 1024)
        // 1mb
        return alert("Size too large!");

      if (file.type !== "image/jpeg" && file.type !== "image/png")
        // 1mb
        return alert("File format is incorrect.");

      let formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "carengo");
      formData.append("cloud_name", "itp2022");

      // setLoading(true)
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/itp2022/image/upload",
        formData,
        {
          method: "post",
          body: formData,
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      );
      // setLoading(false)
      console.log(res.data.url);
      setImage(res.data.url);
      setIsLoading(false);
    } catch (err) {
      console.log(err.response.data.msg);
      setIsLoading(false);
    }
  };

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
      case "category":
        setCategory(value);
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

    if (!category) {
      formIsValid = false;
      errors["category"] = "Please enter a category";
    }

    if (!description) {
      formIsValid = false;
      errors["description"] = "Please enter a description";
    }

    setFormErrors(errors);
    return formIsValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted");
      await axios
        .post(
          "http://localhost:5001/product/supplier/6448b8c733f5af0064c7096b",
          {
            itemCode,
            name,
            price,
            quantity,
            category,
            description,
            image,
          }
        )
        .then((res) => {
          alert("Item added successfully");
          // Clear form fields
          setItemCode("");
          setName("");
          setPrice("");
          setQuantity("");
          setCategory("");
          setDescription("");
          setImage("");
          setFormErrors({});
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  return (
    <Box>
      <LoadingOverlay visible={isLoading} overlayBlur={2} />
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ width: "70%", marginTop: 2 }}
          label="Item Code"
          name="itemCode"
          value={itemCode}
          onChange={handleInputChange}
          error={formErrors["itemCode"]}
          helperText={formErrors["itemCode"]}
        />
        <TextField
          sx={{ width: "70%", marginTop: 2 }}
          label="Name"
          name="name"
          value={name}
          onChange={handleInputChange}
          error={formErrors["name"]}
          helperText={formErrors["name"]}
        />
        <TextField
          sx={{ width: "70%", marginTop: 2 }}
          label="Price"
          name="price"
          value={price}
          onChange={handleInputChange}
          error={formErrors["price"]}
          helperText={formErrors["price"]}
        />
        <TextField
          sx={{ width: "70%", marginTop: 2 }}
          label="Quantity"
          name="quantity"
          value={quantity}
          onChange={handleInputChange}
          error={formErrors["quantity"]}
          helperText={formErrors["quantity"]}
        />
        <TextField
          sx={{ width: "70%", marginTop: 2 }}
          label="Category"
          name="category"
          value={category}
          onChange={handleInputChange}
          error={formErrors["category"]}
          helperText={formErrors["category"]}
        />
        <TextField
          sx={{ width: "70%", marginTop: 2 }}
          label="Description"
          name="description"
          value={description}
          onChange={handleInputChange}
          error={formErrors["description"]}
          helperText={formErrors["description"]}
          multiline
          rows={5}
        />
        <Box
          sx={{
            display: "flex",
            p: 1,
            m: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
            mb: 3,
            justifyContent: "center",
          }}
        >
          <Box>
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
            onChange={handleImageChange}
          />
          <label htmlFor="images-input">
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
          {image && (
            <Box
              sx={{
                mb: 2,
                ml: 5,
              }}
            >
              <img src={image} width={100} height={100} alt="Product image" />
            </Box>
          )}
        </Box>
        <Button variant="contained" color="primary" type="submit">
          Add Product
        </Button>
      </form>
    </Box>
  );
};

export default AddItem;
