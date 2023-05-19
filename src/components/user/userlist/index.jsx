import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
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
export default function UserList() {
  //
  const [userList, setUserList] = React.useState([]);
  const navigate = useNavigate();

  const handleChange = (event, id) => {
    console.log(id, event.target.value);
    axios
      .put("http://localhost:5002/user/updatetype/" + id, {
        type: event.target.value,
      })
      .then((res) => {
        alert("Item updated successfully");
        axios
          .get("http://localhost:5002/user/all")
          .then((res) => {
            setUserList(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      });
  };

  // Swal.fire({ title: 'Are you sure?', text: "You won't be able to revert this!", icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!'}).then((result) => { if (result.isConfirmed) { Swal.fire( 'Deleted!', 'Your file has been deleted.', 'success' ) }

  React.useEffect(() => {
    axios
      .get("http://localhost:5002/user/all")
      .then((res) => {
        setUserList(res.data);
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
        .delete("http://localhost:5002/user/"+id).then((res) => {
          if (res) {
            Swal.fire({
              title: "Success!",
              text: "User has been deleted",
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
              NAME{" "}
            </TableCell>
            <TableCell align="left" sx={{ color: "#001EB9" }}>
              CONTACT NUMBER
            </TableCell>
            <TableCell align="left" sx={{ color: "#001EB9" }}>
              EMAIL
            </TableCell>
            <TableCell align="left" sx={{ color: "#001EB9" }}>
              ADDRESS
            </TableCell>
            <TableCell align="left" sx={{ color: "#001EB9" }}>
              USER TYPE
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.map((user) => (
            <TableRow
              key={user._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="left">
                {user.name ? user.name : "N/A"}
              </TableCell>
              <TableCell align="left">
                {user.contactNumber ? user.contactNumber : "N/A"}
              </TableCell>
              <TableCell align="left">
                {user.email ? user.email : "N/A"}
              </TableCell>
              <TableCell align="left">
                {user.address ? user.address : "N/A"}
              </TableCell>
              <TableCell align="left">
                <Box>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={user.type}
                    onChange={(e) => handleChange(e, user._id)}
                    autoWidth
                    label="Type"
                  >
                    <MenuItem value="user">User</MenuItem>
                    <MenuItem value="supplier">Supplier</MenuItem>
                    <MenuItem value="admin">Admin</MenuItem>
                  </Select>
                  
                  <IconButton
                  onClick={() => {
                    deleteHandler(user._id);
                  }}
                  >
                    <DeleteIcon />
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
