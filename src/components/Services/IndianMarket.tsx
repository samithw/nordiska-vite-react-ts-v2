import HeroSection from '../HeroSection'
import ContentLayout2Col from '../ContentLayout2Col'
import CommonContainer from '../CommonContainer'
import ContentSeparater from '../ContentSeparater'
import ListInfoCard from '../ListInfoCard'

type Props = {}

const IndianMarket = (props: Props) => {
  return (<>
    <HeroSection bgCSS={{ backgroundImage : 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)) , url("/images/banner__indian__market.jpg")' }}>
      {{
        pageTag : <>services</>,
        bigTextHeading : <>gateway to <br />indian market</>
      }}
    </HeroSection>

    
    <CommonContainer contentBgCSS={{ backgroundColor : "#282828" }}>

        <ContentLayout2Col uniqueId='business-matchmaking'>
          {{
            contentBody : (<>
            <p>for any brand to target a particular market, it is very important to tap into its culture, network, and business pattern etc. to facilitate this, it needs the help of local expertise that understands both sides, and can help with progressive next steps. nordiska solutions has a tie-up with an indian specialist helping global cleantech technology companies and brands thrive in the indian market. we have developed ‘act’ – advisory, consulting and technology – solutions that include the following:</p>

            <div className='flex gap-5 flex-col my-10'>
              <ListInfoCard>
                    {{
                      itemIcon : "/images/icon__technology__2.png",
                      itemDescription : "application development and management for international technology partners with entry/re-entry in the indian market."
                    }}
              </ListInfoCard>

              <ListInfoCard>
                    {{
                      itemIcon : "/images/icon__technology__2.png",
                      itemDescription : "plant de-bottlenecking and management of operations (technical support) of existing wtps/stps/waste water recycling systems"
                    }}
              </ListInfoCard>

              <ListInfoCard>
                    {{
                      itemIcon : "/images/icon__technology__2.png",
                      itemDescription : "special project development and management of community wtps/stps/waste water recycle/desalination plants through technology support for associates/channel partners/oems/epc contractors"
                    }}
              </ListInfoCard>
            </div>

            <p>for additional details of act solutions and services please get in touch with us.</p>
            

            </>),
            contentTitle : "indian culture, network, and business pattern",
            contentImageURL : "/images/icon__business__match.png",
          }}
        </ContentLayout2Col>

        <ContentSeparater bgCSS={{ backgroundColor : "#7D5611" }}>
          {{
            imageURLs : [
              "/images/temple-icon.png",
              "/images/taj-mahal-icon.png",
              "/images/coin-rupee-icon.png"
              ]
          }}
        </ContentSeparater>

      </CommonContainer>
  </>)
}

export default IndianMarket