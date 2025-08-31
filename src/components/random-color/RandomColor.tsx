import React, { useEffect, useState } from 'react'

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000000');

  const randomeColorUtil = (length) => {
    return Math.floor(Math.random() * length)
  }

  const handleHexColor = () => {

    const hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let hexColor = '#';

    for (let i=0; i< 6;i++) {
      hexColor += hex[randomeColorUtil(hex.length)]; 
    }

    setColor(hexColor);
  }

  const handleRGBColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  const dynamicStyle = {
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    backgroundColor: color
  }

  useEffect(() => {
   if (typeOfColor === 'rgb') handleRGBColor()
   else handleHexColor()
  }, [typeOfColor])
  
  
  return (
    <div className='random-color' style={dynamicStyle}>
      <h1>Random Color</h1>
      <button onClick={() => setTypeOfColor('hex')}> Crete a Hex Color</button>
      <button onClick={() => setTypeOfColor('rgb')}> Create a RGB Color</button>
      <button onClick={ typeOfColor==='hex' ? handleHexColor : handleRGBColor }>Generate Random Color</button>


      <h1>{typeOfColor === 'rgb' ? "RGB Color" : "Hex Color"}</h1>
      <h4>Color: {color}</h4>
    </div>
  )
}

export default RandomColor