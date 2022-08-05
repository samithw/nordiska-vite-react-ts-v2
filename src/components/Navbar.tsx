import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav>
      <ul
        id="mainNav"
        className="hidden md:flex flex-col font-zen text-2xl absolute left-0 w-full top-32 bg-white bg-opacity-90 md:flex-row md:relative md:w-auto md:bg-transparent md:space-x-0 lg:space-x-5  md:top-0 md:text-white lg:text-base md:text-sm"
      >
        <li className="nav-item">
          <NavLink to="/"><span>home</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about"><span>about</span></NavLink>
        </li>
        <li className="nav-item">
          <a href="#"><span>products</span></a>
        </li>
        <li className="nav-item">
        <NavLink to="/services"><span>services</span></NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/technology"><span>technology</span></NavLink>
        </li>
        <li className="nav-item">
          <a href="#"><span>contact</span></a>
        </li>
      </ul>
      <button className="md:hidden" id="mobileNavBtn">
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