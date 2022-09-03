import React, { JSXElementConstructor } from 'react'

type Props = {bgCSS : React.CSSProperties, children : React.ReactNode}

const HeroSection = (props: Props) => {

  return (
    <>
      <div className="content-wrapper" style= {props.bgCSS} >
        <div className="container min-h-[60vh] flex items-end pb-[5vw]">
          <div className=' items-end font-zen break-words  w-full bg-[#07f198] rounded-[6rem] absolute left-0 right-0 translate-y-[50%] py-1 pr-1 -translate-x-5 bg-opacity-80'>
              <div className=' bg-cyan-900 p-12 rounded-[6rem] min-h-[50%] -translate-x-1'>
              {props.children}
              </div>
           </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection