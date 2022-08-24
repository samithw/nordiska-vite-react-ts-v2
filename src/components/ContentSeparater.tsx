import React from 'react'

type Props = {children : {
  imageURLs : string[]
}}

const ContentSeparater = (props: Props) => {

  const imgElements : React.ReactNode[] = [];

  props.children.imageURLs.forEach(url => {
    imgElements.push(<img src={url} />) 
  });


  return (
    <div className="flex my-20 justify-evenly bg-[#C57E95] py-20 overflow-hidden">
        {imgElements}
    </div>
  )
}

export default ContentSeparater