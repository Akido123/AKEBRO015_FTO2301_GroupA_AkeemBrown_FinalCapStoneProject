import { Card, CardActionArea, CardContent, CardActions, Button, Typography } from '@mui/material'
import { StarBorder, Star } from '@mui/icons-material'
import React from 'react'

function EpisodeTemplate(props){
  const [isFav, setIsFav] = React.useState({
    fav: false
  })
  function handleClick(){
    setIsFav(pre => {
      return{
        ...props,
        fav: !pre.fav
      }
    })
  }
  const stared = isFav.fav ? <Star/> : <StarBorder/> 

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h5">
            Episode:{props.item.episode}
          </Typography>
          <Typography variant="body2">
            {props.item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div onClick={handleClick}>
          {stared}
        </div>
        <Button size="small" color="primary">
          Play
        </Button>
      </CardActions>
    </Card>
  );
}

export default EpisodeTemplate