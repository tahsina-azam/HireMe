import { Container, Grid, Link, Paper } from "@mui/material";
import React, { useState } from "react";
import AllUserbudget from "./CardBody";
import AdminLibrarySearch from "../common/SearchBar";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const arr = [
  {
    type: "Ac-Repairer",
    link: "http://localhost:3000/user/types/Ac-Repairer",
  },
  {
    type: "Electrician",
    link: "http://localhost:3000/user/types/Electrician"
  },
  {
    type: "Plumber",
    link: "http://localhost:3000/user/types/Plumber",
  },
  {
    type: "Cook",
    link: "http://localhost:3000/user/types/cook",
  },
  {
    type: "Pest-Controller",
    link: "http://localhost:3000/user/types/Pest-Cntroller"
  },
  {
    type: "Care-Taker",
    link: "http://localhost:3000/user/types/Care-Taker"
  },
  {
    type: "Sofa-Cleaner",
    link: "http://localhost:3000/user/types/Pest-Cntroller"
  },
  {
    type: "Music-Instrument-Repairer",
    link: "http://localhost:3000/user/types/Music-Instrument-Repairer"
  },
  {
    type: "Home-Shifting-Helper",
    link: "http://localhost:3000/user/types/Home-Shifting-Helper"
  },
  {
    type: "Car-Repairer",
    link: "http://localhost:3000/user/types/Car-Repairer"
  },
  {
    type: "Home-Nursing",
    link: "http://localhost:3000/user/types/Home-Nursing"
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
              link={item.link}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default AdminGrid;

const card = ({ type,link }) => {
  return (
    <>
      <Grid item xs={12} md={4} lg={4} >
        <a href={link}>
        {/* <Paper
          sx={{
            padding: "2rem",
            border: "1px ",
            display: "flex",
            flexDirection: "column",
            bgcolor: "lightskyblue"
          }}
            style={{ border: "1px solid black" ,backgroundColor:"lightskyblue"}}
        >
          <AllUserbudget type={type} link={link}/>
        </Paper> */}
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/vector.png"
      />
      <CardContent>
      <AllUserbudget type={type} link={link}/>
      </CardContent>
      
    </Card>
        </a>
      </Grid>
    </>
  );
};

const MemoisedCard = React.memo(card);

 
 
 
