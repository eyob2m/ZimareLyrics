
import React from "react";
import image from "../assets/images/fishing-8842590_1280.jpg";
import Rihs from "../components/Rihs";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import Bottom from "../components/Bottom";
import Form from "../components/Form";
export default function Home() {
  return (
    <div className="md:px-16 mt-20 md:mt-28  px-5">
      <div>
        <div>
          <h1 className=" text-[#8589F7] text-4xl md:text-7xl">እንኳን ደህና መጡ፣</h1>
          <h2 className=" text-2xl md:text-4xl">
            የኢትዮጲያ ኦርቶዶክስ ተዋህዶ ቤተክርስቲያን መዝሙር ግጥሞች
          </h2>
        </div>
        <div>
          <div className="bg-[#8589F7] rounded-md">
            <h3 className="mt-20 text-white p-3 bg-[#8589F7] md:text-3xl  text-2xl">
              ግጥሞችን በማስገባት ያግዙን
            </h3>
            <h2 className=" bg-white inline-block py-1 rounded-md md:text-2xl px-2 mb-2 mx-3">
              አግዝ
            </h2>
          </div>
        </div>
      </div>

      {<Rihs title="መዘምራን" />}
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
        {<Rihs title="አዳዲስ የተጨመሩ" />}
        <div className="grid grid-cols-1 md:grid-cols-3 md:px-32">
          {
            <>
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
              />
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
              />
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
              />
            </>
          }
        </div>
      </div>
      <div>
        {<Rihs title="አይነት" />}
        <div className=" grid md:grid-cols-3 grid-cols-2 md:p-16 gap-2">
          {
            <>
              <Card image={image} h1="እግዚአብሄር" h2="8 መዝሙሮች" />
              <Card image={image} h1="እግዚአብሄር" h2="8 መዝሙሮች" />
              <Card image={image} h1="እግዚአብሄር" h2="8 መዝሙሮች" />
              <Card image={image} h1="እግዚአብሄር" h2="8 መዝሙሮች" />
              <Card image={image} h1="እግዚአብሄር" h2="8 መዝሙሮች" />
            </>
          }
        </div>
      </div>
      <div></div>
    
     <Form />
    <Bottom />
    </div>
  );
}
