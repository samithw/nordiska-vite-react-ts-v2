import React from 'react'
import ButtonType1 from './ButtonType1'
import Header from './Header'

type Props = {
    children : {
        contentTitle : string,
        contentBody : React.ReactNode,
        contentLink? : React.ReactNode,
        contentImageURL : string,
        contentBgCSS : string
    }}

const ContentSection = (props : Props) => {

    return(
        <>
        <div className="content-wrapper" style={{backgroundImage: props.children.contentBgCSS }}>
            <div className="container md:min-h-screen text-white font-zenMaru flex flex-col justify-center">
                <h3 className="font-zen text-4xl lg:text-5xl">{props.children.contentTitle}</h3>
                <div className="flex flex-col-reverse md:flex-row gap-10 my-10">
                    <div className=" text-xl md:text-2xl md:leading-10">
                        {props.children.contentBody}
                    </div>
                    <div className=" shrink-0">
                        <img className="w-64" src={props.children.contentImageURL} />   
                    </div>
                </div>

                {props.children.contentLink}
                
            </div>
        </div>
        </>
    )
}
    


export default ContentSection