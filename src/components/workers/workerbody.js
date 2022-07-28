import * as React from "react";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Rating from '@mui/material/Rating';

export default function UsersCount({ type,name,amount,rating ,phone}) {
  
  return (
    <React.Fragment>
      <Typography variant="h5">
        {name}
      </Typography>
      <Typography variant="h6">
        {type}
      </Typography>
      <Typography variant="h6">
        {phone}
      </Typography>
      <Typography variant="h7" component="p">
        He proposed to do it within {amount}!
      </Typography>
      <Rating name="size-large" defaultValue={0} size="large" />
    </React.Fragment>
  );
}
