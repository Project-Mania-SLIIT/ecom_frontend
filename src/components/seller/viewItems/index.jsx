import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow.svg";
import { ReactComponent as DeleteIcon } from "../../../assets/icons/delete-icon.svg";
import { ReactComponent as EditIcon } from "../../../assets/icons/edit-icon.svg";

//
export default function ViewItems() {
  //
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={{ color: "#001EB9" }}>
              SKU
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
              ACTION
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {productList.map((product) => (
            <TableRow
              key={product._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="left">
                {product.sku}
              </TableCell>
              <TableCell align="left">
                <img
                  src={product.images[0]}
                  width={100}
                  height={100}
                  alt="Product image"
                />
              </TableCell>
              <TableCell align="left">{product.product_name}</TableCell>
              <TableCell align="left">{product.price}</TableCell>
              <TableCell align="left">
                <Box>
                  <IconButton
                    onClick={() => {
                      handleDeleteClick(product._id);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      dispatch(getProductToEdit(product._id));
                      navigate(`/edit/${product._id}`);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton>
                    <StarIcon />
                  </IconButton>
                </Box>
              </TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
