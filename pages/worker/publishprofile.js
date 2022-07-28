import React from "react";
import { useState } from "react";
import NavBar from "../../src/components/App-Bar/workerAppbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import Select from "@mui/material/Select";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import axios from "axios";
import { useAuth } from "../../context/AuthProvider";

function index() {
  const [work, setWork] = useState("");
  const [fullName, setFullName] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [workDes, setWorkDescription] = useState("");
  const [completion, setCompletion] = useState("");
  const [amount, setAmount] = useState("");
  const { user } = useAuth();
  console.log(user.id);
  const handleSubmit = async (e) => {
    const newProfile = {
      id: user.id,
      fullName: fullName,
      description: description,
      contact: contact,
      address: address,
      work: work,
      workDes: workDes,
      completion: completion,
      amount: amount,
    };
    await axios.post("/api/worker/publishProfile", newProfile);
    setWork("");
    setFullName("");
    setDescription("");
    setContact("");
    setAddress("");
    setWorkDescription("");
    setCompletion("");
    setAmount("");
  };
  const handleChange = (event) => {
    setWork(event.target.value);
  };

  const jobs = [
    "Plumber",
    "AC repairer",
    "Electrician",
    "TV repairer",
    "Home Maid",
    "Driver",
    "Bricklayer",
    "Cook",
    "Care-taker",
    "others",
  ];
  return (
    <>
      <NavBar />
      <Box
        sx={{
          borderColor: "secondary",
          marginTop: 15,
          marginLeft: 10,
          display: "flex",
          flexDirection: "column",
          width: "50%",
        }}>
        <Typography variant='h5' sx={{ fontWeight: "bold", marginLeft: 10 }}>
          One more step, continue with publishing your profile...
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack direction='column' spacing={4} m={4}>
            <TextField
              fullWidth
              variant='outlined'
              label='Enter your Full Name'
              size='small'
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              required
            />
            <TextField
              variant='outlined'
              label='Contact Number'
              size='small'
              onChange={(e) => setContact(e.target.value)}
              value={contact}
              required
            />
            <TextField
              variant='outlined'
              label='Address'
              size='small'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <TextField
              variant='outlined'
              label='Describe about yourself in one sentence'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            {/* <TextField
              id='demo-simple-select-label'
              variant='outlined'
              label='Select your work'
            /> */}
            <FormControl>
              <InputLabel id='demo-simple-select-label'>
                Select your work
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={work}
                label='Select your Work'
                required
                onChange={handleChange}>
                {jobs.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              variant='outlined'
              label='Describe your work'
              value={workDes}
              onChange={(e) => setWorkDescription(e.target.value)}
              required
            />
            <TextField
              variant='outlined'
              label='Approximate completion time'
              value={completion}
              onChange={(e) => setCompletion(e.target.value)}
              required
            />
            <TextField
              variant='outlined'
              label='Minimum Payment in tk'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
            <Button
              variant='contained'
              type='submit'
              sx={{ width: "300px", marginBottom: 10 }}>
              {" "}
              Publish your profile
            </Button>
          </Stack>
        </form>
      </Box>
    </>
  );
}

export default index;
