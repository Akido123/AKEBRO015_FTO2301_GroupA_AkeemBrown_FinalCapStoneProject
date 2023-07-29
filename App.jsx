import React from "react";
import HomePreview from "./components/HomePreview";
import ShowPreview from "./components/ShowPreview";
import AudioPlayer from "./components/AudioPlayer";

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

  /* ---DOM--- */
  return(
    <div>
      <ShowPreview
        show={ShowData}
      />
      {homePreview}
      {/* <AudioPlayer/> */}
    </div>
  )
}

export default App
