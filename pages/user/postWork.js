import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import NavBar from "../../src/components/App-Bar/userAppbar"
import axios from "axios"
import { useAuth } from '../../context/AuthProvider';
const works = ["plumber", "ac repairer", "cook", "cleaner","pest control"];
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


export default function BasicCard() {
   const {user} = useAuth();
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
          type:values.type,
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
        <FormControl fullWidth sx={{ m: 1 }}  > 
        {/* <Autocomplete
        
                    id="combo-box-demo"
                    sx={{ width: 450 }}
                    options={works}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        required
                        fullWidth
                        value={values.type}
                        id="role"
                        label="type"
                        name="type"
                        // onChange={(e) => {
                        //   setType(e.target.value);
                        //   handleChange(type);
                        // }}
                        onChange={handleChange('type')}
                      />
                    )}
                  /> */}
                  <Select
                     sx={{ width: 450 }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.type}
                    label="type"
                    onChange={handleChange('type')}
                  >
                    <MenuItem value={"plumber"}>Plumber</MenuItem>
                    <MenuItem value={"ac repairer"}>AC Repairer</MenuItem>
                    <MenuItem value={"cook"}>Cook</MenuItem>
                    <MenuItem value={"cleaner"}>Cleaner</MenuItem>
                    <MenuItem value={"pest control"}>Pest Control</MenuItem>
                  </Select>
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