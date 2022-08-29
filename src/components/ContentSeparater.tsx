import React from 'react'

type Props = {
  children : {
    imageURLs : string[]
  },
  bgCSS : React.CSSProperties
}

const ContentSeparater = (props: Props) => {

  const imgElements : React.ReactNode[] = [];

  props.children.imageURLs.forEach(url => {
    imgElements.push(<img className=' w-32 aspect-square' src={url} />) 
  });


  return (
    <div className="flex my-20 justify-evenly py-20 overflow-hidden" style = { props.bgCSS }>
        {imgElements}
    </div>
  )
}

export default ContentSeparater