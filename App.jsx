import React from "react";
import HomePreview from "./components/HomePreview";
import ShowPreview from "./components/ShowPreview";
import AudioPlayer from "./components/AudioPlayer";
import CarosoulePage from "./components/CarosoulePage";

function App(){

  // const slides = [
  //   {"url": "https://content.production.cdn.art19.com/images/cc/e5/0a/08/cce50a08-d77d-490e-8c68-17725541b0ca/9dcebd4019d57b9551799479fa226e2a79026be5e2743c7aef19eac53532a29d66954da6e8dbdda8219b059a59c0abe6dba6049892b10dfb2f25ed90d6fe8d9a.jpeg", "title": "Something Was Wrong"},
  //   {"url": "https://content.production.cdn.art19.com/images/5a/4f/d4/19/5a4fd419-11af-4270-b31c-2c7ed2f563a5/bc913bc926be23d04c9a4d29a829269a753be3d2612dad91f7e92ba4618fefc5c8802af29a1d32b3261eb03f83613e2535e3c574469b0cb510c32cd8d94cfaa1.png", "title": "This Is Actually Happening"},
  //   {"url": "https://content.production.cdn.art19.com/images/a4/8f/53/79/a48f5379-a90e-4197-915c-c0645e0d9336/8d9e6ebc4d65a9575fa626318e426fcf8be7f98ea0c1b7b103de2b32def46ded57537627d80b36f55edf7c9a8ad639bd9816f68c79b56845203a0b5bc4a63a55.png", "title": "American History Tellers"},
  //   {"url": "https://content.production.cdn.art19.com/images/19/f4/f9/af/19f4f9af-4a18-44e1-a622-726f43feb79d/539a50f79529628dbde7aa116778056619b802bfa0247cb739db907085e0b595a5521efc78faa831ebddc235d69beb27e1e36fd51f825bc888f0c11cccbd9cd8.png", "title": "Scamfluencers"},
  //   {"url": "https://content.production.cdn.art19.com/images/68/4e/03/af/684e03af-29c5-4a35-b84a-d929f114caee/4f60eec3fabd62251d0cdbd1af11b79c43fb1465dbc5ec3371328fbddadee597e9f115c31b079e20266648ee07a80a93c01cecdb81ab3545d872393997594ef3.png", "title": "Killer Psyche"},
  // ]

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

  // const containerStyles = {
  //   width: "500px",
  //   height: "280px",
  //   margin: "0 auto"
  // }

  /* ---DOM--- */
  return(
    <div>
      <ShowPreview
        show={ShowData}
      />
      {homePreview}
      {/* <AudioPlayer/> */}
      {/* <div style={containerStyles}>
        <CarosoulePage slides={slides}/>
      </div> */}
    </div>
  )
}

export default App
