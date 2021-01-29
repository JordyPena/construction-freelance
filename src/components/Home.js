import React from 'react'
import Slider from './Slider'
import Data from '../slider-data/Slider-data'
import Services from './Services'

function Home() {
  return (
    <>
    

    <Slider slides={Data}/>
    <Services />
    </>
  )
}

export default Home
