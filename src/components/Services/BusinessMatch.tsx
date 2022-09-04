import React from 'react'
import { NavLink } from 'react-router-dom'
import HeroSection from '../HeroSection'
import ContentSection from '../ContentSection'
import ContentLayout2Col from '../ContentLayout2Col'
import CommonContainer from '../CommonContainer'
import ContentSeparater from '../ContentSeparater'


type Props = {}

const BusinessMatch = (props: Props) => {
  return (
    <>
      <HeroSection bgCSS={{ backgroundImage : 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)) , url("/images/banner__business__matchmaking.jpg")' }}>
          {{
          pageTag : <>services</>,
          bigTextHeading : <>Business <br />Matchmaking</>
        }}
      </HeroSection>

      
      <CommonContainer contentBgCSS={{ backgroundColor : "#282828" }}>

          <ContentLayout2Col uniqueId='business-matchmaking'>
            {{
              contentBody : (<>
                <p>Are you looking for a sales partner or distributor for your products or services who can open the door to the Asia-Pacific region? Or, are you looking high-end technology and solutions provider/manufacture in cleantech sector from Nordic and Central Europe region?  Or would you like to outsource your production segments in Asia-Pacific region to bring competitive advantage to your product and services?</p>
                <p className='mt-10'>Our partner search program helps international companies find an agent, representative, distributor or potential outsourcing companies in Asia-Pacific region, and for the Asian-Pacific companies to find potential manufacturing companies and technology providers from the Nordic / central European region.</p>
                

                {/* 

                <p>We also coordinate and optimize the B2B meetings according to the participants profiles while guaranteeing that they will only come meet with qualified profiles.</p> */}

              </>),
              contentTitle : "Competitive advantage to your product and services",
              contentImageURL : "/images/icon__business__match.png",
            }}
          </ContentLayout2Col>

          <ContentSeparater bgCSS={{ backgroundColor : "#63a39a" }}>
              {{
                imageURLs : [
                  "/images/icon__business__4.png",
                  "/images/icon__business__2.png",
                  "/images/icon__business__1.png",
                  ]
              }}
            </ContentSeparater>

          <ContentLayout2Col uniqueId='business-matchmaking'>
            {{
              contentBody : (<>
   
                <p>We find potential business partners based on your criteria. We tailor according to your industry, technology, experience, products or services, relationship with or without third party.  Our partner search program includes a basic market overview and a comprehensive business profile on companies interested in a mutual partnership. In addition, we provide sufficient description of companies that are not interested to enter such relationship and their reasons for doing so.</p>
                
                <p className='mt-10'><b>We also coordinate and optimize the B2B meetings according to the participants profiles while guaranteeing that they will only come meet with qualified profiles.</b></p>

              </>),
              contentTitle : "Relationship with or without third party",
              contentImageURL : "/images/icon__business__match.png",
            }}
          </ContentLayout2Col>

        </CommonContainer>


    </>
  )
}

export default BusinessMatch