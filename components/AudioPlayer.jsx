import React from 'react';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import episodesData from '../data/episodesData';

export default function AudioPlayer({audioElem, isplaying, setisplaying}) {
  function PlayPause(){ 
    setisplaying(!isplaying)
  }


  return (
    <Card>
      <Box>
        <CardContent>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        <Box>
          <IconButton aria-label="previous">
            <SkipPreviousIcon />
          </IconButton>
          <IconButton aria-label="play/pause" onClick={PlayPause}>
            {isplaying ? <PauseCircleIcon/> : <PlayArrowIcon/>}
          </IconButton>
          <IconButton aria-label="next">
            <SkipNextIcon/>
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}