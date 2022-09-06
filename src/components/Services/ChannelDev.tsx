import HeroSection from '../HeroSection'
import ContentLayout2Col from '../ContentLayout2Col'
import CommonContainer from '../CommonContainer'
import ContentSeparater from '../ContentSeparater'

type Props = {}

const ChannelDev = (props: Props) => {
    return (<>
        <HeroSection bgCSS={{ backgroundImage : 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)) , url("/images/banner__channel__development.jpg")' }}>
        {{
          pageTag : <>services</>,
          bigTextHeading : <>channel development and <br />channel management</>
        }}  
        </HeroSection>
    
        
        <CommonContainer contentBgCSS={{ backgroundColor : "#282828" }}>
    
            <ContentLayout2Col uniqueId='business-matchmaking'>
              {{
                contentBody : (<>
                <p>our approach to sales transformations is comprehensive. we constantly follow how and to whom companies sell their product(s) and service(s), the channels they use, and the back-office functions that support these efforts. we also help clients meet specific challenges in their go-to-market strategy, efficiency of salesforce, key-account management, and other key areas.
                </p>

                <p className='mt-10'>
                we help clients make lasting improvements to the effectiveness of their sales investments and interactions with customers – across all channels – to drive sales growth.
                </p>
    
                </>),
                contentTitle : "we help clients make lasting improvements",
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
    
          </CommonContainer>
      </>)
}

export default ChannelDev