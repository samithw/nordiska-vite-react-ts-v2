import React, { JSXElementConstructor } from 'react'

type Props = {bgCSS : React.CSSProperties, children : React.ReactNode}

const HeroSection = (props: Props) => {

  return (
    <>
      <div className="content-wrapper" style= {props.bgCSS} >
        <div className="container md:h-screen min-h-[500px] flex items-end pb-[5vw]">
          <div className=' items-end font-zen break-words lg:w-[50vw]'>
              {props.children}
           </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection