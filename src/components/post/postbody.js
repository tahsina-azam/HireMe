import * as React from "react";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function UsersCount({ title, budget,type,address,days,userId }) {
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  const newdate = year + "/" + month + "/" + day;
  return (
    <React.Fragment>
      <Typography variant="h5">
        {title}
      </Typography>
      <Typography variant="h6" >
       Address: {address}
      </Typography>
      <Typography >
       Type: {type}
      </Typography>
      <Typography component="p" >
        Budget: {budget} Tk.
      </Typography>
      <Typography component="p">
        We need it within {days} days!
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {newdate}
      </Typography>
      <div>
      <Stack direction="row" spacing={2}> 
      <TextField
          id="outlined-number"
          variant="standard"
          type="number"
          label="Offer your price!"
         
        />
      <Button variant="contained"  endIcon={<SendIcon />}>
            Take this job
      </Button>
      </Stack>
      </div>
    </React.Fragment>
  );
}
