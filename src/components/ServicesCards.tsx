import React from 'react'

type Props = {}

const ServicesCards = (props: Props) => {
  return (
    <div className="content-wrapper" style={{backgroundImage: 'url("./src/assets/images/ourservicesbanner.png")'}}>
        <div className="container relative">
          <h1 className="lg:absolute text-5xl font-zen text-nsgreen lg:top-10 lg:left-10 mb-10">our services</h1>
          <div className='flex flex-row justify-center flex-wrap font-zen '>
            <div className="icon-wrapper">
              <div className="w-2/3 aspect-square mx-auto">
                <img className=" w-full aspect-auto" src="./src/assets/images/icon__b__support.png" alt="" />
              </div>
              <p className="w-3/4 text-center text-xl font-zen text-white">Business Support</p>
            </div>
            <div className="icon-wrapper">
              <div className="w-2/3 aspect-square mx-auto">
                <img className=" w-full aspect-auto" src="./src/assets/images/icon__sales__marketing.png" alt="" />
              </div>
              <p className="w-3/4 text-center text-xl font-zen text-white">Sales &amp; Marketing</p>
            </div>
            <div className="icon-wrapper">
              <div className="w-2/3 aspect-square mx-auto">
                <img className=" w-full aspect-auto" src="./src/assets/images/icon__tech__solutions.png" alt="" />
              </div>
              <p className="w-3/4 text-center text-xl font-zen text-white">Technology Solutions</p>
            </div>
            <div className="icon-wrapper">
              <div className="w-2/3 aspect-square mx-auto">
                <img className=" w-full aspect-auto" src="./src/assets/images/icon__b__matchmaking.png" alt="" />
              </div>
              <p className="w-3/4 text-center text-xl font-zen text-white">Business Matchmaking</p>
            </div>
            <div className="icon-wrapper">
              <div className="w-2/3 aspect-square mx-auto">
                <img className=" w-full aspect-auto" src="./src/assets/images/icon__consultancy.png" alt="" />
              </div>
              <p className="w-3/4 text-center text-xl font-zen text-white">Consultancy</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ServicesCards