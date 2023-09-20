import { ButtonGroupComponent } from "./UI/ButtonGroupComponent";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import gsap, { Power1 } from "gsap";
import useIsMobile from "@/hooks/useIsMobile";
import { ExcursionComponent } from "./ExcursionComponent";

export const PaqueteComponent = ({
  name,
  price,
  excursiones,
  backgroundImage,
  dias,
  itinerary,
  hotels,
  phraseOne,
  calltoAction,
}) => {
  const isMobile = useIsMobile();
  const [ref, inView] = useInView();
  const refOpacity = useRef();

  useEffect(() => {
    inView &&
      gsap.to(`.${backgroundImage}`, {
        backgroundImage: `linear-gradient(to bottom, transparent 40%, black),linear-gradient(to bottom,rgba(0,0,0,0.8),rgba(0, 0, 0, 0.1)), url('/${backgroundImage}.jpg')`,
        ease: Power1.easeIn,
        duration: 0.5,
      });
    inView &&
      gsap.to(refOpacity.current, {
        opacity: 1,
        ease: Power1.easeIn,
      });
  }, [inView]);
  const palabras = name.split(" ");
  const primeraPalabra = palabras[0].toLowerCase();
  return (
    <>
      <div
        className={backgroundImage}
        ref={ref}
        style={{
          backgroundImage: ` url('/${backgroundImage}.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // height: isMobile ? "auto" : "100vh",
          scrollSnapAlign: "start",
          width: "100vw",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="flex justify-center items-center px-2 pt-4  pb-4">
            <p
              style={{
                fontWeight: "800",
                color: "#f5f5f7 ",
                opacity: 0,
                fontSize: isMobile ? "30px" : "40px",
                textAlign: "center",
              }}
              className={`font-poppins  uppercase mt-2`}
              ref={refOpacity}
            >
              {name}
              <br style={{ display: isMobile ? "block" : "none" }} />
              <span className="mx-2" style={{ fontWeight: "100" }}>
                From
              </span>
              <span style={{ color: "#bef264", fontWeight: "700" }}>
                ${price} USD
              </span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 pb-2"></div>
        <div className="w-screen flex justify-around items-around flex-wrap ">
          {excursiones.map((e) => (
            <>
              <ExcursionComponent e={e} />
            </>
          ))}
        </div>

        <div className="flex justify-center w-screen md:mt-16">
          <div
            style={{
              justifySelf: "center",
            }}
          >
            <div
              id="shadowCard"
              className="flex justify-center items-center"
              style={{ color: "#f5f5f7", textAlign: "center" }}
            >
              <p
                className={"font-poppins"}
                style={{
                  fontWeight: "400",
                  fontSize: isMobile ? "12px" : "20px",
                }}
              >
                {phraseOne}

                <br />
                {calltoAction}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-2 ">
          <ButtonGroupComponent
            price={price}
            dias={dias}
            itinerary={itinerary}
            hotels={hotels}
          />
        </div>
        <div className="flex justify-center ">
          <div className="flex justify-center bg-white rounded-full p-2" style={{width:isMobile? '98vw':'50vw',marginTop:'30px', }}>
            <img src="/stripe.webp" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
