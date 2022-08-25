import HeroSection from '../HeroSection'
import ContentLayout2Col from '../ContentLayout2Col'
import CommonContainer from '../CommonContainer'
import ContentSeparater from '../ContentSeparater'

type Props = {}

const ChannelDev = (props: Props) => {
    return (<>
        <HeroSection bgCSS={{ backgroundImage : 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) , url("/images/startae-team-7tXA8xwe4W4-unsplash.jpg")' }}>
            <h1 className=" text-4xl md:text-5xl text-white">
              <span className="text-white">Channel development and <br />Channel management</span>
            </h1>
        </HeroSection>
    
        
        <CommonContainer contentBgCSS={{ backgroundColor : "#282828" }}>
    
            <ContentLayout2Col uniqueId='business-matchmaking'>
              {{
                contentBody : (<>
                <p>Our approach to sales transformations is comprehensive. We constantly follow how and to whom companies sell their products and services, the channels they use, and the back-office functions that support these efforts. We also assist clients meet specific challenges in their go-to-market strategy, efficiency of salesforce, key-account management, and other key areas. 
                </p>

                <p className='mt-10'>
                We help clients make lasting improvements to the effectiveness of their sales investments and interactions with customers across all channels to drive sales growth.
                </p>
    
                </>),
                contentTitle : "We help clients make lasting improvements",
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
    
          </CommonContainer>
      </>)
}

export default ChannelDev