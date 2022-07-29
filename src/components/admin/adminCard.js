import { Container, Grid, Link, Paper } from "@mui/material";
import React, { useState } from "react";
import AllUserbudget from "./cardbody";
import AdminLibrarySearch from "../common/SearchBar";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Clear'
const arr = [
  {
    type: "Ac-Repairer",
    name: "Iyachmin Rahman",
    amount: "rahim@gmail.com",
    rating: 9.5,
    area: "kaptai,chittagong",
    phone: "0132494859"
  },
];

function AdminGrid() {
  const [fields,setFields]=useState(arr);
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, marginTop: 10 }}>
        <AdminLibrarySearch items={arr}
              updateParent={setFields}/>
      </Container>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, marginTop: 12 }}>
        <Grid container spacing={3}>
          {fields.map((item) => (
            <MemoisedCard
              key={item.type}
              type={item.type}
              name={item.name}
              amount={item.amount}
              rating={item.rating}
              area={item.area}
              phone={item.phone}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default AdminGrid;

const card = ({ type,name,amount,rating,area,phone}) => {
  return (
    <>
      <Grid item xs={15} md={4} lg={4} >
        <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image="/identity.jpg"
      />
      <CardContent>
      <AllUserbudget type={type} name={name} amount={amount} rating={rating} area={area} phone={phone}/>
      </CardContent>
      <CardActions >
      <Button variant="contained" endIcon={<SendIcon />}>
           Accept
      </Button>
      <Button variant="contained" endIcon={<DeleteIcon />} color="error">
           Decline
      </Button>
      </CardActions>
    </Card>
        
      </Grid>
    </>
  );
};

const MemoisedCard = React.memo(card);

 
 
 
