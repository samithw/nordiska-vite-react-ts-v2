import React, { JSXElementConstructor } from 'react'

type Props = {bgCSS : React.CSSProperties, 
  children : {
    pageTag : React.ReactNode,
    bigTextHeading : React.ReactNode,
    smallText? : React.ReactNode
  }
}

const HeroSection = (props: Props) => {

  return (
    <>
      <div className="content-wrapper" style= {props.bgCSS} >
        <div className="container md:h-screen min-h-[80vh] flex items-end pb-[5vw]">
          <div className=' items-end font-zen break-words lg:w-[50vw]'>
          
          <h1 className=" text-sm md:text-xl text-white bg-[#00A3FF] w-fit px-4 py-1 rounded-3xl mb-2"> {props.children.pageTag} </h1>
          <h2 className=" text-3xl md:text-3xl lg:text-4xl text-white"> {props.children.bigTextHeading} </h2>
          <h3 className=" text-base md:text-lg text-white "> {props.children.smallText} </h3>

           </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection