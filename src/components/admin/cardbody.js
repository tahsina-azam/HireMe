import * as React from "react";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function UsersCount({ type,name,amount,rating ,phone, area}) {
  
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
      <Typography variant="h6">
        {area}
      </Typography>
      <Typography variant="h7">
       {amount}
      </Typography>
      <Typography variant="h7">
        Rated {rating} out of 10
      </Typography>
    </React.Fragment>
  );
}
