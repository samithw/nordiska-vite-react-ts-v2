import React from 'react'

type Props = {
    children : {
        contactHeader : string,
        contactAddress : React.ReactNode,
        contactNumber? : string,
        contactEmail? : string
    }
}

const ContactCard = (props: Props) => {

  const contactEmail : string | undefined = props.children.contactEmail
  const mailToLink : string = contactEmail ? "mailto:" + contactEmail : "" 

  return (<>
    <div className='text-xl font-zenMaru'>
        <div className=' font-zen text-nsgreen text-2xl'> {props.children.contactHeader} </div>
        <div> {props.children.contactAddress} </div>
        <div>
            
            
          {
            props.children.contactNumber && (
            <p> {props.children.contactNumber} </p>
            )
          }
          
          {
            props.children.contactEmail && (
            <p><a href = {mailToLink} > {props.children.contactEmail} </a></p>
            )
            
          }
              

            
        </div>
    </div>
  </>)
}

export default ContactCard