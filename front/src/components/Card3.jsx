import React from 'react'

export default function Card3({owner,title,date,}) {
  return (
    <div className="p-2 mb-2 md:mb-3 md:p-4 md:ml-4 rounded-md border-white border-2 hover:border-[#8589F7] duration-200">
    <h1 className="mt-3 md:mt-6 text-xl md:text-4xl ">{title}</h1>
    <hr />
    <div className=" flex flex-row  justify-between">
      
      <h3 className="text-xs text-gray-600"> {owner && `በ ${owner}`}</h3>{" "}
      <h4 className="text-xs text-gray-600">{date}</h4>
    </div>
  </div>
  )
}
