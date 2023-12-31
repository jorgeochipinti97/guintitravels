import React from "react";
import Lottie from "lottie-react";
import arrowtwo from "../../../animations/arrowtwo";
import { Card } from "@nextui-org/react";
import useIsMobile from "@/hooks/useIsMobile";

const Two = () => {
  const isMobile = useIsMobile();
  return (
    <div
      className="snap-start h-screen w-screen "
      style={{
        backgroundImage:
          `linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.9)), linear-gradient( to bottom, rgba(0,0,0,0.9), transparent 40% ) ,url(${isMobile ? 'sectiontwomobile.png':'https://res.cloudinary.com/db93t8bor/image/upload/v1694333602/pexels-jennifer-marchetti-4307529_is3sju.webp'})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className="flex justify-center pt-12">

          <p style={{textAlign:'center'}} className="text-white text-5xl font-poppins uppercase px-4 py-2">
            <span style={{ color: "#75AADB" }}>The cheap</span>est{" "}
            <span style={{ color: "#FCBF45" }}>country</span> for{" "}
            <span style={{ color: "#75AADB" }}>foreigners.</span>
          </p>

      </div>
      <div className="h-full flex justify-baseline items-center flex-col ">
        <div style={{marginTop:isMobile ? 0 :'24px'}}>
          <p  className="  font-poppins text-center my-3  ">
            Embark on an unforgettable journey from the <span style={{fontWeight:'200'}}>vibrant north</span> to the
             <span style={{fontWeight:'200',marginLeft:4}}>breathtaking south of</span> <span style={{fontWeight:'700'}}>Argentina</span>.
          </p>
        </div>
        <div style={{marginTop:isMobile ? 0 :'24px'}}>
          <p  className="  font-poppins text-center ">
            Experience the diverse <span style={{fontWeight:'200',marginLeft:4}}>landscapes, rich culture, and warm
            hospitality </span>that define this remarkable country.
          </p>
        </div>
        <div style={{marginTop:isMobile ? 0 :'154px'}}>
          <div className="flex justify-center">
            <div className="bg-white my-8 rounded-full">
              <p className="font-poppins  px-4 py-2">
                Explore our highlighted itineraries
              </p>
            </div>
          </div>
          <div className=" w-screen flex justify-center flex-col items-center">
            <div style={{ width: "10%", position: "relative", bottom: isMobile ?0 :70 }}>
              <Lottie animationData={arrowtwo} loop={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Two;
