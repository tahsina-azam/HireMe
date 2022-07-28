import React from 'react'
import { Stack,Grid,Item } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAuth } from '../../context/AuthProvider';
import { Box } from '@mui/system';
import CommentBody from './comments/commentCard';

export default function workerProfile() {
  const { user } = useAuth();
  return (
    <div>
      <Box
        sx={{
          marginTop: 15,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        
        <Card sx={{ maxWidth: 360 ,minWidth: 360 }}   style={{ border: "1px solid black" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image="/person.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Type: Ac repairer
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          {user.email}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          Total orders: 100
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Adress: Guali gram, Gaibandha
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
      <Button variant="contained" >
            update account
      </Button>
      </CardActions>
    </Card>  
        </Box>
        {/* <Box
        sx={{
          borderColor: 'secondary',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent:"center",
        }}
      >
         
        <CommentBody/>
        </Box> */}
        
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' ,maxWidth:500,marginLeft:400}}
          >
           
            <CommentBody/>
          </Grid>
      
    </div>
  );
}
