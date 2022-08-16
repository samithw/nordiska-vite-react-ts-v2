import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {children : React.ReactNode, toPath : string}

const ButtonType1 = (props: Props) => {
  return (
    
    <NavLink to={props.toPath} className="btn-type1"> 
      {props.children} 
    </NavLink>

    
  )
}

export default ButtonType1