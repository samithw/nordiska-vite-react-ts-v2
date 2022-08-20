import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="content-wrapper bg-[#2D2F36]">
        <div className="container md:flex relative md:space-x-20">
            <div className="w-full md:w-[70%]">
                <a href="#">
                    <img
                    className="h-10 aspect-auto align-middle"
                    src="images/ns__logo__trans1.png"
                    alt="Nordiska Solutions Logo"
                    />
                </a>
                <p className="text-white font-zenMaru text-lg md:text-xl my-5">
                    Strategic partners mean a lot to your business. They may bring you
                    skills, experience, knowledge, capital and network. If you are looking
                    for your business partners, start here!
                </p>
                <div className="w-full flex flex-wrap gap-10">
                    <div className="w-[50%] text-white">
                    <h3 className="font-zen text-lg text-nsgreen my-2">get in touch</h3>
                    <p className="flex items-center space-x-1">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                        </svg>
                        <span className="text-lg">info@nordiskasoltions.com</span>
                    </p>
                    <p className="flex items-center space-x-1">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                        </svg>
                        <span className="text-lg">+60149545789</span>
                    </p>
                    </div>
                    <div className="w-[50%]">
                        <h3 className="font-zen text-lg text-nsgreen my-2">newsletter</h3>
                        <input
                            type="email"
                            className="w-full p-2 bg-gray-700 font-zenMaru text-sm text-white"
                            placeholder="Your e-mail here"
                        />
                        <a href="">
                            <button className="btn-w my-2 bg-cyan-800">subscribe</button>
                        </a>
                    </div>
                </div>
                <div className="w-full">
                    <h3 className="font-zen text-lg text-nsgreen my-2">location</h3>
                    <img src="images/location__dummy.png" />
                </div>
            </div>

            <div className="w-full md:w-[30%] flex flex-wrap gap-10 md:block text-white text-lg mt-14">
                
                <div className='shrink-0'>
                    <h3 className="font-zen text-lg text-nsgreen my-2">quicklinks</h3>
                    <ul>
                        <li><a href="#" className="w-fit">Home</a></li>
                        <li><a href="#" className="w-fit">About us</a></li>
                        <li><a href="#" className="w-fit">Products</a></li>
                        <li><a href="#" className="w-fit">Services</a></li>
                        <li><a href="#" className="w-fit">Technology</a></li>
                        <li><a href="#" className="w-fit">Contact us</a></li>
                    </ul>
                </div>
                
                <div className='shrink-0'>
                    <h3 className="font-zen text-lg text-nsgreen my-2">services</h3>
                    <ul>
                        <li><a href="#" className="w-fit">Business Support</a></li>
                        <li><a href="#" className="w-fit">Sales &amp; Marketing</a></li>
                        <li><a href="#" className="w-fit">Business Matchmaking</a></li>
                        <li><a href="#" className="w-fit">Consultancy</a></li>
                    </ul>
                </div>

                
                
            </div>
        </div>
        <p className="text-white text-center py-2">
            Copyright © 2022 Nordiska Solutions
        </p>
    </div>

  )
}

export default Footer