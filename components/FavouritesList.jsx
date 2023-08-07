import React from "react"
import { Card, CardMedia, Paper, Typography } from "@mui/material"
import EpisodeTemplate from "./EpisodesTemplate"
import SeasonsForm from "./SeasonsForm"

function FavouritsList(prop) {
  const [seasonNumber, setSeasonNumber] = React.useState([0])
  const [episodeNumber, setEpisodeNumber] = React.useState([])
  
  const {handleEpisode} = props

  function handleSeasonNumber(param){
    setSeasonNumber(param)
  }

  function episodeFunc(param){
    handleEpisode(param)
  }

  const episodes = props.show.seasons[seasonNumber].episodes.map(item => {
    return(
      <EpisodeTemplate
        key={item.id}
        item={item}
        handleEpisode={episodeFunc}
      />
    )
  })

  return(
    <Paper variant="elevation" elevation={3}>
      <Card
        sx={{
          textAlign: 'center',
        }}
        >
        <CardMedia
          component='img'
          image={props.show.image}
          sx={{
            width: '300px',
            height: '300px',
            justifyContent: 'center'
          }}
        />
        <SeasonsForm
          seasons={props.show}
          seasonsFunc={handleSeasonNumber}
        />
        <Typography>
          {props.show.description}
        </Typography>
        {episodes}
      </Card>
    </Paper>
  )
}

export default FavouritsList