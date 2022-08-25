import React from 'react'
import { NavLink } from 'react-router-dom'
import ContentSection from '../components/ContentSection'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import PageQuote from '../components/PageQuote'
import ButtonType1 from '../components/ButtonType1'
import CommonContainer from '../components/CommonContainer'
import ContentLayout2Col from '../components/ContentLayout2Col'

type Props = {}

const Technology = (props: Props) => {

  return (
    <>
        <HeroSection bgCSS={{ backgroundImage : 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)) , url("/images/tech__banner.png")' }}>
            <h1 className=" text-4xl md:text-5xl text-white">nordic <br /> <span className="text-nsgreen">high-end</span> <br /> cleantech</h1>
        </HeroSection>
        <PageQuote>
            <span>Nordiska Solutions is committed to provide primarily “Nordic” high-end cleantech products and solutions for both municipal and industrial applications. We offer customised solutions in water treatment, wastewater treatment and sloid / hazardous waste management to our regional and global customers. &nbsp;</span>
        </PageQuote>

        <ContentSection>
            {{
              contentBgCSS : {
                backgroundImage : "linear-gradient(45deg, #073E4A 10%, #073E4A 90%)",
              },
              contentTitle : "technology",
              contentBody : (
                <>
                  <p>We constantly work together with our customers and technology providers in order to guarantee the very highest level of customer satisfaction and sustainability. The success of our clients depends on the skills and commitment of our people and we constantly pursue the innovative technology and cost-effective solutions for our clients, as we are driven to find answers where others fail.</p>

                  

                  
                </> 
              ),
              contentLink : <NavLink to='/contact' className='btn-type1'>Inquire</NavLink>,
              contentImageURL : "/images/icon__tech__solutions.png"
            }}
        </ContentSection>

        <CommonContainer contentBgCSS={{ backgroundColor : "#282828" }}>
            <ContentLayout2Col>
              {{
                contentBody : <>
                <p>We are committed to providing optimal Nordic cleantech solutions to today’s challenges across the nation and around the world and to preparing for tomorrow’s environmental trends.</p>
                
                <p className="mt-10">Our superior network, as referred in all our services, is the basis of success in building prospective partnerships. The wide range of connections enables us to offer diverse selections from each sector and business size.</p>

                <p className="mt-10">Whether you are seeking to find partners individually or on a corporate basis, we will provide you the perfect match according to your requirements.</p>

                </>,
                contentTitle : "Our superior network",
                contentImageURL : ""
              }}
            </ContentLayout2Col>
        </CommonContainer>
        
        <Footer />
    </>
  )
}

export default Technology