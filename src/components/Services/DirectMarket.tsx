import HeroSection from '../HeroSection'
import ContentLayout2Col from '../ContentLayout2Col'
import CommonContainer from '../CommonContainer'
import ContentSeparater from '../ContentSeparater'

type Props = {}

const DirectMarket = (props: Props) => {
  return (
    <>
      <HeroSection bgCSS={{ backgroundImage : 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)) , url("/images/banner__direct__market.jpg")' }}>
          <h1 className=" text-4xl md:text-5xl text-white">
            <span className="text-white">Direct Market <br />Entrance </span>
          </h1>
      </HeroSection>

      
      <CommonContainer contentBgCSS={{ backgroundColor : "#282828" }}>

          <ContentLayout2Col uniqueId='business-matchmaking'>
            {{
              contentBody : (<>

                <p>We manage your business in Asia-Pacific during the initial stages of your market entrance, literally creating your “own” Asian office or acting as your agent or partner Asia-Pacific region. Specific countries can be selected according to your preference. Nordiska Solutions will directly involve with end users, EPC contractors and win reference customers for you. Moreover, Nordiska Solutions can set up your representative channel and establish relationships with strategic partners, requiring only a minimal investment in resources from your end.</p>

              </>),
              contentTitle : "Establish relationships with strategic partners",
              contentImageURL : "/images/icon__business__match.png",
            }}
          </ContentLayout2Col>

          <ContentSeparater bgCSS={{ backgroundColor : "#146083" }}>
              {{
                imageURLs : [
                  "/images/icon__business__17.png",
                  "/images/icon__business__4.png",
                  "/images/icon__business__5.png",
                  ]
              }}
            </ContentSeparater>

          <ContentLayout2Col uniqueId='business-matchmaking'>
            {{
              contentBody : (<>
   
                <p>Nordiska Solutions executives have extensive experience in the Asia-Pacific, Middle East and European business and large network of personal contacts at numerous companies in the region, particularly in cleantech sector.  The quality of these valuable contacts assures that Nordiska Solutions can quickly enter into the respective parties to generate win-win business with your technology, products and solutions, upon which you could build your future business relationship. </p>

                <p className='mt-10'>If you need detailed information, we would be delighted to get in touch with you.</p>

              </>),
              contentTitle : "Extensive experience in the Asia-Pacific, Middle East and European business",
              contentImageURL : "/images/icon__business__match.png",
            }}
          </ContentLayout2Col>

        </CommonContainer>


    </> 
  )
}

export default DirectMarket