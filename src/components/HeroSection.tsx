import React, { JSXElementConstructor } from 'react'

type Props = {imgurl :string , children : React.ReactNode}

const HeroSection = (props: Props) => {

  return (
    <>
      <div className="content-wrapper" style={{backgroundImage: "url('" + props.imgurl + "')"}}>
        <div className="container md:h-screen min-h-[600px] flex items-end pb-[5vw]">
          <div className=' items-end font-zen break-words'>
              {props.children}
           </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection