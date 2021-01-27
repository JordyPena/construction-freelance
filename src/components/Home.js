import React from 'react'
import Menu from './Menu'
import Slider from './Slider'
import Data from '../slider-data/Slider-data'
function Home() {
  return (
    <>
    <Menu/>

    <Slider slides={Data}/>
    </>
  )
}

export default Home