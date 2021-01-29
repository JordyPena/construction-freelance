import React from 'react'
import Menu from './Menu'
import Slider from './Slider'
import Data from '../slider-data/Slider-data'
import Services from './Services'

function Home() {
  return (
    <>
    <Menu/>

    <Slider slides={Data}/>
    <Services />
    </>
  )
}

export default Home
