import React from 'react'
import ButtonType1 from './ButtonType1'
import Header from './Header'

type Props = {children : React.ReactNode , bgImageCSS : string, sectionImageURL : string, sectionTitle : string, buttonTitle:string }

const ContentSection = (props : Props) => {

    return(
        <>
        <div className="w-full bg-cover" style={{backgroundImage: props.bgImageCSS }}>
            <div className="md:container text-white font-zenMaru min-h-[100vh] flex flex-col justify-center mx-auto p-10 py-20">
                <h3 className="font-zen text-5xl text-nsgreen">{props.sectionTitle}</h3>
                <div className="flex flex-col-reverse md:flex-row gap-10 my-10">
                    <div className=" text-2xl leading-10">
                        {props.children}
                    </div>
                    <div className=" shrink-0">
                        <img className="w-64" src={props.sectionImageURL} />   
                    </div>
                </div>
                <ButtonType1>{props.buttonTitle}</ButtonType1>

            </div>
        </div>
        </>
    )
}

export default ContentSection