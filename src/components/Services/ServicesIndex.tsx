import React from 'react'
import HeroSection from '../HeroSection'
import PageQuote from '../PageQuote'
import ServicesCards from '../ServicesCards'

type Props = {}

const ServicesIndex = (props: Props) => {
  return (
    <>

    <HeroSection bgCSS={{backgroundImage : 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)) , url("/images/banner__services__2.jpg")'}}>
        {{
          pageTag : <>a wide offering </>,
          bigTextHeading : <>we work with <br /> <span className='text-nsgreen'>our partners</span> constantly</>,
          smallText : <>providing customizable solutions in cleantech for profitable growth</>
        }}
    </HeroSection>

    <PageQuote>
        <p>nordiska solutions helps innovative engineering companies, epc contractors, end-users, consulting companies extend their reach into europe, and the asia-pacific region by providing expert sales, business development and inbound/outbound marketing services. We constantly work with our partners by providing scalable and customizable solutions that support their profitable growth.</p>
    </PageQuote>

    <ServicesCards />

    </>
  )
  
}

export default ServicesIndex