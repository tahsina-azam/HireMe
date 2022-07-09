import Container from "@mui/material/Container";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../componant/Navbar/Navbar";
import styles from "../styles/Home.module.css";
import Card from "@mui/material/Card";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Toolbar } from "@mui/material";
import { width } from "@mui/system";
export default function Home() {
  return (
    <>
      <Navbar />
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
