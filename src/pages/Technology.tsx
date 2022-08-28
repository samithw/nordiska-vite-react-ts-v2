import React from 'react'
import { NavLink } from 'react-router-dom'
import ContentSection from '../components/ContentSection'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import PageQuote from '../components/PageQuote'
import ButtonType1 from '../components/ButtonType1'
import CommonContainer from '../components/CommonContainer'
import ContentLayout2Col from '../components/ContentLayout2Col'
import ContentSeparater from '../components/ContentSeparater'
import CarouselCard from '../components/CarouselCard'
import ListInfoCard from '../components/ListInfoCard'

type Props = {}

const Technology = (props: Props) => {

  return (
    <>
        <HeroSection bgCSS={{ backgroundImage : 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) , url("/images/banner__technology__3.jpg")' }}>
            <h1 className=" text-4xl md:text-5xl text-white">nordic <br /> <span className="text-nsgreen">high-end</span> cleantech</h1>
            
        </HeroSection>
        {/* <PageQuote>
            <span>
              
              </span>
        </PageQuote> */}

        <ContentSection>
            {{
              contentBgCSS : {
                backgroundColor : "#282828",
              },
              contentTitle : "Technology",
              contentBody : (
                <>
                  
                  <p >Nordiska Solutions is committed to provide primarily “Nordic” high-end cleantech products and solutions for both municipal and industrial applications. We offer customised solutions in water treatment, wastewater treatment and sloid waste management to our global customers.</p>
                  <p className='mt-10'>We constantly work together with our customers and technology providers in order to guarantee the very highest level of customer satisfaction and sustainability. The success of our clients depends on the skills and commitment of our people and we constantly pursue the innovative technology and cost-effective solutions for our clients, as we are driven to find answers where others fail.</p>
                </> 
              ),
              contentImageURL : "/images/icon__techology__3.png"
            }}
        </ContentSection>

        <CommonContainer contentBgCSS={{ backgroundColor : "#282828" }}>
        
            <ContentLayout2Col>
              {{
                contentBody : <>
                {/* <p>We are committed to providing optimal Nordic cleantech solutions to today’s challenges across the nation and around the world and to preparing for tomorrow’s environmental trends.</p> */}
                
                <p>Our superior network, as referred in all our services, is the basis of success in building prospective partnerships. The wide range of connections enables us to offer diverse selections from each sector and business size.</p>

                <p className="mt-10">Whether you are seeking to find partners individually or on a corporate basis, we will provide you the perfect match according to your requirements.</p>

                </>,
                contentTitle : "Our superior network",
                contentImageURL : ""
              }}
            </ContentLayout2Col>
            
            <ContentSeparater>
          {{
            imageURLs : [
              "/images/icon__type2__discussion.png",
              "/images/icon__type2__discussion.png",
              "/images/icon__type2__discussion.png",
              ]
          }}
        </ContentSeparater>

            <ContentLayout2Col>
              {{
                contentBody : <>
                
                <p>We have tie-up with several European and Asian OEM Companies to provide cost effective products and solutions to municipal water and wastewater markets. Whether you need new piece of equipment or to replace existing system, we have the experience and engineering capabilities to deliver the most reliable and cost-effective products and solutions.</p>
                </>,
                contentTitle : "Solutions with reach",
                contentImageURL : ""
              }}
            </ContentLayout2Col>

        </CommonContainer>


        <CommonContainer contentBgCSS = {{ backgroundColor : '#091540' }}>
          <h1 className=' font-zen blue text-4xl'>What we offer</h1>
        <ContentLayout2Col>
              {{
                contentBody : <>
                
                <div className="flex gap-4 flex-wrap">

                <ListInfoCard>
                  {{
                    itemIcon : "/images/icon__type2__discussion.png",
                    itemDescription : "Pre-treatment equipment such as screens (fine, coarse, bend, rotary, drum etc.)"
                  }}
                </ListInfoCard>

                <ListInfoCard>
                  {{
                    itemIcon : "/images/icon__type2__discussion.png",
                    itemDescription : "Disc filters, Drum filters"
                  }}
                </ListInfoCard>

                <ListInfoCard>
                  {{
                    itemIcon : "/images/icon__type2__discussion.png",
                    itemDescription : "DAF-units"
                  }}
                </ListInfoCard>

                <ListInfoCard>
                  {{
                    itemIcon : "/images/icon__type2__discussion.png",
                    itemDescription : "CPI units for separation of free oil from effluent water"
                  }}
                </ListInfoCard>

                <ListInfoCard>
                  {{
                    itemIcon : "/images/icon__type2__discussion.png",
                    itemDescription : "Clarifier mechanisms (Chain & Flight systems and components)"
                  }}
                </ListInfoCard>

                <ListInfoCard>
                  {{
                    itemIcon : "/images/icon__type2__discussion.png",
                    itemDescription : "Non-Metallic Chains with 6-inch pitch, 160mm pitch etc."
                  }}
                </ListInfoCard>

                <ListInfoCard>
                  {{
                    itemIcon : "/images/icon__type2__discussion.png",
                    itemDescription : "Lamella clarifiers for SWRO"
                  }}
                </ListInfoCard>

                <ListInfoCard>
                  {{
                    itemIcon : "/images/icon__type2__discussion.png",
                    itemDescription : "Sludge treatment equipment (Belt filter Presses, Muti-Disc Dewatering)"
                  }}
                </ListInfoCard>

                <ListInfoCard>
                  {{
                    itemIcon : "/images/icon__type2__discussion.png",
                    itemDescription : "Chemical dosing systems"
                  }}
                </ListInfoCard>

                <ListInfoCard>
                  {{
                    itemIcon : "/images/icon__type2__discussion.png",
                    itemDescription : "Light weight panel cover for clarifiers"
                  }}
                </ListInfoCard>

                <ListInfoCard>
                  {{
                    itemIcon : "/images/icon__type2__discussion.png",
                    itemDescription : "Sludge disposal systems such as Cake hoppers, Conveyor systems"
                  }}
                </ListInfoCard>

              

                </div>

                </>,
                contentTitle : "For Municipal and industrial water and wastewater applications",
                contentImageURL : ""
              }}
            </ContentLayout2Col>

        <ContentLayout2Col>
              {{
                contentBody : <>
                
                <div className="flex flex-wrap gap-4">
                  <ListInfoCard>
                    {{
                      itemIcon : "/images/icon__type2__discussion.png",
                      itemDescription : "From manual sorting line to fully automated plant"
                    }}
                  </ListInfoCard>

                  <ListInfoCard>
                    {{
                      itemIcon : "/images/icon__type2__discussion.png",
                      itemDescription : "Recycling and sorting to composting"
                    }}
                  </ListInfoCard>
                </div>

                </>,
                contentTitle : "For solids waste managements",
                contentImageURL : ""
              }}
            </ContentLayout2Col>

        </CommonContainer>

        <Footer />
    </>
  )
}

export default Technology