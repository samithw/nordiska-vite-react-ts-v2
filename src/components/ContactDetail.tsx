import React, { Children, ReactNode } from 'react'
import { render } from 'react-dom'

type Props = {
    children : {
        iconType? : string,
        iconSvg? : React.ReactNode,
        contactInfo : React.ReactNode
    }
}

const ContactDetail = (props: Props) => {

    let iconSVG : React.ReactNode = <></>

    switch(props.children.iconType){
        case 'phone' : {
            iconSVG = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        break;
        }
        case 'email' : {
            iconSVG = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            break;
        }
    }

  return (
    <div className="inline-flex justify-between items-center my-1 py-1 px-1 pr-4 text-sm text-gray-700 rounded-3xl border border-teal-600 dark:text-white" aria-label="Component requires Tailwind v3.0">
        {
        
        
        
        props.children.iconType && (
            <span className="text-xs bg-teal-800 rounded-3xl text-white px-3 py-1.5 mr-3">
                {iconSVG}
            </span> )
        }
        <div className="text-lg">{props.children.contactInfo}</div>
    </div>
  )
}

export default ContactDetail