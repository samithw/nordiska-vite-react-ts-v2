import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'
import Services from './pages/Services'
import Technology from './pages/Technology'

function App() {

  /*return (
    <div className="App">
       <Header /> 
       <HeroSection />
       <Footer />
    </div>
  )*/

  return (
    <>
      <Header /> 
      <Routes>
        <Route path='/' element= {<Home />}   />
        <Route path='/about' element = {<About />} />
        <Route path='/technology' element = {<Technology />} />
        <Route path='/services' element = {<Services />} />
      </Routes>
    </>
  )

}

export default App
