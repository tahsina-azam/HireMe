import { Container, Grid, Link, Paper } from "@mui/material";
import React, { useState } from "react";
import AllUserbudget from "./workerbody";
import AdminLibrarySearch from "../common/SearchBar";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
const arr = [
  {
    type: "Ac-Repairer",
    name: "Rahim Sheikh",
    amount: 500,
    rating: 9.5,
    phone: "0132494859"
  },
  {
    type: "Ac-Repairer",
    name: "Karim Sheikh",
    amount: 600,
    rating: 5,
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
              phone={item.phone}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default AdminGrid;

const card = ({ type,name,amount,rating,phone}) => {
  return (
    <>
      <Grid item xs={12} md={4} lg={4} >
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/worker.jpg"
      />
      <CardContent>
      <AllUserbudget type={type} name={name} amount={amount} rating={rating} phone={phone}/>
      </CardContent>
      <CardActions>
      <Button variant="contained"  endIcon={<SendIcon />}>
           Accepted
      </Button>
      </CardActions>
    </Card>   
      </Grid>
    </>
  );
};

const MemoisedCard = React.memo(card);

 
 
 
