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

    document.querySelectorAll('.nav-item:not(.has-sub-menu) a , .sub-nav a').forEach((el)=>{
        el.addEventListener("click" , (e) => {
          setMenuStatus(false);
        })
    })
  })

  
  

  return (
    <nav>
      <ul ref = { mainNavRef } id = "mainNav"
        className = { isHidden + ' fixed right-0 top-0 min-h-screen h-full w-2/3 z-10 font-zen text-lg bg-zinc-800 bg-opacity-90 pt-30 md:relative md:flex md:flex-row md:w-auto md:h-auto md:min-h-0 md:bg-transparent md:space-x-0 lg:space-x-5  md:top-0 text-white lg:text-base md:text-sm'}
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
        <li className="nav-item has-sub-menu">
          <NavLink to="/services"><span>services</span></NavLink>
          <ul className='md:absolute p-0 m-0 hidden border-2 border-teal-600 bg-[#282828] bg-opacity-70 rounded-b-xl md:rounded-tr-xl '>
            <li className=' sub-nav'><NavLink to="/services/business-matchmaking"><span>Business Matchmaking</span></NavLink></li>
            <li className=' sub-nav'><NavLink to="/services/direct-market-entrance"><span>Direct market entrance</span></NavLink></li>
            <li className=' sub-nav'><NavLink to="/services/direct-touch-sales-activities"><span>Direct touch sales activities</span></NavLink></li>
            <li className=' sub-nav'><NavLink to="/services/inbound-outbound-marketing"><span>Inbound and outbound marketing</span></NavLink></li>
            <li className=' sub-nav'><NavLink to="/services/channel-development-channel-management"><span>Channel development and Channel management</span></NavLink></li>
            <li className=' sub-nav'><NavLink to="/services/sales-outsourcing"><span>Sales outsourcing</span></NavLink></li>
            <li className=' sub-nav'><NavLink to="/services/gateway-to-indian-market"><span>Gateway to Indian market</span></NavLink></li>
            <li className=' sub-nav'><NavLink to="/services/building-information-modeling"><span>BIM – Building Information Modeling (CAD 2 Revit) </span></NavLink></li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink to="/technology"><span>technology</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact"><span>contact</span></NavLink>
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