import { useRef } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import { Box, Card, CardContent, IconButton, Typography, Slider } from '@mui/material'

export default function AudioPlayer({audioElem, isplaying, setisplaying, currentSong, setCurrentSong, songs, currentEpisode}) {
  const clickRef = useRef()

  function PlayPause(){ 
    setisplaying(!isplaying)
  }

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth; 
    const offset = e.nativeEvent.offsetX;

    const divprogress = offset / width * 100;
    audioElem.current.currentTime = divprogress / 100 * currentSong.length; 
  }

  return (
    <Card>
      <Slider value={`${currentSong.progress}`} aria-label="Disabled slider" onClick={checkWidth} ref={clickRef}/>
      <Box>
        <CardContent>
          <Typography component="div" variant="h5">
            {currentEpisode.title}
          </Typography>
        </CardContent>
        <Box>
          <IconButton aria-label="play/pause" onClick={PlayPause}>
            {isplaying ? <PauseCircleIcon/> : <PlayArrowIcon/>}
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}