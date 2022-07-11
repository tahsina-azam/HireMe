import { useState } from "react";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { emailValidation, passwordStrength } from "../../validation/validation";
import axios from 'axios'
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};
export default function RegisterModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [helperText, setHelperText] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passHelperText, setPassHelperText] = useState("");

  // mail change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(emailValidation(e.target.value));
    const { valid, msg } = emailValidation(e.target.value);
    if (valid) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
    setHelperText(msg);
  };
  // password change
  const handlePasswordChange = (e) => {
    if (passwordStrength(e.target.value)) {
      setPasswordError(true);
      setPassHelperText("*Password should be between 8 and 60 characters");
    } else {
      setPasswordError(false);
      setPassHelperText("");
    }
    setPassword(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      password: password,
    };
    props.handleClose(false);

    if (emailValidation(email).valid && !passwordStrength(password)) {
      await axios
      .post("/api/register", newUser)
      .then(function (res) {
        setMsg(res.data.msg);
        setErr(res.data.err);
        console.log(res);
      })
      .catch(function (e) {
        console.log(e);
      });
      setEmail("");
      setPassword("");
    }
  };
  return (
    <Modal
      open={props.open}
      onClose={() => {
        props.handleClose(false);
      }}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'>
      <form onSubmit={submitHandler}>
        <Stack direction='column' spacing={4} sx={style}>
          <Typography variant='h6' sx={{ textAlign: "center" }}>
            SignUp{" "}
          </Typography>
          <TextField
            helperText={helperText}
            id='filled-basic'
            label='Email'
            type='text'
            value={email}
            onChange={handleEmailChange}
            error={emailError}
          />
          <TextField
            helperText={passHelperText}
            id='filled-basic'
            label='Password'
            type='password'
            value={password}
            onChange={handlePasswordChange}
            error={passwordError}
          />
          <Button variant='contained' type='submit'>
            Submit
          </Button>
        </Stack>
      </form>
    </Modal>
  );
}
