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
    
    <div className = "content-wrapper" style = {{ backgroundImage: 'url("images/ourservicesbanner.png")'}}>
        <div className="container relative flex justify-center">
          
          {/* <h1 className="lg:absolute text-4xl lg:text-5xl font-zen text-nsgreen lg:top-10 lg:left-10 mb-10">our services</h1> */}
          
          <button ref={previousCard} className=' text-white hidden md:block mr-2'>
            <svg xmlns="http://www.w3.org/2000/svg" className=" h-20 w-10" fill="none" viewBox="6 0 10 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div ref={scrollWrapper} className="flex flex-row gap-3 mx-auto py-3 font-zen w-auto overflow-x-scroll md:overflow-x-hidden snap-mandatory snap-x">
            
            <CarouselCard>
                {{
                  cardImageURL : "images/icon__b__support.png",
                  cardTitle : "Business Support",
                  cardSummary : "",
                  cardLink : <a href='/services' className='btn-w'>see more</a>
                }}

            </CarouselCard>

            <CarouselCard>
                {{
                  cardImageURL : "images/icon__sales__marketing.png",
                  cardTitle : "Sales & Marketing",
                  cardSummary : "",
                  cardLink : <a href='/services' className='btn-w'>see more</a>
                }}

            </CarouselCard>

            <CarouselCard>
                {{
                  cardImageURL : "images/icon__sales__marketing.png",
                  cardTitle : "Sales & Marketing",
                  cardSummary : "",
                  cardLink : <a href='/services' className='btn-w'>see more</a>
                }}

            </CarouselCard>

            <CarouselCard>
                {{
                  cardImageURL : "images/icon__sales__marketing.png",
                  cardTitle : "Sales & Marketing",
                  cardSummary : "",
                  cardLink : <a href='/services' className='btn-w'>see more</a>
                }}

            </CarouselCard>
            

            {/* <NavLink className="icon-wrapper" to="/services#business-support">
              <div className="w-2/3 aspect-square mx-auto">
                <img className=" w-full aspect-auto" src="images/icon__b__support.png" alt="" />
              </div>
              <p className="w-3/4 text-center text-xl font-zen text-white">Business Support</p>
            </NavLink>
             
             <NavLink className="icon-wrapper" to="/services#sales-marketing">
              <div className="w-2/3 aspect-square mx-auto">
                <img className=" w-full aspect-auto" src="images/icon__sales__marketing.png" alt="" />
              </div>
              <p className="w-3/4 text-center text-xl font-zen text-white">Sales &amp; Marketing</p>
            </NavLink>
            
            <NavLink className="icon-wrapper" to="/services#tech-solutions">
              <div className="w-2/3 aspect-square mx-auto">
                <img className=" w-full aspect-auto" src="images/icon__tech__solutions.png" alt="" />
              </div>
              <p className="w-3/4 text-center text-xl font-zen text-white">Technology Solutions</p>
            </NavLink>

            <NavLink className= "icon-wrapper" to="/services#business-matchmaking">
              <div className="w-2/3 aspect-square mx-auto">
                <img className=" w-full aspect-auto" src="images/icon__b__matchmaking.png" alt="" />
              </div>
              <p className="w-3/4 text-center text-xl font-zen text-white">Business Matchmaking</p>
            </NavLink>
            
            <NavLink className= "icon-wrapper" to="/services#consultancy">
              <div className="w-2/3 aspect-square mx-auto">
                <img className=" w-full aspect-auto" src="images/icon__consultancy.png" alt="" />
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