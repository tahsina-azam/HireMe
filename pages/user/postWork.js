import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Autocomplete from "@mui/material/Autocomplete";
import SendIcon from '@mui/icons-material/Send';
import NavBar from "../../src/components/App-Bar/userAppbar"
import axios from "axios"
import { useAuth } from '../../context/AuthProvider';
import { useState } from 'react';
const works = ["plumber", "ac repairer", "cook", "cleaner","pest control"];



export default function BasicCard() {
   const {user} = useAuth();
   const [type, setType] = useState("");
    const [values, setValues] = React.useState({
        description: '',
        address: '',
        budget: '',
        type: '',
        time: '',
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
      const handleSubmit = () =>{
        const data={
          userid:user.email,
          description: values.description,
          address: values.address,
          budget:values.budget,
          type:type,
          time:values.time
        };
        console.log(data);
        axios.post("/api/user/post",data).then((res)=>{
          console.log(res);
        }).catch((err)=>{
          console.log(err);
        })
      }

  return (
    <>
    <div>
    <NavBar/>
    </div>
    <div>
         <Box
        sx={{
          borderColor: 'primary.main',
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
         <Card sx={{ minWidth: 275, maxWidth: 500  }} style={{ border: "1px solid blue" }}>
      <CardContent>
        <Typography variant="h5" align="center">
          Post your job
        </Typography>
        <div>
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
            <TextField
            sx={{ width: 450 }}
            required
          id="outlined-multiline-flexible"
          label="Description"
          multiline
          maxRows={4}
          value={values.description}
          onChange={handleChange('description')}
        />
        </FormControl> 
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <TextField
          sx={{ width: 450 }}
          required
          id="outlined-multiline-flexible"
          label="Address"
          multiline
          maxRows={4}
          value={values.address}
          onChange={handleChange('address')}
        />
          </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
        <TextField
          required
          id="standard-number"
          type="number"
          label="budget"
          value={values.budget}
          onChange={handleChange('budget')}
        />
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
        <TextField
          id="standard-number"
          type="number"
          label="days to finish within"
          value={values.time}
          onChange={handleChange('time')}
        />
        </FormControl>
        <FormControl sx={{ m: 1 }} variant="filled"> 
        <Autocomplete
                    freeSolo
                    value={type}
                    disablePortal
                    id="combo-box-demo"
                    sx={{ width: 450 }}
                    options={works}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        required
                        fullWidth
                        id="role"
                        label="type"
                        name="role"
                        onChange={(e) => {
                          setVal(e.target.value);
                          handleChange(val);
                        }}
                        //onChange={handleChange('type')}
                      />
                    )}
                  />
        </FormControl>
      </div>
      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
      <Button variant="contained" onClick={handleSubmit} endIcon={<SendIcon />}>
            Post
      </Button>
      </CardActions>
    </Card>
      </Box>
    </div>
    </>
  );
}