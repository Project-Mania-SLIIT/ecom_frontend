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

//
export default function ViewItems() {
  //
  const [productList, setProductList] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    axios
      .get("http://localhost:5001/")
      .then((res) => {
        console.log(res.data);
        setProductList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
                  // onClick={() => {
                  //   handleDeleteClick(product._id);
                  // }}
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
