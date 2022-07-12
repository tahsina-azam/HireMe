import React from 'react'
import { Stack } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { Box } from '@mui/system';

function workerProfile() {
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
        <Stack direction="row" spacing={10}>
        <Card sx={{ maxWidth: 360 ,minWidth: 300 }}   style={{ border: "1px solid black" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image="/user.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Rahim Sheikh
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Type: Ac repairer
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          Phone:01384XXXXXX
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Adress: Guali gram, Gaibandha
        </Typography>
      </CardContent>
    </Card>
    <List
      sx={{
        width: '150%',
        maxWidth: 360,
        minWidth:300,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 400,
        '& ul': { padding: 0 },
      }}
      style={{ border: "1px solid black" }}
      subheader={<li />}
    >
      {[0, 1, 2, 3, 4].map((sectionId) => (
        <li key={`section-${sectionId}`}>
          <ul>
            <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
            {[0, 1, 2].map((item) => (
              <ListItem key={`item-${sectionId}-${item}`}>
                <ListItemText primary={`Item ${item}`} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
        </Stack>
        </Box>
    </div>
  )
}

export default workerProfile