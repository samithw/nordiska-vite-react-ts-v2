import HeroSection from '../HeroSection'
import ContentLayout2Col from '../ContentLayout2Col'
import CommonContainer from '../CommonContainer'
import ContentSeparater from '../ContentSeparater'
type Props = {}

const DirectSales = (props: Props) => {
  return (
    <>
    <HeroSection bgCSS={{ backgroundImage : 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) , url("/images/andreas-brucker-C2Dyr5FhGPQ-unsplash.jpg")' }}>
        <h1 className=" text-4xl md:text-5xl text-white">
          <span className="text-white">Direct touch sales<br />activities </span>
        </h1>
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


  </> 
  )
}

export default DirectSales