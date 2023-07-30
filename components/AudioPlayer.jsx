import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Box, Card, CardContent, CardMedia, IconButton, Typography, Stack, Slider } from '@mui/material'

export default function AudioPlayer({audioElem, isplaying, setisplaying, currentSong}) {
  function PlayPause(){ 
    setisplaying(!isplaying)
  }

  return (
    <Card>
      <Slider defaultValue={30} aria-label="Disabled slider" />
      <Box>
        <CardContent>
          <Typography component="div" variant="h5">
            {currentSong.title}
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