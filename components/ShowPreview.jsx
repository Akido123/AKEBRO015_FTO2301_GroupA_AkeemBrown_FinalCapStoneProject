import React from "react"
import { Card, CardMedia, Paper, Typography } from "@mui/material"
import EpisodeTemplate from "./EpisodesTemplate"
import SeasonsForm from "./SeasonsForm"

function ShowPreview(props){
  // const episodes = show.seasons[0].episodes.map(item => {
  //   return(
  //     <EpisodeTemplate
  //       key={show.id}
  //       item={item}
  //     />
  //   )
  // })

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
        />
        <Typography>
          {props.show.description}
        </Typography>
        {/* {episodes} */}
      </Card>
    </Paper>
  )
}

export default ShowPreview