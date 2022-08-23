import React from 'react'
import HeroSection from '../HeroSection'
import PageQuote from '../PageQuote'
import ServicesCards from '../ServicesCards'

type Props = {}

const ServicesIndex = (props: Props) => {
  return (
    <>

    <HeroSection bgCSS={{backgroundImage : 'url("/images/services__banner.png")'}}>
        {/* <h1 className=" text-4xl md:text-5xl text-white">grow with <br /> <span className="text-nsgreen">nordiska solutions</span></h1> */}
        <h1 className=" text-base md:text-2xl text-nsgreen">We constantly work with</h1>
        <h2 className=" text-2xl md:text-3xl lg:text-5xl text-white text-shadow"> our partners by providing<span className=" text-nsgreen"> scalable and customizable </span>solutions </h2>
        <h3 className=" text-sm md:text-lg text-white">that support their profitable growth</h3>
    </HeroSection>

    <PageQuote>
        <p>Nordiska Solutions help innovative engineering companies, EPC contractors, End-users, Consulting companies extend their reach into Europe, and Asia Pacific by providing expert sales, business development and inbound/outbound marketing services. We constantly work with our partners by providing scalable and customizable solutions that support their profitable growth.</p>

        <p className='mt-10'>Our core knowledge and capabilities under the three main service categories include:</p>
    </PageQuote>

    <ServicesCards />

    </>
  )
  
}

export default ServicesIndex