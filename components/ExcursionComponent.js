import useIsMobile from "@/hooks/useIsMobile";

import React from "react";
import { useInView } from "react-intersection-observer";
import { Card, CardFooter, Image } from "@nextui-org/react";
import { ModalExcursionComponent } from "./UI/ModalExcursionComponent";

export const ExcursionComponent = ({e}) => {
    const isMobile = useIsMobile();
    const [ref, inView] = useInView({
        threshold:0.7
    });


  return (
    <>
      <div
        style={{
          width: "300px",
          marginBottom: isMobile ? "50px" : 1,
          maxHeight: isMobile ? "auto" : "500px",
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
  );
};
