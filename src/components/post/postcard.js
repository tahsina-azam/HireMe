import { Container, Grid, Link, Paper } from "@mui/material";
import React from "react";
import AllUserbudget from "./postbody";


const arr = [
  {
    description: "My Ac is broken it needs to fixed",
    budget: 1000,
    type: "Ac repairer",
    days: "3",
    userid:"45345",
    address: "9/1 thulapara,gaibandha"
  },
  {
    description: "Water pipe broke in my washroom",
    budget: 500,
    type: "Plumber",
    days: "3",
    userid:"45355",
    address: "9/1 thulapara,gaibandha"
  },
  {
    description: "I need a cook to cook in my house",
    budget: 100,
    type: "cook",
    days: "3",
    userid:"45325",
    address: "9/1 thulapara,gaibandha"
  },
];

function AdminGrid() {
  return (
    <>
       <AdminLibrarySearch/>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, marginTop: 8 }}>
        <Grid container spacing={3}>
          {/* Chart */}
          {/* Recent Deposits */}
          {arr.map((item) => (
            <MemoisedCard
              key={item.description}
              description={item.description}
              budget={item.budget}
              type={item.type}
              address={item.address}
              days={item.days}
              userId={item.userid}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default AdminGrid;

const Card = ({ description, budget, type,address,days, userId }) => {
  return (
    <>
      <Grid item xs={12} >
        <Paper
          sx={{
            padding: "2rem",
            border: "1px ",
            display: "flex",
            flexDirection: "column",
          }}
            style={{ border: "1px solid black" }}
        >
          <AllUserbudget title={description} budget={budget} type={type} address={address} days={days} userId={userId}/>
        </Paper>
      </Grid>
    </>
  );
};

const MemoisedCard = React.memo(Card);
