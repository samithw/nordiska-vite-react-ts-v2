import React from 'react'
import ContentSection from '../components/ContentSection'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import ServicesCards from '../components/ServicesCards'

type Props = {}

const Home = () => {
  return (
    <>
        <HeroSection imgurl='./src/assets/images/mainbanner.png'>
          <h1 className=" text-2xl text-nsgreen">@nordiskasolutions</h1>
          <h2 className=" text-5xl text-white text-shadow">we are committed to <br />providing optimal <br />nordic <span className=" text-nsgreen">cleantech</span> solutions</h2>
          <h3 className=" text-xl text-white">to today’s challenges across the nation and around the world<br />and to preparing for <span className="text-nsgreen">tomorrow’s environmental trends.</span></h3>
        </HeroSection>
        <ServicesCards />
        <ContentSection sectionTitle='who we are' buttonTitle='find out more' bgImageCSS='url("./src/assets/images/pexels-luis-quintero-2774556 1.png")' sectionImageURL='./src/assets/images/icon__who.png'>
          <>
              <p>Nordiska Solutions is Finnish-Malaysian joint company which has developed a cluster business concept with some leading environmental companies in Europe and Japan who are active in water, wastewater and solids waste management technologies and solutions.</p>
          </>
        </ContentSection>
        <Footer />
    </>
  )
}

export default Home