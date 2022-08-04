import React from 'react'
import ButtonType1 from './ButtonType1'
import Header from './Header'

type Props = {children : React.ReactNode , bgImageCSS : string, sectionImageURL : string, sectionTitle : string, buttonTitle:string }

const ContentSection = (props : Props) => {

    return(
        <>
        <div className="w-full " style={{backgroundImage: props.bgImageCSS }}>
            <div className="md:container  text-white font-zenMaru min-h-[100vh] flex flex-col justify-center mx-auto p-10 py-20">
                <h3 className="font-zen text-5xl text-nsgreen">{props.sectionTitle}</h3>
                <div className="flex gap-28 my-10">
                    <div className="w-3/4 text-2xl leading-10">
                        {props.children}
                    </div>
                    <div className=" w-80">
                        <img className=" w-10/12" src={props.sectionImageURL} />   
                    </div>
                </div>
                <ButtonType1>{props.buttonTitle}</ButtonType1>

            </div>
        </div>
        </>
    )
}

export default ContentSection