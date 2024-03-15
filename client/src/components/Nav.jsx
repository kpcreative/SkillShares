import React from 'react'

import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineLogin, AiOutlineUser, AiOutlineUserAdd, AiOutlineUserSwitch, AiOutlineMail } from 'react-icons/ai';


const Nav = () => {
  return (
   
       
    <nav className="flex flex-row items-center justify-between bg-white-900 text-black py-4 px-6">
    <div  className="logo-container">
   <h1 className='text-3xl font-bold'>SkillShare</h1>
  </div>
    <div className="flex items-center">
      <span className="text-1xl font-bold"></span>
    </div>
    <div className="hidden lg:flex md:flex lg:flex-1 items-center justify-end font-normal space-x-6">
      <Link to="/Home" spy={true} smooth={true} className="hover:bg-[#F2F7F2] py-2 px-4 hover:scale-110 ease-in duration-200">
        <AiOutlineHome size={20} /> Home
      </Link>
      <Link to="/About" spy={true} smooth={true} className="hover:bg-[#F2F7F2] hover:rounded py-2 px-4 hover:scale-110 ease-in duration-200">
        <AiOutlineInfoCircle size={20}/> About
      </Link>
     
      <Link to="/Profile" spy={true} smooth={true} className="hover:bg-[#F2F7F2] hover:rounded py-2 px-4 hover:scale-110 ease-in duration-200">
        <AiOutlineUser size={20} /> Profile
      </Link>
     
      <Link to="/Psych" spy={true} smooth={true} className="hover:bg-[#F2F7F2] hover:rounded py-2 px-4 hover:scale-110 ease-in duration-200">
        <AiOutlineUserSwitch size={20}/> Psychiatrist
      </Link>
      <Link to="/Contact"spy={true} smooth={true}  className="hover:bg-[#F2F7F2] hover:[#F2F7F2]  hover:rounded py-2 px-4 hover:scale-110 ease-in duration-200">
        <AiOutlineMail size={20} /> Contact
      </Link>

      <Link to="/register" spy={true} smooth={true} className="hover:bg-[#F2F7F2] hover:rounded  transition py-2 px-4 hover:scale-110 ease-in duration-200">
        <AiOutlineUserAdd size={20}/> SignUp
      </Link>

      <Link to="/login" spy={true} smooth={true} className="hover:bg-[#F2F7F2]   hover:rounded transition py-2 px-4 hover:scale-110 ease-in duration-200">
        <AiOutlineLogin size={20}/> LogIn
      </Link>
    </div>
    <div className="lg:hidden block bg-slate-900 text-white py-4 px-6 ">
      <ul className="flex text-center text-xl space-x-6">
       
      </ul>
    </div>
  </nav>
  )
}

export default Nav