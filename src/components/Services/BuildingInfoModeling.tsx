import HeroSection from '../HeroSection'
import ContentLayout2Col from '../ContentLayout2Col'
import CommonContainer from '../CommonContainer'
import ContentSeparater from '../ContentSeparater'

type Props = {}

const BuildingInfoModeling = (props: Props) => {
  return (<>
    <HeroSection bgCSS={{ backgroundImage : 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) , url("/images/banner__building__modeling.jpg")' }}>
        <h1 className=" text-4xl md:text-5xl text-white">
          <span className="text-white">BIM – Building Information Modeling (CAD 2 Revit)</span>
        </h1>
    </HeroSection>

    
    <CommonContainer contentBgCSS={{ backgroundColor : "#282828" }}>

        <ContentLayout2Col uniqueId='business-matchmaking'>
          {{
            contentBody : (<>
            
            <p>We, Nordiska Solutions Sdn. bhd. of Malaysia, pleased to announce our partnership agreement with IBS-Projects, a Finnish-Malaysian expertise, specialized in Building Information Modeling (BIM) solutions.</p>

            <p className='mt-10'>IBS-Projects is specialized in designing mechanical, electrical & plumbing systems for a wide array of different buildings. We have a team of highly trained and qualified designers who has helped countless clients create the structure of their dreams. We can help you to realize your vision and draft optimum REVIT models for facilitating construction. You can always be sure of excellent service and optimum support from our end which keeps you in the loop at all times. Our team also takes a client-centric approach, offering tailored solutions to meet your unique needs.
            </p>

            </>),
            contentTitle : "Finnish-Malaysian expertise, specialized in Building Information Modeling",
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
            
            <p>We can help you sail past all stages of BIM planning and construction so that you can start constructing with full confidence. Our team also takes a client-centric approach, offering tailored solutions to meet your unique needs.</p>

            <p className='mt-10'>The best thing about our service is the affordable nature of our fees. We are always transparent about our pricing structure and pride ourselves on our affordability without compromising on quality.</p>

            <p className='mt-10'>You can consult with our team to know more about our specific charges.</p>

            </>),
            contentTitle : "Affordable nature of our fees",
            contentImageURL : "/images/icon__business__match.png",
          }}
        </ContentLayout2Col>

      </CommonContainer>
  </>)
}

export default BuildingInfoModeling