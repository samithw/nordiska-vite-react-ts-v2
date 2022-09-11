import HeroSection from '../HeroSection'
import ContentLayout2Col from '../ContentLayout2Col'
import CommonContainer from '../CommonContainer'
import ContentSeparater from '../ContentSeparater'
type Props = {}

const DirectSales = (props: Props) => {
  return (
    <>
    <HeroSection bgCSS={{ backgroundImage : 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)) , url("/images/banner__direct__touch__sales.jpg")' }}>
      {{
        pageTag : <>services</>,
        bigTextHeading : <>direct touch sales<br />activities</>
      }}
    </HeroSection>

    
    <CommonContainer contentBgCSS={{ backgroundColor : "#282828" }}>

        <ContentLayout2Col uniqueId='business-matchmaking'>
          {{
            contentBody : (<>
              <p>together with our partners, we, nordiska solutions, have developed an effective mechanism to identify the most important sales and marketing obstacles, and the means to tackle them. a unique mix of marketing methods and customer experience knowledge enables us to identify the best solutions for your business segment, compile and implement them. this way, we assure fast entry of your product(s) and service(s) in target markets.</p>
            </>),
            contentTitle : "a unique mix of marketing methods",
            contentImageURL : "/images/icon__business__match.png",
          }}
        </ContentLayout2Col>

        <ContentSeparater bgCSS={{ backgroundColor : "#b7792d" }}>
              {{
                imageURLs : [
                  "/images/icon__direct__sales__1.png",
                  "/images/icon__direct__sales__2.png",
                  "/images/icon__direct__sales__3.png",
                  ]
              }}
            </ContentSeparater>

      </CommonContainer>


  </> 
  )
}

export default DirectSales