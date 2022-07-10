import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Autocomplete from "@mui/material/Autocomplete";
import SendIcon from '@mui/icons-material/Send';
const works = ["plumber", "ac repairer", "cook", "cleaner","pest control"];


export default function BasicCard() {
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
        console.log(values);
      }
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
  return (
    <div>
         <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
         <Card sx={{ minWidth: 275, maxWidth: 500 }}>
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
                    value={values.type}
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
                        onChange={handleChange('type')}
                      />
                    )}
                  />
        </FormControl>
      </div>
      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
      <Button variant="contained"  endIcon={<SendIcon />}>
            Post
      </Button>
      </CardActions>
    </Card>
      </Box>
    </div>
  );
}