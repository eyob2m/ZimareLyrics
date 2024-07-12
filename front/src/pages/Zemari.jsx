import React from 'react'
import image from "../assets/images/fishing-8842590_1280.jpg";

import Rihs from '../components/Rihs'

import Form from '../components/Form'
import Bottom from '../components/Bottom'
import Card from '../components/Card';
import Card3 from '../components/Card3';

export default function Zemari() {
  return (
    <div className='md:px-16 md:mt-72 mt-24 md:mt-28  px-5'>


  <div>
  <div className='bg-[#8589F7] py-7 relative'>
     <div className='px-10  bg-transparent'>
      <div className='flex bg-transparent items-end md:items-center flex-col'>
       <div className='rounded-lg'> <img className=' rounded-lg rounded-b-none absolute md:h-60 h-32 left-0 bottom-0' src={image} alt=""/></div>
        <h1 className='bg-transparent text-xl md:text-5xl text-white'>ዘማሪ ቲዎድሮስ</h1>
        <h2 className='bg-transparent md:text-2xl text-sm'>8 መዝሙሮች</h2>
      </div>
     
     </div>
    </div>
    <hr />
    <div className="mt-4  grid md:grid-cols-3 grid-cols-2 md:p-16 gap-2">
   
    <Card3 owner="እዮብ" title="አይተወኝም" date="Thu 34 2020"/>
    <Card3 owner="እዮብ" title="አይተወኝም" date="Thu 34 2020"/>
    <Card3 owner="እዮብ" title="አይተወኝም" date="Thu 34 2020"/>
    <Card3 owner="እዮብ" title="አይተወኝም" date="Thu 34 2020"/>
    <Card3 owner="እዮብ" title="አይተወኝም" date="Thu 34 2020"/>
    <Card3 owner="እዮብ" title="አይተወኝም" date="Thu 34 2020"/>
    <Card3 owner="እዮብ" title="አይተወኝም" date="Thu 34 2020"/>
   
    </div>
  </div>


    
    <Rihs title="ሌሎች ዘማሪያን" />
    <div className="  grid md:grid-cols-3 grid-cols-2 md:p-16 gap-2">
        {
          <>
            <Card image={image} h1="ቴዎድሮስ ዮሴፍ" h2="8 መዝሙሮች" />
            <Card image={image} h1="ቴዎድሮስ ዮሴፍ" h2="8 መዝሙሮች" />
            <Card image={image} h1="ቴዎድሮስ ዮሴፍ" h2="8 መዝሙሮች" />
            <Card image={image} h1="ቴዎድሮስ ዮሴፍ" h2="8 መዝሙሮች" />
            <Card image={image} h1="ቴዎድሮስ ዮሴፍ" h2="8 መዝሙሮች" />
          </>
        }
      </div>
    <div>
    <Form />
    <Bottom /> </div>
   </div>
  )
}
