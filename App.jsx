import React, { useRef } from "react";
import HomePreview from "./components/HomePreview";
import ShowPreview from "./components/ShowPreview";
import AudioPlayer from "./components/AudioPlayer";
import CarosoulePage from "./components/CarosoulePage";
import episodesData from "./data/episodesData";

function App(){

  /* ---States--- */
  const [homePreviewData, sethomePreviewData] = React.useState([])
  const [showPreviewData, setShowPreview] = React.useState("5679")
  const [ShowData, setShowData] = React.useState({
    "id": "10716",
    "title": "Something Was Wrong",
    "description": "Something Was Wrong is an Iris Award-winning true-crime docuseries about the discovery, trauma, and recovery from shocking life events and abusive relationships.",
    "seasons": []
  })
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
        throw new Error("Somethinf went wrong. Try again in a couple minutes");
      }
      return response
    }))
      .then(response => response.json())
      .then((data) => sethomePreviewData(data));
  })

  React.useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${showPreviewData}`)
      .then((response => {
      if(!response.ok) {
        throw new Error("Somethinf went wrong. Try again in a couple minutes");
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

    setCurrentSong({...currentSong, "progress":ct / duration * 100, "length": duration})
  }

  /* ---DOM--- */
  return(
    <div>
      <CarosoulePage/>
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
      />
      {homePreview}
    </div>
  )
}

export default App
