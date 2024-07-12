import React from 'react'
import Form from '../components/Form'
import Bottom from '../components/Bottom'
import Rihs from '../components/Rihs'
import Card2 from '../components/Card2'

export default function ViewLyrics() {
  return (
    <div className='md:px-16 md:mt-2 mt-10 md:mt-28  px-5'>


    <div>
      <div className='bg-[#8589F7] p-2 px-3'>
        <div className='bg-transparent w-full flex flex-col items-center'>
         <div className='bg-transparent'>
         <h1 className='bg-transparent text-white md:text-5xl text-3xl'>የዓለምን በደል</h1>
          <h2 className='bg-transparent md:text-3xl text-xl'>ቴዎድሮስ ዮሴፍ    </h2>
         
         </div> <p  className='mt-4 md:w-72 md:text-xl w-52 bg-transparent text-center text-lg'>የዓለም በደል የሰውን ግፍ አይቶ ዘጠና ዘጠኙን መላዕክት ትቶ ጽድቅን ለመፈፀም በደልን አጥፍቶ የሰላሙ መሪ የሰላሙ ዳኛ አምላክ ተወለደ ተጠመቀ ለእኛ የሰማያት ሰማይ የማይችለው ንጉስ ተወለደ ተጠመቀ እኛን ለመቀደስ ተራሮች ደንግጠው ዘለሉ እንደ ፈረስ የሰላሙ መሪ የሰላሙ ዳኛ አምላክ ተወለደ ተጠመቀ ለእኛ ባህር ተጨነቀች ጠበባት መሬቱ ዮርዳኖስም ሸሸ አልቆመም ከፊቱ እንደ ተናገረ ዳዊት በትንቢቱ የሰላሙ መሪ የሰላሙ ዳኛ አምላክ ተወለደ ተጠመቀ ለእኛ ልጁ በዮርዳኖስ ጽድቅን</p>
       
         <div className=" bg-transparent mt-4 w-[100%] flex  gap-3 justify-end">
      
      <h3 className="text-xs bg-transparent text-gray-300"> በ እዮብ</h3>
      <h4 className="text-xs bg-transparent text-gray-300">thu 20 9</h4>
    </div> </div>
      </div>
    </div>


    
    <Rihs title="ተዛማች መዝሙሮች" />
    <div className="grid grid-cols-1 md:grid-cols-3 md:px-32">
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
    <div>
    <Form />
    <Bottom /> </div>
   </div>
  )
}
