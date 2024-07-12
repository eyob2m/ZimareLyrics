import React from 'react'
import { AiOutlineArrowUp } from "react-icons/ai"; 
import { AiOutlineLinkedin } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { RiTelegramLine } from "react-icons/ri";
import { CgMail } from "react-icons/cg";
export default function Bottom() {
  return (
    <div>
    <div className="relative w-full flex flex-row justify-center p-2 gap-5 bg-[#8589F7]">
      <h1 className=" text-white bg-transparent">ያግኙን</h1>
      <div className="flex flex-row gap-3 items-center bg-transparent">
     
        <CgMail className="w-7 h-7 bg-transparent text-white" />
        <RiTelegramLine className="w-7 h-7 bg-transparent text-white" />
        <CiFacebook  className="w-7 h-7 bg-transparent text-white"/>
        <AiOutlineLinkedin className="w-7 h-7 bg-transparent text-white" />
      </div>
      <a href="#top"><div  className="absolute right-2 md:right-6 md:-top-2 -top-1 p-1 rounded-lg ">
      <AiOutlineArrowUp  className="text-[#8589F7] md:h-5 md:w-5" />
    </div></a>
    </div>
   
  </div>
  )
}
