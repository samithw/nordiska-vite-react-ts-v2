import React from 'react'

type Props = {children : React.ReactNode}

const ButtonType1 = (props: Props) => {
  return (
    <button className=" w-fit text-2xl bg-transparent hover:bg-blue-500 text-white hover:text-white py-2 px-8 pb-3 border hover:border-transparent rounded-2xl leading-7">{props.children}</button>
  )
}

export default ButtonType1