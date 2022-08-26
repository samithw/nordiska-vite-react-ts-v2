import HeroSection from '../HeroSection'
import ContentLayout2Col from '../ContentLayout2Col'
import CommonContainer from '../CommonContainer'
import ContentSeparater from '../ContentSeparater'

type Props = {}

const IndianMarket = (props: Props) => {
  return (<>
    <HeroSection bgCSS={{ backgroundImage : 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) , url("/images/banner__indian__market.jpg")' }}>
        <h1 className=" text-4xl md:text-5xl text-white">
          <span className="text-white">Gateway to <br />Indian market</span>
        </h1>
    </HeroSection>

    
    <CommonContainer contentBgCSS={{ backgroundColor : "#282828" }}>

        <ContentLayout2Col uniqueId='business-matchmaking'>
          {{
            contentBody : (<>
            <p>For any brand to target a particular market, it is very important for it to tap into its culture, network, and business pattern etc. And to facilitate this, it needs the help of local expertise who understands both sides and can accordingly help with progressive next steps for the same. Nordiska Solutions has tie-up with an Indian specialist who helping global cleantech technology companies and brands thrive in the India market. We have developed ACT (Advisory, Consulting and Technology) Solutions that includes following:</p>

            <p className='mt-10'>
            Application Development and Management to International Technology Partners for Entry / Re-Entry in the Indian market.</p>

            <p className='mt-10'>
            Plant Debottlenecking and Management of Operations (Technical support) of existing WTPs / STPs / Waste Water Recycling systems</p>

            <p className='mt-10'>
            Special Project Development and Management of Community WTPs / STPs / Waste Water Recycle / Desalination Plants through Technology support to Associates / Channel Partners / OEMs / EPC contractors</p>

            <p className='mt-10'>For additional detail of the ACT Solutions and services please get in touch with us.</p>

            </>),
            contentTitle : "Indian culture, network, and business pattern",
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

export default IndianMarket