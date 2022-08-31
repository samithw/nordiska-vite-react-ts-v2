import React from 'react'
import ContactDetail from './ContactDetail'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="content-wrapper bg-[#2D2F36]">
        <div className="container md:flex relative md:space-x-20">
            <div className="w-full md:w-[70%] py-10 md:p-0">
                <a href="#">
                    <img
                    className="h-10 aspect-auto align-middle"
                    src="/images/ns__logo__trans1.png"
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
                    <h3 className="font-zen text-lg text-nsgreen my-2">Get in touch</h3>
                    
                    
                    <ContactDetail>
                        {{
                            iconType : 'email',
                            contactInfo : <a className=' underline' href='mailto:info@nordiskasolutions.com'>info@nordiskasolutions.com</a>
                        }}
                    </ContactDetail>
                    

                    <ContactDetail>
                        {{
                            iconType : 'phone',
                            contactInfo : <span>+60194490345</span>
                        }}
                    </ContactDetail>

                    

                    </div>
                    {/* <div className="w-[50%]">
                        <h3 className="font-zen text-lg text-nsgreen my-2">newsletter</h3>
                        <input
                            type="email"
                            className="w-full p-2 bg-gray-700 font-zenMaru text-sm text-white"
                            placeholder="Your e-mail here"
                        />
                        <a href="">
                            <button className="btn-w my-2 bg-cyan-800">subscribe</button>
                        </a>
                    </div> */}
                </div>             
            </div>
        </div>
        <p className="text-white text-center py-5 border-t border-gray-700">
            Copyright © 2022 Nordiska Solutions
        </p>
    </div>

  )
}

export default Footer