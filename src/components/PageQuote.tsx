import React from 'react'

type Props = {children : React.ReactNode}

const PageQuote = (props: Props) => {
  return (
    <div className="content-wrapper" style={{backgroundImage: 'linear-gradient(45deg, #213039 50%, #162026 50%)'}}>
        <div className="container min-h-[500px] md:min-h-[300px] flex flex-col items-center justify-center">
          <div className=" text-white text-4xl lg:text-3xl relative font-zenMaru lg:w-full p-5">
            {/* <span className=" text-red-500 text-6xl font-zen absolute top-2 left-0 inline-block">"</span> */}
            {props.children}
            {/* <span className=" text-rose-500 text-6xl font-zen absolute bottom-2 inline-block">"</span> */}
          </div>
        </div>
      </div>
  )
}

export default PageQuote