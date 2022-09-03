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
        <HeroSection bgCSS={{ backgroundImage : 'url("images/banner__nordiska__solutions__home.jpg")'}}>
          <h1 className=" text-sm md:text-2xl text-white bg-[#00A3FF] w-fit px-2 rounded-3xl mb-2">@nordiskasolutions</h1>
          <h2 className=" text-2xl md:text-3xl lg:text-3xl text-white mb-2">we are committed to providing optimal nordic <span className=" ">cleantech</span> solutions</h2>
          <h3 className=" text-sm md:text-lg text-white md:block">to today’s challenges across the nation and around the world and to preparing for <span className="">tomorrow’s environmental trends.</span></h3>
        </HeroSection>
        
        

        <ContentSection>
          {{
              contentBgCSS : {
                backgroundImage :'url("/images/banner__about__2.jpg")',
                paddingBottom : '5rem',
                paddingTop : '1rem'
              },
              contentTitle : "who we are",
              contentBody : (
              <p>Nordiska Solutions is Finnish-Malaysian joint company which has developed a cluster business concept with some leading environmental companies in Europe and Japan who are active in water, wastewater and solids waste management technologies and solutions.</p>
              ),
              contentImageURL : "/images/icon__who.png",
              contentLink : <NavLink to='/about' className='btn-type1'>see more</NavLink>
          }}
        </ContentSection>

        <ServicesCards />
        

        <Footer />
    </>
  )
}

export default Home