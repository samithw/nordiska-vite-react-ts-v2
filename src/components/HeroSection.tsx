import React, { JSXElementConstructor } from 'react'

type Props = {imgurl :string , children : React.ReactNode}

const HeroSection = (props: Props) => {

  return (
    <>
      <div className="flex w-full items-end bg-center bg-no-repeat h-screen bg-cover" style={{backgroundImage: "url('"+props.imgurl+"')"}}>
        <div className="md:container font-zen mx-auto px-10 pb-[15vh]">
           {props.children}
        </div>
      </div>
    </>
  )
}

export default HeroSection