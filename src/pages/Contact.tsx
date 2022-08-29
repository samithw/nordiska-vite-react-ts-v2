import CommonContainer from '../components/CommonContainer'
import ContactCard from '../components/ContactCard'
import ContentLayout2Col from '../components/ContentLayout2Col'
import ContentSeparater from '../components/ContentSeparater'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import PageQuote from '../components/PageQuote'

type Props = {}

const Contact = (props: Props) => {
  return (
    <>
        <HeroSection bgCSS={{ backgroundImage : 'linear-gradient(45deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)) , url("/images/contact__banner.png")' }}>
            <h1 className=" text-base md:text-2xl text-nsgreen">You are on the</h1>
            <h2 className=" text-2xl md:text-3xl lg:text-5xl text-white text-shadow">Right path to <br /><span className=" text-nsgreen"> Greatness </span></h2>
            <h3 className=" text-sm md:text-lg text-white">We are here to help you get there</h3>
        </HeroSection>

        <CommonContainer contentBgCSS={{ backgroundColor : "#282828" }}>
        
        <ContentLayout2Col>
              {{
                contentBody : (<>

<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              <ContactCard>
                {{
                  contactHeader : "Malaysia",
                  contactAddress : <>
                      <p>
                        <b>Nordiska Solutions sdn. bhd.</b> <br />
                        R1-15-10, Setiawalk, <br />
                        Perisaran Wawasan, <br />
                        47160 Puchong, Selangor, <br />
                        Malaysia
                      </p>
                  </>,
                  contactNumber : "+60 194490345",
                  contactEmail : "info@nordiskasolution.com"
                }}
              </ContactCard>

              <ContactCard>
                {{
                  contactHeader : "Finland",
                  contactAddress : <>
                      <p>
                        Local representative office <br />
                        Vinkkelikuja 30, as 3C,<br />
                        26660 Rauma,<br />
                        Finland
                      </p>
                  </>,
                  contactEmail : "info@nordiskasolution.com"
                }}
              </ContactCard>
          </div>

                </>),
                contentTitle : "Contact us",
                contentImageURL : "/images/icon__business__match.png",
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

          <h1 className=" text-3xl md:text-4xl font-zen text-white py-10">
              <span className="">Our International Partners</span>
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            <ContactCard>
                {{
                  contactHeader : "India",
                  contactAddress : <>
                      <p>
                        FLAT NO 2, SUDAMA 214, <br />
                        WALKESHWAR ROAD,<br />
                        Mumbai,Maharashtra,<br />
                        India
                      </p>
                  </>
                  
                }}
              </ContactCard>

              <ContactCard>
                {{
                  contactHeader : "The Netherlands",
                  contactAddress : <>
                      <p>
                        Ominawater, <br />
                        Witte Paal 35,<br />
                        1742 NL Schagen,<br />
                        Netherlands
                      </p>
                  </>
                  
                }}
              </ContactCard>

              <ContactCard>
                {{
                  contactHeader : "France",
                  contactAddress : <>
                      <p>
                        <b>HYDRODYN SARL.</b> <br />
                        2 Av des Prés - BL104,<br />
                        78180 Montigny le Bretonneux,<br />
                        France
                      </p>
                  </>
                  
                }}
              </ContactCard>

              <ContactCard>
                {{
                  contactHeader : "Germany",
                  contactAddress : <>
                      <p>
                        Mr Fritz Kropp <br />
                        PV Consulting, <br />
                        D-79271 St. Peter/Black forest, <br />
                        Germany
                      </p>
                  </>
                  
                }}
              </ContactCard>

              <ContactCard>
                {{
                  contactHeader : "Vietnam",
                  contactAddress : <>
                      <p>
                        Nguyen Thi Phuong Thanh <br />
                        No. 30, 63/212/8 Le Duc Tho, <br />My Dinh 2 ward, <br />Nam Tu Liem district, <br />Hanoi <br />
                        Vietnam
                      </p>
                  </>
                  
                }}
              </ContactCard>

          </div>

        </CommonContainer>

        <Footer />
        </>
  )
}

export default Contact