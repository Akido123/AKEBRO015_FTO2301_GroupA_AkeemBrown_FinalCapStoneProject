import { MenuItem } from "@mui/material"
import React from "react"


function CarosoulePage(){
  const slides = [
    {"url": "https://content.production.cdn.art19.com/images/cc/e5/0a/08/cce50a08-d77d-490e-8c68-17725541b0ca/9dcebd4019d57b9551799479fa226e2a79026be5e2743c7aef19eac53532a29d66954da6e8dbdda8219b059a59c0abe6dba6049892b10dfb2f25ed90d6fe8d9a.jpeg", "title": "Something Was Wrong"},
    {"url": "https://content.production.cdn.art19.com/images/5a/4f/d4/19/5a4fd419-11af-4270-b31c-2c7ed2f563a5/bc913bc926be23d04c9a4d29a829269a753be3d2612dad91f7e92ba4618fefc5c8802af29a1d32b3261eb03f83613e2535e3c574469b0cb510c32cd8d94cfaa1.png", "title": "This Is Actually Happening"},
    {"url": "https://content.production.cdn.art19.com/images/a4/8f/53/79/a48f5379-a90e-4197-915c-c0645e0d9336/8d9e6ebc4d65a9575fa626318e426fcf8be7f98ea0c1b7b103de2b32def46ded57537627d80b36f55edf7c9a8ad639bd9816f68c79b56845203a0b5bc4a63a55.png", "title": "American History Tellers"},
    {"url": "https://content.production.cdn.art19.com/images/19/f4/f9/af/19f4f9af-4a18-44e1-a622-726f43feb79d/539a50f79529628dbde7aa116778056619b802bfa0247cb739db907085e0b595a5521efc78faa831ebddc235d69beb27e1e36fd51f825bc888f0c11cccbd9cd8.png", "title": "Scamfluencers"},
    {"url": "https://content.production.cdn.art19.com/images/68/4e/03/af/684e03af-29c5-4a35-b84a-d929f114caee/4f60eec3fabd62251d0cdbd1af11b79c43fb1465dbc5ec3371328fbddadee597e9f115c31b079e20266648ee07a80a93c01cecdb81ab3545d872393997594ef3.png", "title": "Killer Psyche"},
  ]

  const  [currentIndex, setCurrentIndex] = React.useState(0)

  const sliderStyles = {
    heigth: "100%",
    position: "relative",
  }

  const slideStyles = {
    width: "300px",
    heigth: "300px",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
  }

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, 100px)",
    left: "0px",
    fontSize: "45px",
    color: "black",
    zIndex: 1,
    cursor: "pointer",
  }
  
  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, 190%)",
    right: "0px",
    fontSize: "45px",
    color: "black",
    zIndex: 1,
    cursor: "pointer",
  }

  const dotContainerStyles = {
    display: 'flex',
    justifyConten: 'center', 
  }

  const dotStyles = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
  }

  function goToPrevious(){
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  function goToNext(){
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  function goToSlide(slideIndex){
    setCurrentIndex(slideIndex)
  }

  return(
    <div style={sliderStyles}>
      <div>Shows You might like</div>
      <img style={slideStyles} src={`${slides[currentIndex].url}`}/>
      <div style={leftArrowStyles} onClick={goToPrevious}>Left</div>
      <div style={rightArrowStyles} onClick={goToNext}>Right</div>
      <div style={dotContainerStyles}>
        {slides.map((slides, slidesIndex) => (
          <MenuItem key={slidesIndex} style={dotStyles} onClick={() => goToSlide(slidesIndex)}>*</MenuItem>
        ))}
      </div>
    </div>
  )
}

export default CarosoulePage