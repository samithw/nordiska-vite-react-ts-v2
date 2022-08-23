import React from 'react'
import { NavLink } from 'react-router-dom'
import HeroSection from '../HeroSection'
import ContentSection from '../ContentSection'
import ContentLayout2Col from '../ContentLayout2Col'
import CommonContainer from '../CommonContainer'

type Props = {}

const BusinessMatch = (props: Props) => {
  return (
    <>
      <HeroSection imgurl="/images/services__banner.png">
              <h1 className=" text-4xl md:text-5xl text-white">
                <span className="text-nsgreen">Business Matchmaking</span>
              </h1>
      </HeroSection>

      
      <CommonContainer contentBgCSS={{ backgroundColor : "#282828" }}>

          <ContentLayout2Col uniqueId='business-matchmaking'>
            {{
              contentBody : (<>
                <p>Are you looking for a sales partner or distributor for your products or services who can open the door to the Asia-Pacific region? Or, are you looking high-end technology and solutions provider/manufacture in cleantech sector from Nordic and Central Europe region?  Or would you like to outsource your production segments in Asia-Pacific region to bring competitive advantage to your product and services?</p>

                

                {/* <p>We find potential business partners based on your criteria. We tailor according to your industry, technology, experience, products or services, relationship with or without third party.  Our partner search program includes a basic market overview and a comprehensive business profile on companies interested in a mutual partnership. In addition, we provide sufficient description of companies that are not interested to enter such relationship and their reasons for doing so.</p>

                <p>We also coordinate and optimize the B2B meetings according to the participants profiles while guaranteeing that they will only come meet with qualified profiles.</p> */}

              </>),
              contentTitle : "competitive advantage to your product and services",
              contentImageURL : "/images/icon__business__match.png",
            }}
          </ContentLayout2Col>

          <ContentLayout2Col uniqueId='business-matchmaking'>
            {{
              contentBody : (<>
   
                <p>Our partner search program helps international companies find an agent, representative, distributor or potential outsourcing companies in Asia-Pacific region, and for the Asian-Pacific companies to find potential manufacturing companies and technology providers from the Nordic / central European region.</p>

              </>),
              contentTitle : "Our partner search program",
              contentImageURL : "/images/icon__business__match.png",
            }}
          </ContentLayout2Col>

        </CommonContainer>


    </>
  )
}

export default BusinessMatch