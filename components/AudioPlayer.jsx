import { useRef } from 'react';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Box, Card, CardContent, CardMedia, IconButton, Typography, Stack, Slider } from '@mui/material'

export default function AudioPlayer({audioElem, isplaying, setisplaying, currentSong, setCurrentSong, songs}) {
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

  const skipBack = () => {
    let index = songs.findIndex(x => x.title == currentSong.title)
    if (index == 0 ){
      setCurrentSong(songs[songs.length-1])
    }
    else{
      setCurrentSong(songs[index -1])
    }

    audioElem.current.currentTime = 0
  }

  const skipNext = () => {
    let index = songs.findIndex(x => x.title == currentSong.title)
    if (index == songs.length - 1 ){
      setCurrentSong(songs[0])
    }
    else{
      setCurrentSong(songs[index + 1])
    }

    audioElem.current.currentTime = 0
  }

  return (
    <Card>
      <Slider value={`${currentSong.progress}`} aria-label="Disabled slider" onClick={checkWidth} ref={clickRef}/>
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
          <IconButton aria-label="previous" onClick={skipBack}>
            <SkipPreviousIcon />
          </IconButton>
          <IconButton aria-label="play/pause" onClick={PlayPause}>
            {isplaying ? <PauseCircleIcon/> : <PlayArrowIcon/>}
          </IconButton>
          <IconButton aria-label="next" onClick={skipNext}>
            <SkipNextIcon/>
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}