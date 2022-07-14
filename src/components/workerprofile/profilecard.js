import { Container, Grid, Link, Paper } from "@mui/material";
import React, { useState } from "react";
import AllUserbudget from "./profilebody";
import AdminLibrarySearch from "../common/SearchBar";

const arr = [
  {
    type: "Ac-Repairer",
    name: "Rahim Sheikh",
    amount: "rahim@gmail.com",
    rating: 9.5,
    area: "kaptai,chittagong",
    phone: "0132494859"
  },
  {
    type: "Ac-Repairer",
    name: "Karim Sheikh",
    amount: "karim@gmail.com",
    rating: 5,
    area:"akhalia,sylhet",
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

const Card = ({ type,name,amount,rating,area,phone}) => {
  return (
    <>
      <Grid item xs={12} md={4} lg={4} >
        
        <Paper
          sx={{
            padding: "2rem",
            border: "1px ",
            display: "flex",
            flexDirection: "column",
            bgcolor: "lightskyblue"
          }}
            style={{ border: "1px solid black" ,backgroundColor:"lightskyblue"}}
        >
          <AllUserbudget type={type} name={name} amount={amount} rating={rating} phone={phone} area={area}/>
        </Paper>
        
      </Grid>
    </>
  );
};

const MemoisedCard = React.memo(Card);

 
 
 
