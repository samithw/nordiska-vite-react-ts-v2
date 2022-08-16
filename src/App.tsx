import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'
import Services from './pages/Services'
import Technology from './pages/Technology'

function App() {

  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

  return (
    <>
      <ScrollToTop />
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

