import React from 'react'
import HeroSection from '../HeroSection'
import PageQuote from '../PageQuote'
import ServicesCards from '../ServicesCards'

type Props = {}

const ServicesIndex = (props: Props) => {
  return (
    <>

    <HeroSection bgCSS={{backgroundImage : 'url("/images/banner__services__2.jpg")'}}>
        {{
          pageTag : <>services</>,
          bigTextHeading : <>we constantly work with our partners by providing<span className=" text-nsgreen"> scalable and customizable </span>solutions </>,
          smallText : <>that support their profitable growth</>
        }}
    </HeroSection>

    <PageQuote>
        <p>Nordiska Solutions help innovative engineering companies, EPC contractors, End-users, Consulting companies extend their reach into Europe, and Asia Pacific by providing expert sales, business development and inbound/outbound marketing services. We constantly work with our partners by providing scalable and customizable solutions that support their profitable growth.</p>
    </PageQuote>

    <ServicesCards />

    </>
  )
  
}

export default ServicesIndex