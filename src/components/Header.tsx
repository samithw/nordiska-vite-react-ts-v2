import React from 'react'
import Navbar from './Navbar'

type Props = {}

const Header = (props: Props) => {
  return (
    
  <header className="absolute h-32 w-full">
    <div className="relative md:container p-10 h-32 flex items-center justify-between md:mx-auto">
      <a href="#">
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