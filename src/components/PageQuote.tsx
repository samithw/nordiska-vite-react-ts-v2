import React from 'react'

type Props = {children : React.ReactNode}

const PageQuote = (props: Props) => {
  return (
    <div className="w-full" style={{backgroundImage: 'linear-gradient(45deg, #213039 50%, #162026 50%)'}}>
        <div className="md:container min-h-[60vh] mx-auto p-10 flex flex-col items-center justify-center">
          <div className=" text-white text-5xl relative font-zenLoop text-center lg:w-2/3 p-5">
            {/* <span className=" text-red-500 text-6xl font-zen absolute top-2 left-0 inline-block">"</span> */}
            {props.children}
            {/* <span className=" text-rose-500 text-6xl font-zen absolute bottom-2 inline-block">"</span> */}
          </div>
        </div>
      </div>
  )
}

export default PageQuote