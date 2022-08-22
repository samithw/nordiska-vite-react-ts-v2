import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {
    children : {
        cardTitle : string,
        cardSummary : string,
        cardLink? : React.ReactNode,
        cardImageURL : string,
        bgColorStyle : React.CSSProperties
    }
}

const CarouselCard = (props: Props) => {
  return (
    <div className="icon-wrapper" style = {props.children.bgColorStyle}>
      <div className=' w-full rounded-t-3xl p-6 '>
        <img className=" w-1/4" src={props.children.cardImageURL} />
        <h3 className="w-full text-left text-xl font-zen text-white pt-4 underline-offset-2 decoration-2 underline decoration-white"> {props.children.cardTitle} </h3>
      </div>

        <p className='text-white font-zenMaru p-6'> {props.children.cardSummary} </p>
        
        <div className=' mt-auto p-6'>{props.children.cardLink}</div>
    </div>
  )
}

export default CarouselCard