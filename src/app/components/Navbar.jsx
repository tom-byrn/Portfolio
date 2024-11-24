import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import React from 'react'

const Navbar = () => {
  return <nav className='mb-20 flex items-center justify-between py-2'>
    <div className='flex flex-shrink-0 items-center'>
        <img src="/assets/TB.png" alt="logo" className="mx-2 w-10" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/tom-byrn/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/tom-byrn" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
    </div>
  </nav>
}

export default Navbar;
