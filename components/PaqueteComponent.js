import { Card, CardFooter, Image } from "@nextui-org/react";
import { ButtonGroupComponent } from "./UI/ButtonGroupComponent";
import { ModalExcursionComponent } from "./UI/ModalExcursionComponent";
import ReactPlayer from "react-player/youtube";
import { MerqueeGuinti } from "./MerqueeGuinti";
import Marquee from "react-fast-marquee";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import gsap, { Power1 } from "gsap";

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
  const [ref, inView] = useInView({
    threshold: 0.7,
  });
  const refOpacity = useRef();

  useEffect(() => {
    inView &&
      gsap.to(`.${backgroundImage}`, {
        backgroundImage: `linear-gradient(to bottom, transparent 40%, black),linear-gradient(to bottom,rgba(0,0,0,0.8),rgba(0, 0, 0, 0.1)), url('/${backgroundImage}.jpg')`,
        // ease: Power1.easeIn,
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
        style={{
          backgroundImage: ` url('/${backgroundImage}.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
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
              style={{ fontWeight: "800", color: "#f5f5f7 ", opacity: 0 }}
              className={`font-poppins text-5xl uppercase mt-2`}
              ref={refOpacity}
            >
              {name}
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
        <div className="w-screen flex justify-around items-center flex-wrap ">
          {excursiones.map((e) => (
            <>
              <div
                style={{
                  width: "300px",
                  margin: 1,
                  maxHeight: "500px",
                  borderRadius: "30px",
                }}
                ref={ref}
                className={inView ? `shadowCard excursion` : ""}
              >
                <Card
                  isFooterBlurred
                  radius="lg"
                  className="border-none"
                  style={{ width: "300px" }}
                >
                  <Image
                    isZoomed
                    loading="lazy"
                    alt="excursion"
                    className="object-cover"
                    src={`/${e.image}`}
                  />
                  <CardFooter className="justify-between bg-black/50 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p className="font-poppins text-white font-regular text-center">
                      {e.name}
                    </p>
                    <div className="my-2 flex justify-center mx-2">
                      <ModalExcursionComponent name={e.name} video={e.video} />
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </>
          ))}
        </div>

        <div className="flex justify-center w-screen mt-16">
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
                className={"font-poppins  text-xl"}
                style={{ fontWeight: "400" }}
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
      </div>
    </>
  );
};
