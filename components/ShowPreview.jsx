import React from "react"
import { Card, CardMedia, Paper, Typography } from "@mui/material"
import EpisodeTemplate from "./EpisodesTemplate"
import SeasonsForm from "./SeasonsForm"

function ShowPreview(props){
  const [seasonNumber, setSeasonNumber] = React.useState([1])

  function handleSeasonNumber(param){
    setSeasonNumber(param)
  }

  React.useEffect(() => {
    props.show.seasons.map(item => {
      console.log(item)
      item.episodes.map(item => {
        console.log(item)
      })
    })
  }, [props.show])

  const episodes = props.show.seasons.map(item => {
    return(
      <EpisodeTemplate
        key={item.id}
        item={item}
        seasonNum={seasonNumber}
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

export default ShowPreview