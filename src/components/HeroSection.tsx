import React, { JSXElementConstructor } from 'react'

type Props = {imgurl :string , children : React.ReactNode}

const HeroSection = (props: Props) => {

  return (
    <>
      <div className="w-full bg-center bg-no-repeat bg-cover" style={{backgroundImage: "url('" + props.imgurl + "')"}}>
        <div className="md:container min-h-screen flex items-end md:mx-auto px-10 pb-[10vh] md:pb-[15vh]">
          <div className=' items-end font-zen break-words'>
              {props.children}
           </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection