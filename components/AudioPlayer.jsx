import React from 'react';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import episodesData from '../data/episodesData';
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'

export default function AudioPlayer() {
  const {seasons} = episodesData
  const audio = seasons[0].episodes[0].file
  const image = seasons[0].image

  const [songs, setSongs] = React.useState(audio)
  const [isPlaying, setIsplaying] = React.useState(false)
  const [current, setCurrentSong] = React.useState(audio)


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
          <IconButton aria-label="play/pause">
            <PlayArrowIcon/>
          </IconButton>
          <IconButton aria-label="next">
            <SkipNextIcon />
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={image}
      />
    </Card>
  );
}