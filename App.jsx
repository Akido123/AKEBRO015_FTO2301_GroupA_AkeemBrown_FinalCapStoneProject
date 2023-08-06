// import { BrowserRouter as Router, Route, Routes, Link, Switch } from "react-router-dom"
import React, { useRef } from "react";
import HomePreview from "./components/HomePreview";
import ShowPreview from "./components/ShowPreview";
import AudioPlayer from "./components/AudioPlayer";
import CarosoulePage from "./components/CarosoulePage";
import episodesData from "./data/episodesData";
import ClipLoader from "react-spinners/ClipLoader";
import LoginPage from "./components/LoginPage";
import FilterForm from "./components/FilterForm";
import { Button } from "@mui/material";

function App(){

  /* ---States--- */
  const [homePreviewData, sethomePreviewData] = React.useState([])
  const [showPreviewData, setShowPreview] = React.useState()
  const [ShowData, setShowData] = React.useState({
    "id": "",
    "title": "",
    "description": "",
    "seasons": [{
      "season": 0,
      "title": "",
      "image": "",
      "episodes": [{
        "title": "",
        "description": "",
        "episode": 1,
        "file": ""
      }]
    }]
  })
  const [episodeData, setEpisodeData] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)
  const [songs, setSongs] = React.useState()
  const [isplaying, setIsplaying] = React.useState(false)
  const [currentSong, setCurrentSong] = React.useState(episodesData.seasons[0].episodes[0])
  const [sorted, setSorted] = React.useState({ sorted: "letters", reversed: false})
  
  /* ---Functions ---*/
  function handleshowPreview(param){
    setShowPreview(param)
  }

  function handleEpisode(param){
    setEpisodeData(param)
    console.log(param)
  }

  /* ---API calls--- */
  React.useEffect(() => {
    fetch('https://podcast-api.netlify.app/shows')
      .then((response => {
      if(!response.ok) {
        throw new Error("Something went wrong. Try again in a couple minutes");
      }
      return response
    }))
      .then(response => response.json())
      .then((data) => {
        sethomePreviewData(data)
        setTimeout(() => {
          setIsLoading(true)
        }, 2000)
      });
  })

  React.useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${showPreviewData}`)
      .then((response => {
      if(!response.ok) {
        throw new Error("Somethingg went wrong. Try again in a couple minutes");
      }
      return response
      }))
      .then(response => response.json())
      .then((data) => setShowData(data));
  }, [showPreviewData])

  function sortByName(){
    setSorted({ sorted: "name", reversed: !sorted.reversed})
    const usersCopy = [...homePreviewData]
    usersCopy.sort((userA, userB) => {
      const fullNameA = `${userA.title}`
      const fullNameB = `${userB.title}`

      if(sorted.reversed){
        return fullNameB.localeCompare(fullNameA)
      }
      return fullNameA.localeCompare(fullNameB)
    })
    sethomePreviewData(usersCopy)
  }

  function sortedByDate(){
    setSorted({ sorted: 'date', reversed: !sorted.reversed})
    const usersCopy = [...homePreviewData]
    usersCopy.sort((userA, userB) => {
      if(sorted.reversed){
        return new Date(userA.updated).getTime() - new Date(userB.updated).getTime()
      }
      return new Date(userB.updated).getTime() - new Date(userA.updated).getTime()
    })
    sethomePreviewData(usersCopy)
  }

  /* ---Mapped Variables--- */
  const homePreview = homePreviewData.map(item => {
    return(
      <HomePreview
        key={item.id}
        item={item}
        showFunc={handleshowPreview}
      />
    )
  })

  const audioElem = useRef();

  React.useEffect(() => {
    if(isplaying){
      audioElem.current.play()
    }else{
      audioElem.current.pause()
    }
  }, [isplaying])

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({...episodeData, "progress":ct / duration * 100, "length": duration})
  }

  /* ---DOM--- */
  return(
    <div>
      <CarosoulePage/>
      <div>
        <audio src={episodeData.file} ref={audioElem} onTimeUpdate={onPlaying}/>
        <AudioPlayer
         songs={songs} 
         setSongs={setSongs} 
         isplaying={isplaying} 
         setisplaying={setIsplaying}
         audioElem={audioElem}
         currentSong={currentSong}
         setCurrentSong={setCurrentSong}
         currentEpisode={episodeData}/>
      </div>
      <ShowPreview
        show={ShowData}
        handleEpisode={handleEpisode}
      />
      <FilterForm
        sortNameFunc={sortByName}
        sortDateFunc={sortedByDate}
      />
      {!isLoading ? (<ClipLoader
        color={"#F37A42"}
        loading={!isLoading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />) : homePreview}
    </div>
  )
}

export default App
