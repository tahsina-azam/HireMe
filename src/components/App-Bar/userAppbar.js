import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import Link from "next/link";
import AdminLibrarySearch from "../common/SearchBar";

const CustomButton = styled("Button")({
  variant: "text",
  color: "black",
  fontWeight: "bold",
  fontFamily: "Roboto",
  fontSize: "15px",
  border: "none",
  backgroundColor: "inherit",
  cursor: "pointer",
});
export default function Navbar(props) {
  const [signUpModal, setsignUpModalOpen]=useState(false)
  const signUpHandler =()=>{
   setsignUpModalOpen(true);
  }
  return (
    <>
      <AppBar
        position='fixed'
        sx={{
          backgroundColor: "white",
          marginLeft: "20px",
          boxShadow: "none",
          color: "black",
        }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack direction='row' spacing={4}>
            <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{
                color: "black",
                fontFamily: "futura",
                fontWeight: "bold",
              }}>
              HireMe
            </Typography>
            <AdminLibrarySearch/>
          </Stack>
          
          <Stack direction='row' spacing={4}>
           <CustomButton>Dashboard</CustomButton>
            <CustomButton>post</CustomButton>
            <CustomButton onClick={signUpHandler}>Profile</CustomButton>
            <CustomButton>Logout</CustomButton>
          </Stack>
        </Toolbar>
      </AppBar>
      
    </>
  );
}
