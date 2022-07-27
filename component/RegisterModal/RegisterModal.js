import { useState } from "react";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { emailValidation, passwordStrength } from "../../validation/validation";
import {storage} from "../../firebase"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
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
  const [name, setName] = useState("");
  const [helperText, setHelperText] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passHelperText, setPassHelperText] = useState("");
  const [file, setFile] = useState([]);
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
  const handleNameChange = (e) =>{
    setName(e.target.value);
  }
  const handleInput = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      name: name,
      email: email,
      password: password,
      role: "client",
      nid: "",
    };
    props.handleClose(false);
    if (emailValidation(email).valid && !passwordStrength(password)) {
      if(props.type == "service")
       {
        uploadfiles(file)
        return;
       }
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
      setName("");
    }
  };
    const uploadfiles = (files) => {
    if (!files) return;
    const imageRef = ref(storage, `/nid/${files.name}`);
    uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then(async (url) => {
        const body = {
          name: name,
          email: email,
          password: password,
          nid: url,
          role: 'Service Provider'
        };

        const res = await axios.post("/api/register", body).then(function (res) {
        setMsg(res.data.msg);
        setErr(res.data.err);
        console.log(res);
      })
      .catch(function (e) {
        console.log(e);
      });
      setEmail("");
      setPassword("");
      setName("");
        
      });
    });
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
           {props.type=='service'?'Become a Service Provider':'SignUp'}
          </Typography>
          <TextField

            id='filled-basic'
            label='Name'
            type='text'
            value={name}
            onChange={handleNameChange}
          />
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
          {props.type=='service' && (<>
            <h5 style={{marginTop:'6px'}}>Upload National ID</h5>
        <input style={{marginTop:'4px'}} type="file"  accept='image/png, image/jpeg'
          onChange={handleInput}></input>
        </>
      )}
          <Button variant='contained' type='submit'>
            Submit
          </Button>
        </Stack>
      </form>
    </Modal>
  );
}
