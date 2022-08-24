import React, { MouseEventHandler, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}




const Navbar = (props: Props) => {

  const [menuStatus, setMenuStatus] = useState(false)

  const mainNavRef = useRef<HTMLUListElement>(null)
  const isHidden = menuStatus ? "" : "hidden"

  

  const handleCLick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuStatus(!menuStatus)
  }
  
  useEffect(()=>{
    document.addEventListener("mousedown", (e) => {
      //console.log(mainNavRef.current?.contains(e.target as HTMLElement ))
      if(!mainNavRef.current?.contains(e.target as HTMLElement)){
        setMenuStatus(false);
      }
    })
  })

  
  

  return (
    <nav>
      <ul ref={mainNavRef} id="mainNav"
        className={ isHidden + ' fixed right-0 top-0 min-h-screen h-full w-1/2 z-10 font-zen text-2xl bg-zinc-800 bg-opacity-90 pt-30 md:relative md:flex md:flex-row md:w-auto md:h-auto md:min-h-0 md:bg-transparent md:space-x-0 lg:space-x-5  md:top-0 text-white lg:text-base md:text-sm'}
      >
        <li className="nav-item">
          <NavLink to="/"><span>home</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about"><span>about</span></NavLink>
        </li>
        {/* <li className="nav-item">
          <a href="#"><span>products</span></a>
        </li> */}
        <li className="nav-item">
          <NavLink to="/services"><span>services</span></NavLink>
          <ul className='md:absolute w-full p-0 m-0 right-0 hidden border-2 border-teal-600 bg-black bg-opacity-40 rounded-xl'>
            <li className='nav-item sub-nav'><NavLink to="/services/business-matchmaking"><span>Business Matchmaking</span></NavLink></li>
            <li className='nav-item sub-nav'><NavLink to="/services/direct-market-entrance"><span>Direct market entrance</span></NavLink></li>
            <li className='nav-item sub-nav'><NavLink to="/services/direct-touch-sales-activities"><span>Direct touch sales activities</span></NavLink></li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink to="/technology"><span>technology</span></NavLink>
        </li>
        <li className="nav-item">
          <a href="/contact"><span>contact</span></a>
        </li>
      </ul>
      <button onClick={handleCLick} className="md:hidden z-100" id="mobileNavBtn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  )
}

export default Navbar