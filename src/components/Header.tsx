import React from 'react'
import Navbar from './Navbar'

type Props = {}

const Header = (props: Props) => {
  return (
    
  <header className="absolute w-full min-w-[320px]">
    <div className="relative container h-auto min-h-0 flex items-center justify-between space-x-10 ">
      <a href="#" className=' flex-shrink-0'>
        <img
          className="h-14 lg:h-16 aspect-auto align-middle"
          src="./src/assets/images/ns__logo__trans1.png"
          alt="Nordiska Solutions Logo"
        />
      </a>
      <Navbar />
    </div>
  </header>

  )
}

export default Header