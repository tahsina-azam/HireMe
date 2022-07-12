import { Container, Grid, Link, Paper } from "@mui/material";
import React, { useState } from "react";
import AllUserbudget from "./CardBody";
import AdminLibrarySearch from "../common/SearchBar";

const arr = [
  {
    type: "Ac repairer",
    link: "http://localhost:3000/worker/works",
  },
  {
    type: "Plumber",
    link: "http://localhost:3000/worker/works",
  },
  {
    type: "cook",
    link: "http://localhost:3000/worker/works",
  },
];

function AdminGrid() {
  const [fields,setFields]=useState(arr);
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, marginTop: 10 }}>
        <AdminLibrarySearch items={fields}
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

const Card = ({ type,link }) => {
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
          <AllUserbudget type={type} link={link}/>
        </Paper>
      </Grid>
    </>
  );
};

const MemoisedCard = React.memo(Card);

 
 
 
