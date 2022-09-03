import HeroSection from '../HeroSection'
import ContentLayout2Col from '../ContentLayout2Col'
import CommonContainer from '../CommonContainer'
import ContentSeparater from '../ContentSeparater'
type Props = {}

const DirectSales = (props: Props) => {
  return (
    <>
    <HeroSection bgCSS={{ backgroundImage : 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) , url("/images/banner__direct__touch__sales.jpg")' }}>
      {{
        pageTag : <>services</>,
        bigTextHeading : <>Direct touch sales<br />activities</>
      }}
    </HeroSection>

    
    <CommonContainer contentBgCSS={{ backgroundColor : "#282828" }}>

        <ContentLayout2Col uniqueId='business-matchmaking'>
          {{
            contentBody : (<>
              <p>Together with our partners we Nordisak Solutions has developed an effective mechanism on how to identify the most important sales and marketing obstacles and means to tackle them. Unique mix of marketing methods and customer experience knowledge enables us to identify the best solutions for your business segment and compile it to implement it. Doing this way, we assure fast entry to your product and services in target markets.</p>
            </>),
            contentTitle : "Unique mix of marketing methods",
            contentImageURL : "/images/icon__business__match.png",
          }}
        </ContentLayout2Col>

        <ContentSeparater bgCSS={{ backgroundColor : "#d3a163" }}>
              {{
                imageURLs : [
                  "/images/icon__business__13.png",
                  "/images/icon__business__14.png",
                  "/images/icon__business__19.png",
                  ]
              }}
            </ContentSeparater>

      </CommonContainer>


  </> 
  )
}

export default DirectSales