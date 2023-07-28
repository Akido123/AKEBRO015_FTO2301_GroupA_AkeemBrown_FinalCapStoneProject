import React from "react";
import HomePreview from "./components/HomePreview";
import ShowPreview from "./components/ShowPreview";

function App(){
  const [homePreviewData, sethomePreviewData] = React.useState([])
  const [showPreviewData, setShowPreview] = React.useState("5679")
  const [ShowData, setShowData] = React.useState('')

  function handleshowPreview(param){
    setShowPreview(param)
  }

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

  const homePreview = homePreviewData.map(item => {
    return(
      <HomePreview
        key={item.id}
        item={item}
        showFunc={handleshowPreview}
      />
    )
  })

  
  return(
    <div>
      {/* <ShowPreview
        data={ShowData}
      /> */}
      {homePreview}
    </div>
  )
}

export default App
