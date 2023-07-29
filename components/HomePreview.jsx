import {Card, Typography, CardContent, CardActionArea, CardMedia} from '@mui/material';
import React from 'react';
import genreTitles from '../data/genreTitles';

function HomePreview(props){
  const { showFunc } = props
  
  function handleClick(){
    showFunc(props.item.id)
  }
  
  const dateString = props.item.updated
  const dateObject = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric'};
  const readableDate = dateObject.toLocaleDateString('en-US', options);

  return(
  <Card sx={{margin: "20px"}} onClick={handleClick}>
    <CardActionArea>
    <CardMedia
      sx={{
        width: "300px",
        height: "300px",
      }}
      component='img'
      image={props.item.image}
    />
    <CardContent>
      <Typography variant='h4'>
        {props.item.title}
      </Typography>
      <Typography variant="h5" component="div">
        Seasons: {props.item.seasons}
      </Typography>
      <Typography>
        Updated: {readableDate}
      </Typography>
      <Typography variant="body2">
        {props.item.genres}
      </Typography>
    </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default HomePreview