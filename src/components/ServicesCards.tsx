import React from 'react'

type Props = {}

const ServicesCards = (props: Props) => {
  return (
    <div className="w-full bg-center bg-no-repeat bg-cover bg-sky-900" style={{backgroundImage: 'url("./src/assets/images/ourservicesbanner.png")'}}>
        <div className="md:container relative flex flex-row justify-center flex-wrap font-zen mx-auto px-10 py-10 lg:py-0">
          <h1 className="lg:absolute w-full text-5xl text-nsgreen lg:top-10 lg:left-10 mb-10">our services</h1>
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
  )
}

export default ServicesCards