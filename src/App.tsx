import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import BusinessMatch from './components/Services/BusinessMatch'
import About from './pages/About'
import Home from './pages/Home'
import Services from './pages/Services'
import Technology from './pages/Technology'

function App() {

  const ScrollToTop = () => {
    const { hash, pathname } = useLocation();

    useEffect(() => {
      setTimeout(() => {
        hash ?
        document.querySelector(hash)?.scrollIntoView({behavior : "smooth", block : "end"}) : 
        window.scrollTo({top:0 , left:0 , behavior : 'smooth'});
      }, 100);

      

    }, [pathname]);
  
    return null;
  }

  return (
    <>
      <ScrollToTop />
      <Header /> 
      <Routes>
        <Route path='/' element= {<Home />}   />
        <Route path='about' element = {<About />} />
        <Route path='technology' element = {<Technology />} />
        <Route path='services' element = {<Services />}>
          <Route path='business-matchmaking' element = {<BusinessMatch />} />
        </Route>
      </Routes>
    </>
  )

}

export default App

