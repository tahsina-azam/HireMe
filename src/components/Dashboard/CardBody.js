import * as React from "react";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function UsersCount({ type,link }) {
  
  return (
    <React.Fragment>
      <Typography variant="h5">
        {type}
      </Typography>
    </React.Fragment>
  );
}
