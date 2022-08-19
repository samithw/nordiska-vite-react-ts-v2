import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {
    children : {
        cardTitle : string,
        cardSummary : string,
        cardLink? : React.ReactNode,
        cardImageURL : string
    }
}

const CarouselCard = (props: Props) => {
  return (
    <div className="icon-wrapper">
        <h3 className="w-3/4 text-left text-xl font-zen text-white py-5"> {props.children.cardTitle} </h3>
        
        <p className='text-white font-zenMaru'>In a complex world you need to discover smart ways and creative solutions. Nordiska Solutions introduce professional services such as sales channel development, sales leads generation, follow-up works, and business networking, after supports in order to expand your business globally.</p>
        
        <div className=' mt-auto'>{props.children.cardLink}</div>
    </div>
  )
}

export default CarouselCard