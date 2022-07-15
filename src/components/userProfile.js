import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { useAuth } from '../../context/AuthProvider';
import Button from '@mui/material';

export default function UserProfile() {
  const {user}=useAuth();

  return (
    <div>
        <Box
        sx={{
          borderColor: 'secondary',
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card sx={{ maxWidth: 360 ,minWidth: 300 }}   style={{ border: "1px solid black" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image="/user.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {user.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {user.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {user.role}
        </Typography>
      </CardContent>
      {/* <CardActions style={{justifyContent: 'center'}}>
      <Button variant="contained">
            Post
      </Button>
      </CardActions> */}
    </Card>
      </Box>
    </div>
  )
}

