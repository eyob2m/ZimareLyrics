import React from 'react'
import Rihs from './Rihs'

export default function Form() {
  return (
    <>
    {<Rihs title="ግጥሞችን በማስገባት ያግዙን" />}
    <div>
      <div className="md:mt-32 mt-20 mb-20  md:mb-32 md:justify-center  md:flex md:flex-row">
        <div className="md:flex md:flex-col">
          <input
            className="mb-3 w-full md:w-[20vw] p-2 md:p-4 duration-200 border-4 border-[#D9D9D9] rounded-md rounded-r-none focus:outline-none focus:border-[#8589F7] hover:border-[#8589F7] mr-2"
            type="text"
            placeholder="የርስዎ ስም . . ."
          />
          <input
            className="mb-3 w-full md:w-[20vw] p-2 md:p-4 duration-200 border-4 border-[#D9D9D9] rounded-md rounded-r-none focus:outline-none focus:border-[#8589F7] hover:border-[#8589F7] mr-2"
            type="text"
            placeholder="የመዝሙር ረእስ . . ."
          />
          <input
            className="mb-3 w-full md:w-[20vw] p-2 md:p-4 duration-200 border-4 border-[#D9D9D9] rounded-md rounded-r-none focus:outline-none focus:border-[#8589F7] hover:border-[#8589F7] mr-2"
            type="text"
            placeholder="የዘማሪው ስም . . ."
          />
        </div>
        <div className="p-3 md:flex md:flex-col rounded-md bg-[#8589F7]">
          <textarea
            className="mb-3 h-32 bg-[#8589F7]   w-full md:w-[20vw] p-2 md:p-4 duration-200 border-4 border-[#D9D9D9] rounded-md rounded-r-none focus:outline-none focus:border-white  hover:border-white text-white placeholder:text-white mr-2"
            type="text"
            placeholder="ግጥም . . ."
          />

          <h2 className=" bg-white w-fit  py-1 rounded-md md:text-2xl px-2 mb-2 mx-3">
            አስገባ
          </h2>
        </div>
      </div>
    </div></>
  )
}
