import { AiOutlineSearch } from "react-icons/ai"; 
// NavBar.js
import React from 'react';
import SearchSvg from '../assets/svg/search-5-svgrepo-com.svg';

export default function NavBar() {
  return (
    <div className="w-full bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-11 md:px-28">
        <h1 className="text-2xl font-bold text-green-950">
          Zimare <span className="text-[#8589F7]">Tube</span>
        </h1>
        <div className="flex mt-4 md:mt-0">
          <input
            className="w-full md:w-[20vw] p-2 md:p-4 duration-200 border-4 border-[#D9D9D9] rounded-md rounded-r-none focus:outline-none focus:border-[#8589F7] hover:border-[#8589F7] mr-2"
            type="text"
            placeholder="Search . . ."
          />
          <div className="border-4 p-1 duration-200 border-[#D9D9D9] flex items-center justify-center rounded-md rounded-l-none hover:border-[#8589F7]">
           <AiOutlineSearch className="w-10 h-10 text-[#D9D9D9]" />
          </div>
        </div>
        <ul className="flex flex-row gap-4 md:gap-20 mt-4 md:mt-0">
          <li className="hover:bg-[#8589F7] text-[#8589F7] duration-300 hover:text-white cursor-pointer bg-[#D9D9D9] p-2 rounded-md font-bold text-xl">Home</li>
          <li className="bg-[#D9D9D9] p-2 hover:bg-[#8589F7] text-[#8589F7] hover:text-white duration-300 cursor-pointer rounded-md font-bold text-xl">Add Lyrics</li>
        </ul>
      </div>
    </div>
  );
}
