import React from "react"
import { Card, CardMedia, Paper, Typography } from "@mui/material"
import EpisodeTemplate from "./EpisodesTemplate"
import SeasonsForm from "./SeasonsForm"

function ShowPreview(props){
  

  // const episodes = data.seasons[0].episodes.map(item => {
  //   return(
  //     <EpisodeTemplate
  //       key={data.id}
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
          image={props.data.image}
          sx={{
            width: '300px',
            height: '300px',
            justifyContent: 'center'
          }}
          />
        <SeasonsForm
        seasons={props.data.seasons}
        />
        <Typography>
          {props.data.description}
        </Typography>
        {/* {episodes} */}
      </Card>
    </Paper>
  )
}

export default ShowPreview