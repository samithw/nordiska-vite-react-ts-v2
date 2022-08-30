import React from 'react'
import { NavLink } from 'react-router-dom'
import ButtonType1 from '../components/ButtonType1'
import ContentSection from '../components/ContentSection'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import ServicesCards from '../components/ServicesCards'

type Props = {}

const Home = () => {
  return (
    <>
        <HeroSection bgCSS={{ backgroundImage : 'url("images/banner__nordiskasolutions__home.jpg")'}}>
          <h1 className=" text-base md:text-2xl text-nsgreen">@nordiskasolutions</h1>
          <h2 className=" text-3xl md:text-3xl lg:text-5xl text-white text-shadow">we are committed to providing optimal nordic <span className=" text-nsgreen">cleantech</span> solutions</h2>
          <h3 className=" text-base md:text-lg text-white hidden md:block">to today’s challenges across the nation and around the world and to preparing for <span className="text-nsgreen">tomorrow’s environmental trends.</span></h3>
        </HeroSection>
        
        <ServicesCards />

        <ContentSection>
          {{
              contentBgCSS : {
                backgroundImage :'url("/images/banner__about__2.jpg")'
              },
              contentTitle : "who we are",
              contentBody : (
              <p>Nordiska Solutions is Finnish-Malaysian joint company which has developed a cluster business concept with some leading environmental companies in Europe and Japan who are active in water, wastewater and solids waste management technologies and solutions.</p>
              ),
              contentImageURL : "/images/icon__who.png",
              contentLink : <NavLink to='/about' className='btn-type1'>see more</NavLink>
          }}
        </ContentSection>

        

        <Footer />
    </>
  )
}

export default Home