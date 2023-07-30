import React from "react"

function CarosoulePage({slides}){
  const  [currentIndex, setCurrentUser] = React.useState(0)

  const sliderStyles = {
    heigth: "100%",
    position: "relative",
  }

  const slideStyles = {
    width: "100%",
    heigth: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  }

  return(
    <div style={sliderStyles}>
      <div style={slideStyles}></div>
    </div>
  )
}

export default CarosoulePage