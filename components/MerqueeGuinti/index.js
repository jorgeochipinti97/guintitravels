import { Divider } from "@nextui-org/react";
import React from "react";
import Marquee from "react-fast-marquee";

export const MerqueeGuinti = ({backgroundColor,textColor,direction ,text}) => {
  const repeatedDivs = new Array(32)
    .fill(null)
    .map((_, index) => (
      <p className={`font-poppins text-2xl  mx-2 text-${textColor}`} key={index}>
       {text}
      </p>
    ));
  return (
    <>
      <div className=" bg-black ">

        <div className={`w-screen bg-${backgroundColor} py-2 `}>
          <Marquee
            direction={direction}
            style={{ overflow: "hidden" }}
            loop={0}
            speed={50}
          >
            {repeatedDivs}
          </Marquee>
        </div>

      </div>
    </>
  );
};
