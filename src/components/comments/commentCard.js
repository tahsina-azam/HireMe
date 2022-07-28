import { Container, Grid, Link, Paper } from "@mui/material";
import React, { useState } from "react";
import AllUserbudget from "./commentBody";
import AdminLibrarySearch from "../common/SearchBar";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';

const arr = [
  { 
    person:"Mini Rahman",
    message: "he was good, satisfied",
    rating:5.5
  },
  { 
    person:"Mimi Rahman",
    message: "he did a pretty good job.",
    rating:3.5
  },
  { 
    person:"Mila Rahman",
    message: "Pretty impressed.",
    rating:4.5
  }, 
];

function AdminGrid() {
  const [fields,setFields]=useState(arr);
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} >
      </Container>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
        <Typography gutterBottom variant="h3" component="div" textAlign="center">
              Reviews
            </Typography>
          {fields.map((item) => (
            <MemoisedCard
              key={item.person}
              person={item.person}
              message={item.message}
              rating={item.rating}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default AdminGrid;

const card = ({ person,message,item }) => {
  return (
    <>
      <Grid item xs={12}   >
      <Card sx={{ maxWidth: 600 }}>
      <CardContent>
      <AllUserbudget person={person} message={message} item={item}/>
      </CardContent> 
    </Card>
      </Grid>
    </>
  );
};

const MemoisedCard = React.memo(card);

 
 
 
