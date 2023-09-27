import { React, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {  BiLogoFacebook,BiLogoLinkedin,BiLogoTwitter,BiLogoInstagram, BiScan } from "react-icons/bi";
import { TbChartTreemap, TbUserHexagon } from "react-icons/tb";
import { FiSettings, FiHome } from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi2";
function Header() {
  
  return (
    <>
    <div className='navcontainer bg-[#254936] flex flex-col lg:flex-row  justify-between w-full'>
    <div className="logo ">
      <a href="#">Green Slate</a>
      <p>make your world better</p>
    </div>

<hr className='devider'/>
    <div className=" navlinkscontainer flex flex-col lg:flex-row  justify-between text-white">
      
      <div style={{display: 'flex', justifyContent: 'center',gap:6, alignItems:'center'}} 
       className='navlinks m-2 text-[#ffffff]  px-5 py-2  '>
      <FiHome />
      <a  href="#">Home</a>
      </div>
      
      <div style={{display: 'flex', justifyContent: 'center', gap:6, alignItems:'center'}}  
      className=' navlinks m-2 text-[#ffffff] px-5 py-2  '>
      <BiScan />
      <a href="#">Scan</a>
      </div>

      <div style={{display: 'flex', justifyContent: 'center',gap:6, alignItems:'center'}}   
      className=' navlinks m-2 text-[#ffffff] px-5 py-2  '>
      <TbChartTreemap />
      <a href="#">Recycling Map </a>
      </div>

      <div style={{display: 'flex', justifyContent: 'center',gap:6, alignItems:'center'}}  className=' navlinks m-2 text-[#ffffff]  px-5 py-2  '>
      <HiOutlineUserGroup />
      <a  href="#">Community</a>
      </div>

      <div style={{display: 'flex', justifyContent: 'center', alignItems:'center'}} 
          className=' navlinks m-2 text-[#254936] text-bolder px-7  gap-3  py-2 rounded-3xl bg-white  '>
      <TbUserHexagon className='text-center' />
      <a href="#">Profile</a>
      </div>

      
      <div style={{display: 'flex', justifyContent: 'center',gap:6, alignItems:'center'}}  className=' navlinks m-2 text-[#ffffff] px-5 py-2'>
      <FiSettings />
      <a  href="#">Settings</a>
      </div>
      
    </div>

    <hr className='devider'/>
    <center className='about-greenslate'>
      <p>"GreenSlate" is a platform focused on promoting 
        sustainability and eco-friendly living.offers a starting point 
        for individuals to make positive changes in their lives 
        and be part of a larger movement towards a more sustainable world.
        </p>
        <div className='social-icons'>
          <BiLogoLinkedin className='border border-white  rounded-full text-5xl p-2'/>
          <BiLogoTwitter className='border border-white  rounded-full text-5xl p-2'/>
          <BiLogoFacebook className='border border-white  rounded-full text-5xl p-2'/>
          <BiLogoInstagram className='border border-white  rounded-full text-5xl p-2'/>
        </div>
      </center> 
    </div>
        

    </>
  )
}

export default Header



