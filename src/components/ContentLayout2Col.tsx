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
            <div className="flex md:flex-row my-10">
                <div className='w-1/2'>
                    <h3 className="font-zen text-4xl lg:text-4xl pr-20">{props.children.contentTitle}</h3>
                </div>
                <div className=" w-1/2 text-lg md:text-xl md:leading-8">
                    {props.children.contentBody}
                </div>
            </div>
        </>
    )
}
    


export default ContentLayout2Col