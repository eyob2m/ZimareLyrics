import React from 'react'
import Rihs from '../components/Rihs'
import Card3 from '../components/Card3'
import Card from '../components/Card'
import Form from '../components/Form'
import Bottom from '../components/Bottom'
import image from "../assets/images/fishing-8842590_1280.jpg";
import Card2 from '../components/Card2'

export default function Type() {
  return (
    <div className='md:px-16 md:mt-72 mt-24 md:mt-28  px-5'>


    <div>
    <div className='bg-[#8589F7] py-7 relative'>
       <div className='px-10  bg-transparent'>
        <div className='flex bg-transparent items-end md:items-center flex-col'>
         <div className='rounded-lg'> <img className=' rounded-lg rounded-b-none absolute md:h-60 h-32 left-0 bottom-0' src={image} alt=""/></div>
          <h1 className='bg-transparent text-xl md:text-5xl text-white'>እግዚአብሄር</h1>
          <h2 className='bg-transparent md:text-2xl text-sm'>8 መዝሙሮች</h2>
        </div>
       
       </div>
      </div>
      <hr />
      <div className="mt-4  grid md:grid-cols-3 grid-cols-2 md:p-16 gap-2">
     
      <Card2
                title="ያዳነኝን አውቀዋoለው"
                zemari="ዘማሪ አቤል መክበብ"
                owner="እዮብ"
                date="Thu 2014 2:44"
              />
               <Card2
                title="ያዳነኝን አውቀዋoለው"
                zemari="ዘማሪ አቤል መክበብ"
                owner="እዮብ"
                date="Thu 2014 2:44"
              /> <Card2
                title="ያዳነኝን አውቀዋoለው"
                zemari="ዘማሪ አቤል መክበብ"
                owner="እዮብ"
                date="Thu 2014 2:44"
              /> <Card2
                title="ያዳነኝን አውቀዋoለው"
                zemari="ዘማሪ አቤል መክበብ"
                owner="እዮብ"
                date="Thu 2014 2:44"
              />
     
      </div>
    </div>
  
  
      
      <Rihs title="ሌሎች አይነቶች" />
      <div className="  grid md:grid-cols-3 grid-cols-2 md:p-16 gap-2">
          {
            <>
              <Card image={image} h1="ማርያም" h2="8 መዝሙሮች" />
              <Card image={image} h1="ቅዱስ ሚካኤል" h2="8 መዝሙሮች" />
              <Card image={image} h1="ቅዱስ ገብሬል" h2="8 መዝሙሮች" />
              <Card image={image} h1="ሰማህት" h2="8 መዝሙሮች" />
              <Card image={image} h1="ቅዱሳን" h2="8 መዝሙሮች" />
            </>
          }
        </div>
      <div>
      <Form />
      <Bottom /> </div>
     </div>
  )
}
