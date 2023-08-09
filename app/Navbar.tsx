'use client'

import { useEffect, useState } from 'react'
import Link from "next/link"
import { HomeIcon, UsersIcon, PaperAirplaneIcon } from "@heroicons/react/20/solid"
import SearchBar from "@/components/SearchBar"
import { SignInButton } from "@/components/buttons"

const Navbar = () => {
  const [blur, setBlur] = useState(false)

  const blurNav = () => {
    if(window.scrollY >= 35) {
      setBlur(true)
    } else {
      setBlur(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', blurNav);
    return () => {
      window.removeEventListener('scroll', blurNav);
    };
  }, []);

  return (
    <div className={`navbar fixed z-50 h-[65px] top-0 ${blur ? 'backdrop-blur-md bg-base-100 bg-opacity-80' : ''} transition-all duration-200`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className='btn btn-ghost lg:hidden btn-square p-2'>
            <img src="/z.svg" alt="Logo" className="h-full m-auto"/>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href={'/'} className="flex items-center h-7 font-semibold"><HomeIcon className="h-full"/>Página Principal</Link></li>
            <li><Link href={'/feed'} className="flex items-center h-7 font-semibold"><PaperAirplaneIcon className="h-full"/>Feed</Link></li>
            <li><Link href={'/people'} className="flex items-center h-7 font-semibold"><UsersIcon className="h-full"/>Pessoas</Link></li>
          </ul>
        </div>
        <Link href={'/'} className="btn btn-ghost p-2 btn-md normal-case text-xl hidden lg:flex"><img src="/z.svg" alt="Logo" className="h-full"/>App</Link>
      </div>
      <div className="navbar-center hidden lg:flex gap-3">
      <Link href={'/feed'} className="btn btn-ghost normal-case">Feed</Link>
      <Link href={'/people'} className="btn btn-ghost normal-case">Pessoas</Link>
      </div>
      <div className="navbar-end">
        <SearchBar />
        <SignInButton />
      </div>
    </div>
  )
}

export default Navbar