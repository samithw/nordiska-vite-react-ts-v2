import { NavLink, Outlet } from 'react-router-dom'
import ButtonType1 from '../components/ButtonType1'
import ContentSection from '../components/ContentSection'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import PageQuote from '../components/PageQuote'

type Props = {}

const Services = (props: Props) => {
  return (
    <>

        <Outlet />
         
        <Footer />
        
    </>
  )
}

export default Services