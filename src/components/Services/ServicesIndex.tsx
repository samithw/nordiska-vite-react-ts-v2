import React from 'react'
import HeroSection from '../HeroSection'
import ServicesCards from '../ServicesCards'

type Props = {}

const ServicesIndex = (props: Props) => {
  return (
    <>

    <HeroSection imgurl="/images/services__banner.png">
        {/* <h1 className=" text-4xl md:text-5xl text-white">grow with <br /> <span className="text-nsgreen">nordiska solutions</span></h1> */}
        <h1 className=" text-base md:text-2xl text-nsgreen">We constantly work with</h1>
        <h2 className=" text-2xl md:text-3xl lg:text-5xl text-white text-shadow"> our partners by providing<span className=" text-nsgreen"> scalable and customizable </span>solutions </h2>
        <h3 className=" text-sm md:text-lg text-white">that support their profitable growth</h3>
    </HeroSection>

    <ServicesCards />

    </>
  )
  
}

export default ServicesIndex