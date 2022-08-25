import React from 'react'
import ButtonType1 from './ButtonType1'
import Header from './Header'

type Props = {
    children : {
        contentTitle : string,
        contentBody : React.ReactNode,
        contentImageURL : string
        
    },

    uniqueId? : string;
    
}

const ContentLayout2Col = (props : Props) => {

    return(
        <>       
            <div className="flex flex-col md:flex-row my-10 gap-x-20">
                <div className=' md:w-1/3 md:border-r-4 pr-10 '>
                    <h3 className="font-zen text-3xl mb-10 md:text-4xl text-nsgreen lg:text-4xl break-words">{props.children.contentTitle}</h3>
                </div>
                <div className=" md:w-2/3 text-lg md:text-2xl md:leading-10">
                    {props.children.contentBody}
                </div>
            </div>
        </>
    )
}
    


export default ContentLayout2Col