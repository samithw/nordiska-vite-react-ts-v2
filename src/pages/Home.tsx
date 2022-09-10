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

          {{
            pageTag : "@nordiskasolutions",
            bigTextHeading : <>we are committed to providing optimal nordic <span className=" text-nsgreen">cleantech</span></>,
            smallText : <>to address today’s challenges across the nation and around the world, and to preparing for <span className="text-nsgreen">tomorrow’s environmental trends.</span></>
          }}

        </HeroSection>
        
        <ServicesCards />

        <ContentSection>
          {{
              contentBgCSS : {
                backgroundImage :'url("/images/banner__about__2.jpg")'
              },
              contentTitle : "who we are",
              contentBody : (
              <p>nordiska solutions is a finnish-malaysian company which has developed a cluster business concept with some leading environmental companies in europe and asia specialised in water, wastewater and solid waste management technologies and solutions.</p>
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