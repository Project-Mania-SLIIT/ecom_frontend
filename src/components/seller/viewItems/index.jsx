import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow.svg";
import { ReactComponent as DeleteIcon } from "../../../assets/icons/delete-icon.svg";
import { ReactComponent as EditIcon } from "../../../assets/icons/edit-icon.svg";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

//
export default function ViewItems() {
  //
  const [productList, setProductList] = React.useState([]);
  const navigate = useNavigate();

  // Swal.fire({ title: 'Are you sure?', text: "You won't be able to revert this!", icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!'}).then((result) => { if (result.isConfirmed) { Swal.fire( 'Deleted!', 'Your file has been deleted.', 'success' ) }

  React.useEffect(() => {
    axios
      .get("http://localhost:5001/product")
      .then((res) => {
        console.log(res.data);
        setProductList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function deleteHandler(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value === true) {
        axios
        .delete("http://localhost:5001/product/supplier/"+id).then((res) => {
          if (res) {
            Swal.fire({
              title: "Success!",
              text: "Your file has been deleted",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              window.location.reload();
            });
          } else {
            Swal.fire({
              title: "Error!",
              text: "Something went wrong",
              icon: "error",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={{ color: "#001EB9" }}>
              PRODUCT&nbsp;CODE
            </TableCell>
            <TableCell align="left" sx={{ color: "#001EB9" }}>
              IMAGE
            </TableCell>
            <TableCell align="left" sx={{ color: "#001EB9" }}>
              PRODUCT&nbsp;NAME
            </TableCell>
            <TableCell align="left" sx={{ color: "#001EB9" }}>
              PRICE
            </TableCell>
            <TableCell align="left" sx={{ color: "#001EB9" }}>
              QUANTITY
            </TableCell>
            <TableCell align="left" sx={{ color: "#001EB9" }}>
              ACTION
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productList.map((product) => (
            <TableRow
              key={product._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="left">
                {product.itemCode ? product.itemCode : "N/A"}
              </TableCell>
              <TableCell align="left">
                <img
                  src={product.image ? product.image : "N/A"}
                  width={100}
                  height={100}
                  alt="Product image"
                />
              </TableCell>
              <TableCell align="left">
                {product.name ? product.name : "N/A"}
              </TableCell>
              <TableCell align="left">
                {product.price ? product.price : "N/A"}
              </TableCell>
              <TableCell align="left">
                {product.quantity ? product.quantity : "N/A"}
              </TableCell>
              <TableCell align="left">
                <Box>
                  <IconButton
                  onClick={() => {
                    deleteHandler(product._id);
                  }}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      navigate(`/seller/viewitem/${product._id}`);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
