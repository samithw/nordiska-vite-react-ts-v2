import HeroSection from '../HeroSection'
import ContentLayout2Col from '../ContentLayout2Col'
import CommonContainer from '../CommonContainer'
import ContentSeparater from '../ContentSeparater'

type Props = {}

const BuildingInfoModeling = (props: Props) => {
  return (<>
    <HeroSection bgCSS={{ backgroundImage : 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)) , url("/images/banner__building__modeling.jpg")' }}>
        {{
          pageTag : <>services</>,
          bigTextHeading : <>BIM – building information modeling (CAD 2 Revit)</>
        }}
    </HeroSection>

    
    <CommonContainer contentBgCSS={{ backgroundColor : "#282828" }}>

        <ContentLayout2Col uniqueId='business-matchmaking'>
          {{
            contentBody : (<>
            
            <p>we, nordiska solutions sdn. bhd. of malaysia, are pleased to announce our partnership agreement with IBS Projects, a finnish-malaysian enterprise specializing in building information modeling (BIM) solutions.</p>

            <p className='mt-10'>IBS Projects designs mechanical, electrical and plumbing systems for a wide array of buildings. we have a team of highly-trained and qualified designers who have helped countless clients create the structure of their dreams. we can help you realize your vision and draft optimum REVIT models for facilitating construction. you can always be sure of excellent service and optimum support from us, keeping you in the loop at all times. our team takes a client-centric approach, offering tailored solutions to meet your unique needs.</p>

            </>),
            contentTitle : "finnish-malaysian expertise, specialized in building information modeling",
            contentImageURL : "/images/icon__business__match.png",
          }}
        </ContentLayout2Col>

        <ContentSeparater bgCSS={{ backgroundColor : "#3F5157" }}>
          {{
            imageURLs : [
              "/images/icons8-auto-cad-64.png",
              "/images/icons8-cad-64.png",
              "/images/icons8-cad-64__2.png"
              ]
          }}
        </ContentSeparater>


        <ContentLayout2Col uniqueId='business-matchmaking'>
          {{
            contentBody : (<>
            
            <p>we can help you sail past all stages of BIM planning and construction so that you can start constructing with confidence.</p>

            <p className='mt-10'>the best thing about our service is our affordable fees. we are always transparent about our pricing structure and pride ourselves on our affordability without compromising on quality.</p>

            <p className='mt-10'>consult with our team to know more about our specific charges.</p>

            </>),
            contentTitle : "affordable fees",
            contentImageURL : "/images/icon__business__match.png",
          }}
        </ContentLayout2Col>

      </CommonContainer>
  </>)
}

export default BuildingInfoModeling