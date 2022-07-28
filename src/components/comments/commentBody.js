import * as React from "react";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Rating from '@mui/material/Rating';
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function UsersCount({ person,message,rating }) {
  
  return (
    <React.Fragment>
      <Typography variant="h7" component="p">
        {person}
      </Typography>
      <Typography variant="h7" component="p">
        {message}
      </Typography>
      <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
    </React.Fragment>
  );
}