import { Route, Routes } from "react-router-dom"
import React, { useRef } from "react";
import HomePreview from "./components/HomePreview";
import ShowPreview from "./components/ShowPreview";
import AudioPlayer from "./components/AudioPlayer";
import CarosoulePage from "./components/CarosoulePage";
import episodesData from "./data/episodesData";
import ClipLoader from "react-spinners/ClipLoader";

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
  const [isLoading, setIsLoading] = React.useState(false)

  
  const [songs, setSongs] = React.useState()
  const [isplaying, setIsplaying] = React.useState(false)
  const [currentSong, setCurrentSong] = React.useState(episodesData.seasons[0].episodes[0])
  
  /* ---Functions ---*/
  function handleshowPreview(param){
    setShowPreview(param)
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

  // const audioElem = useRef();

  // React.useEffect(() => {
  //   if(isplaying){
  //     audioElem.current.play()
  //   }else{
  //     audioElem.current.pause()
  //   }
  // }, [isplaying])

  // const onPlaying = () => {
  //   const duration = audioElem.current.duration;
  //   const ct = audioElem.current.currentTime;

  //   setCurrentSong({...currentSong, "progress":ct / duration * 100, "length": duration})
  // }

  /* ---DOM--- */
  return(
    <div>
      {/* <CarosoulePage/>
      <div>
        <audio src={currentSong.file} ref={audioElem} onTimeUpdate={onPlaying}/>
        <AudioPlayer
         songs={songs} 
         setSongs={setSongs} 
         isplaying={isplaying} 
         setisplaying={setIsplaying}
         audioElem={audioElem}
         currentSong={currentSong}/>
      </div>
      <ShowPreview
        show={ShowData}
      /> */}
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
