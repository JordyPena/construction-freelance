import React from 'react'
import {Route} from 'react-router-dom'
import Header from "./components/Header"
import Home from './components/Home'
import Contact from './components/Contact'
import Menu from './components/Menu'

function App() {
  return (
    <>
      <Header/>

      <Menu/>

      <Route 
        exact
        path='/'
        render= {(props) => {
          return <Home/>
        }}
      />
      

      <Route 
        exact
        path='/contact'
        render= {(props) => {
          return <Contact/>
        }}
      />
    </>
  )
}

export default App

