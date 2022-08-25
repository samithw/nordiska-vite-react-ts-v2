import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import BuildingInfoModeling from './components/Services/BuildingInfoModeling'
import BusinessMatch from './components/Services/BusinessMatch'
import ChannelDev from './components/Services/ChannelDev'
import DirectMarket from './components/Services/DirectMarket'
import DirectSales from './components/Services/DirectSales'
import InboundOut from './components/Services/InboundOut'
import IndianMarket from './components/Services/IndianMarket'
import SalesOutsourcing from './components/Services/SalesOutsourcing'
import ServicesIndex from './components/Services/ServicesIndex'
import About from './pages/About'
import Contact from './pages/Contact'
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
        <Route path='contact' element = {<Contact />} />
        <Route path='technology' element = {<Technology />} />
        <Route path='services' element = {<Services />}>
          <Route index element = {<ServicesIndex />} />
          <Route path='business-matchmaking' element = {<BusinessMatch />} />
          <Route path='direct-market-entrance' element = {<DirectMarket />} />
          <Route path='direct-touch-sales-activities' element = {<DirectSales />} />
          <Route path='inbound-outbound-marketing' element = {<InboundOut />} />
          <Route path='channel-development-channel-management' element = {<ChannelDev />} />
          <Route path='sales-outsourcing' element = {<SalesOutsourcing />} />
          <Route path='gateway-to-indian-market' element = {<IndianMarket />} />
          <Route path='building-information-modeling' element = {<BuildingInfoModeling />} />
        </Route>
      </Routes>
    </>
  )

}

export default App

