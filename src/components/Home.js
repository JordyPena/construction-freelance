import React from 'react'
import Slider from './Slider'
import Data from '../slider-data/Slider-data'
import Services from './Services'

function Home(props) {
  return (
    <>
    

    <Slider slides={Data} match={props.match}/>
    <Services />
    </>
  )
}

export default Home
