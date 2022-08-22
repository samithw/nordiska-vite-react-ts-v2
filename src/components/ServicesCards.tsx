import React, {useRef, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import ButtonType1 from './ButtonType1'
import CarouselCard from './CarouselCard'

type Props = {}



const ServicesCards = (props: Props) => {

  const nextCard = useRef<HTMLButtonElement>(null);
  const previousCard = useRef<HTMLButtonElement>(null);
  const scrollWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {

    let cardWidth : number

      nextCard.current?.addEventListener("click" , (el) => {
        cardWidth = document.querySelectorAll<HTMLElement>('.icon-wrapper')[0].scrollWidth
        scrollWrapper.current?.scrollBy({left : cardWidth , behavior : 'smooth'})
      })

      previousCard.current?.addEventListener("click" , (el) => {
        cardWidth = document.querySelectorAll<HTMLElement>('.icon-wrapper')[0].scrollWidth
        scrollWrapper.current?.scrollBy({left : -cardWidth , behavior : 'smooth'})
      })

      scrollWrapper.current?.addEventListener("touchmove" , (event) => {
        //cardWidth = document.querySelectorAll<HTMLElement>('.icon-wrapper')[0].scrollWidth
        //event.preventDefault()
        scrollWrapper.current?.scrollBy({left : cardWidth , behavior : 'smooth'})
        //console.log(event)
      }, false)

    

    //}
  })

  return (
    
    <div className = "content-wrapper" style = {{ backgroundImage: 'url("/images/ourservicesbanner.png")'}}>
        <div className="container relative flex justify-center">
          
          {/* <h1 className="lg:absolute text-4xl lg:text-5xl font-zen text-nsgreen lg:top-10 lg:left-10 mb-10">our services</h1> */}
          
          <button ref={previousCard} className=' text-white hidden md:block mr-2'>
            <svg xmlns="http://www.w3.org/2000/svg" className=" h-20 w-10" fill="none" viewBox="6 0 10 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div ref={scrollWrapper} className="flex flex-row gap-3 mx-auto py-3 w-auto overflow-x-scroll md:overflow-x-hidden snap-mandatory snap-x">
            
            <CarouselCard>
                {{
                  bgColorStyle : {
                    backgroundColor : "#2D3648" //0E7C7B
                  },
                  cardImageURL : "/images/icon__type2__discussion.png",
                  cardTitle : "Business matchmaking",

                  cardSummary : "Are you looking for a sales partner or distributor for your products or services who can open the door to the Asia-Pacific region? Or, are you looking high-end technology and solutions provider/manufacture in cleantech sector from Nordic and Central Europe region?",

                  cardLink : <NavLink to='/services#consultancy' className='btn-w'>see more</NavLink>
                }}

            </CarouselCard>

            <CarouselCard>
                {{
                  bgColorStyle : {
                    backgroundColor : "#004369" //0E7C7B
                  },
                  cardImageURL : "/images/icon__type2__discussion.png",
                  cardTitle : "Direct market entrance",
                  cardSummary : "We manage your business in Asia-Pacific during the initial stages of your market entrance, literally creating your “own” Asian office or acting as your agent or partner Asia-Pacific region. Specific countries can be selected according to your preference.",
                  cardLink : <NavLink to='/services#consultancy' className='btn-w'>see more</NavLink>
                }}

            </CarouselCard>

            <CarouselCard>
                {{
                  bgColorStyle : {
                    backgroundColor : "#482D2D" //0E7C7B
                  },
                  cardImageURL : "/images/icon__type2__discussion.png",
                  cardTitle : "Direct touch sales activities",
                  cardSummary : "Together with our partners we Nordiska Solutions has developed an effective mechanism on how to identify the most important sales and marketing obstacles and means to tackle them. ",
                  cardLink : <NavLink to='/services#consultancy' className='btn-w'>see more</NavLink>
                }}

            </CarouselCard>

            <CarouselCard>
                {{
                  bgColorStyle : {
                    backgroundColor : "#F56476" //0E7C7B
                  },
                  cardImageURL : "/images/icon__type2__discussion.png",
                  cardTitle : "Inbound & outbound marketing",
                  cardSummary : "By using inbound marketing, we help you generate qualified leads and increase awareness of your, thereby to increase sales. We create original content, such as blog posts to attract the right people and refine them further to influence purchase decision.",
                  cardLink : <NavLink to='/services#consultancy' className='btn-w'>see more</NavLink>
                }}

            </CarouselCard>

            <CarouselCard>
                {{
                  bgColorStyle : {
                    backgroundColor : "#E43F6F" //0E7C7B
                  },
                  cardImageURL : "/images/icon__type2__discussion.png",
                  cardTitle : "Channel development & Channel management",
                  cardSummary : "Our approach to sales transformations is comprehensive. We constantly follow how and to whom companies sell their products and services, the channels they use, and the back-office functions that support these efforts. ",
                  cardLink : <NavLink to='/services#consultancy' className='btn-w'>see more</NavLink>
                }}

            </CarouselCard>

            <CarouselCard>
                {{
                  bgColorStyle : {
                    backgroundColor : "#47524F" //0E7C7B
                  },
                  cardImageURL : "/images/icon__type2__discussion.png",
                  cardTitle : "Sales outsourcing",
                  cardSummary : "Looking to expand your sales team or let someone to handle the Sales for you? Sales outsourcing, an efficient and effective alternative?",
                  cardLink : <NavLink to='/services#consultancy' className='btn-w'>see more</NavLink>
                }}

            </CarouselCard>


            <CarouselCard>
                {{
                  bgColorStyle : {
                    backgroundColor : "#2F4742" //0E7C7B
                  },
                  cardImageURL : "/images/icon__type2__discussion.png",
                  cardTitle : "Gateway to Indian market",
                  cardSummary : "For any brand to target a particular market, it is very important for it to tap into its culture, network, and business pattern etc. And to facilitate this, it needs the help of local expertise who understands both sides and can accordingly help with progressive next steps for the same.",
                  cardLink : <NavLink to='/services#consultancy' className='btn-w'>see more</NavLink>
                }}

            </CarouselCard>


            <CarouselCard>
                {{
                  bgColorStyle : {
                    backgroundColor : "#175873" //0E7C7B
                  },
                  cardImageURL : "/images/icon__type2__discussion.png",
                  cardTitle : "Building Information Modeling",
                  cardSummary : "We, Nordiska Solutions Sdn. bhd. of Malaysia, pleased to announce our partnership agreement with IBS-Projects, a Finnish-Malaysian expertise, specialized in Building Information Modeling (BIM) solutions.",
                  cardLink : <NavLink to='/services#consultancy' className='btn-w'>see more</NavLink>
                }}

            </CarouselCard>
            

            {/* <NavLink className="icon-wrapper" to="/services#business-support">
              <div className="w-2/3 aspect-square mx-auto">
                <img className=" w-full aspect-auto" src="/images/icon__b__support.png" alt="" />
              </div>
              <p className="w-3/4 text-center text-xl font-zen text-white">Business Support</p>
            </NavLink>
             
             <NavLink className="icon-wrapper" to="/services#sales-marketing">
              <div className="w-2/3 aspect-square mx-auto">
                <img className=" w-full aspect-auto" src="/images/icon__sales__marketing.png" alt="" />
              </div>
              <p className="w-3/4 text-center text-xl font-zen text-white">Sales &amp; Marketing</p>
            </NavLink>
            
            <NavLink className="icon-wrapper" to="/services#tech-solutions">
              <div className="w-2/3 aspect-square mx-auto">
                <img className=" w-full aspect-auto" src="/images/icon__tech__solutions.png" alt="" />
              </div>
              <p className="w-3/4 text-center text-xl font-zen text-white">Technology Solutions</p>
            </NavLink>

            <NavLink className= "icon-wrapper" to="/services#business-matchmaking">
              <div className="w-2/3 aspect-square mx-auto">
                <img className=" w-full aspect-auto" src="/images/icon__b__matchmaking.png" alt="" />
              </div>
              <p className="w-3/4 text-center text-xl font-zen text-white">Business Matchmaking</p>
            </NavLink>
            
            <NavLink className= "icon-wrapper" to="/services#consultancy">
              <div className="w-2/3 aspect-square mx-auto">
                <img className=" w-full aspect-auto" src="/images/icon__consultancy.png" alt="" />
              </div>
              <p className="w-3/4 text-center text-xl font-zen text-white">Consultancy</p>
            </NavLink> */}

          </div>

          <button ref={nextCard} className=' text-white hidden md:block ml-2'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-10" fill="none" viewBox="7 0 10 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>      
          </button>

        </div>
      </div>
  )
}

export default ServicesCards