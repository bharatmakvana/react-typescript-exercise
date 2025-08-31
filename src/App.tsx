import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordion from './components/accordion/Accordion'
import RandomColor from './components/random-color/RandomColor'
import ImageSlider from './components/image-slider/ImageSlider'
import LightDarkMode from './components/light-dark-mode/LightDarkMode'
import ScrollToTopBottom from './components/scroll-to-top-bottom/ScrollToTopBottom'
import CustomModal from './components/custom-modal/CustomModal'

function App() {
  return (
    <>
      <Accordion />
      {/* <RandomColor />  */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} /> */}
      {/* <LightDarkMode /> */}
      {/* <ScrollToTopBottom />*/}
      {/* <CustomModal /> */}
    </>
  )
}

export default App
