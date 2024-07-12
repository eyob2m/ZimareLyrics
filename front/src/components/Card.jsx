import React from 'react'

export default function Card({image,h1,h2}) {
  return (
    <div  className='hover:shadow-sm hover:shadow-[#8589F7] duration-200 hover:translate-x-1 p-2 mb-3 md:p-4'>
    <img src={image} alt=""/>
    <h1 className='mt-3 md:mt-6 text-2xl md:text-4xl '>{h1}</h1>
    <h2 className=' text-md md:text-xl'>{h2}</h2>
   </div>
  )
}
