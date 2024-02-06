"use client"
import Image from 'next/image'
import React from 'react'
import { signIn, signOut, useSession} from "next-auth/react"

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white py-5 px-2">
        {/* <Image /> */}
        <menu>
            <li  onClick={()=> signIn()}>
              Sign In
            </li>
            <li onClick={()=> signOut()}>
              Sign Out
            </li>
            <li>

            </li>
        </menu>
    </nav>
  )
}

export default Navbar