import React, { JSXElementConstructor } from 'react'

type Props = {imgurl :string , children : React.ReactNode}

const HeroSection = (props: Props) => {

  return (
    <>
      <div className="flex w-full items-end bg-center bg-no-repeat min-h-screen bg-cover" style={{backgroundImage: "url('" + props.imgurl + "')"}}>
        <div className="md:container font-zen md:mx-auto px-10 pb-[10vh] md:pb-[15vh]">
          <div className=' mt-64'>
              {props.children}
           </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection