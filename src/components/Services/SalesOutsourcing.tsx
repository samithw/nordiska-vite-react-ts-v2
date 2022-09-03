import HeroSection from '../HeroSection'
import ContentLayout2Col from '../ContentLayout2Col'
import CommonContainer from '../CommonContainer'
import ContentSeparater from '../ContentSeparater'
import ContactDetail from '../ContactDetail'

type Props = {}

const SalesOutsourcing = (props: Props) => {
  return (<>
    <HeroSection bgCSS={{ backgroundImage : 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) , url("/images/banner__sales__outsourcing.jpg")' }}>
      {{
        pageTag : <>services</>,
        bigTextHeading : <>sales <br />outsourcing</>
      }}
    </HeroSection>

    
    <CommonContainer contentBgCSS={{ backgroundColor : "#282828" }}>

        <ContentLayout2Col uniqueId='business-matchmaking'>
          {{
            contentBody : (<>
            <p>Looking to expand your sales team or let someone to handle the Sales for you? Sales outsourcing, an efficient and effective alternative 
            </p>

            <p className='mt-10'>
            Hiring dedicated staff to build and manage your business in Asia Pacific is costly, whereas the return on investment is still difficult to predict. In addition. training new staff and obtaining the appropriate contacts and market knowledge can be a time and resource consuming process. We offer dedicated sales resources who could undertake the most time-consuming task in order to grow both your brand identity as well as revenue. We also offer Business development outsourcing services based on your business criteria. 
            </p>

            </>),
            contentTitle : "Sales outsourcing, an efficient and effective alternative",
            contentImageURL : "/images/icon__business__match.png",
          }}
        </ContentLayout2Col>

        <ContentSeparater bgCSS={{ backgroundColor : "#773B62" }}>
          {{
            imageURLs : [
              "/images/icon__type2__discussion.png",
              "/images/icon__business__support.png",
              "/images/icon2__sales__marketing.png",
              ]
          }}
        </ContentSeparater>

        <ContentLayout2Col uniqueId='business-matchmaking'>
          {{
            contentBody : (<>
            <p>Our sales experts have an extensive experience and market knowledge in the Asia-Pacific and Middle East markets. We know the corporate culture and background of the various prospects and have a considerable network which covers all area from consultant to end-users. With this working concept, you are able to “smell” the market in the specified area and to minimize your exposure to risk.  
            </p>

            <p className='mt-10'>
            As of now, we have helped several European and Asian companies to materialized considerable business in Asia-Pacific region. We highly recommend you to Start your sales activities with us now. Our services are for your disposal. For more information, please contact <br /><ContactDetail>
                        {{
                            iconType : 'email',
                            contactInfo : <a className=' underline' href='mailto:info@nordiskasolutions.com'>info@nordiskasolutions.com</a>
                        }}
                    </ContactDetail>
                    
            </p>

            </>),
            contentTitle : "Extensive experience and market knowledge",
            contentImageURL : "/images/icon__business__match.png",
          }}
        </ContentLayout2Col>

      </CommonContainer>
  </>)
}

export default SalesOutsourcing