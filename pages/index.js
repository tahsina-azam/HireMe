import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
import RegisterModal from "../component/RegisterModal/RegisterModal";
import LoginModal from "../component/RegisterModal/LoginModal";
import AuthContext, { useAuth } from "../context/AuthProvider";
const CustomButton = styled("button")({
  variant: "text",
  color: "black",
  fontWeight: "bold",
  fontFamily: "Roboto",
  fontSize: "15px",
  border: "none",
  backgroundColor: "inherit",
  cursor: "pointer",
});
export default function Home() {
  const [Modal, setModalOpen] = useState(false);
   const [signInModal, setsignInModalOpen] = useState(false);
  const [type,setType] = useState("");
  const signUpHandler = () => {
    setType("signUp")
    setModalOpen(true);
  };
  const signInHandler = () => {
    console.log('yoooooo')
    setsignInModalOpen(true);
  };
 const serviceProviderHandler = () =>{
   setType("service")
    setModalOpen(true);
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
          <Stack direction='row'>
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
          </Stack>
          <Stack direction='row' spacing={4}>
            <CustomButton>Explore</CustomButton>
            <CustomButton onClick={serviceProviderHandler}>Become a service provider</CustomButton>
            <CustomButton onClick={signInHandler}>SignIn</CustomButton>
            <CustomButton onClick={signUpHandler}>Join</CustomButton>
          </Stack>
        </Toolbar>
      </AppBar>
      {Modal && (
        <RegisterModal open={Modal} handleClose={setModalOpen} type={type}/>
      )}
      {signInModal && (
        <LoginModal open={signInModal} handleClose={setsignInModalOpen}/>
      )}
     

      <Stack
        direction='row'
        component='main'
        sx={{
          backgroundColor: "transparent",
          height: "700px",
          width: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography
          variant='h3'
          component='div'
          sx={{
            color: "black",
            fontFamily: "futura",
            fontWeight: "bold",
            marginX: "50px",
            width: "500px",
          }}>
          Find a job that you
          <p style={{ color: "#2B468A", margin: "0px", padding: "0px" }}>
            love to do
          </p>
        </Typography>

        <Image
          src='/bg.jpg'
          width={800}
          height={500}
          alt='your image'
          layout={"intrinsic"}
        />
      </Stack>
    </>
  );
}
