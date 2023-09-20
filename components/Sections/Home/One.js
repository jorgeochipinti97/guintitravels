import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import arrow from "../../../animations/arrow";
import Lottie from "lottie-react";
import {
  Accordion,
  AccordionItem,
  Button,
  ButtonGroup,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  Navbar,
  useDisclosure,
} from "@nextui-org/react";
import { AboutArgentina } from "@/components/UI/AboutArgentina";
import useIsMobile from "@/hooks/useIsMobile";

const One = ({ scrollToElement }) => {
  const isMobile = useIsMobile();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalOpen, setModalOpen] = useState();

  useEffect(() => {
    modalOpen == "about" && onOpen();
    modalOpen == "argentina" && onOpen();
  }, [modalOpen]);

  const onModalClose = () => {
    setModalOpen("");
    onClose();
  };
  return (
    <>
      <Modal backdrop={"opaque"} isOpen={isOpen}>
        <ModalBody className="flex flex-col justify-center items-start ">
          {modalOpen == "about" && (
            <>
              <ModalContent>
                <AboutArgentina onModalClose={onModalClose} />
              </ModalContent>
            </>
          )}
          {modalOpen == "argentina" && (
            <>
              <ModalContent>
                <Image src="/argentina.jpg" width={"100%"} />
                <Accordion>
                  <AccordionItem key="1" title="Location">
                    <p className="text-xs text-justify">
                      The Argentine Republic, one of the longest countries
                      worldwide -3,800 km long – and the eighth largest country,
                      with an area of 3.8 million km, is located at the Southern
                      end of the Southern Hemisphere, between the Andes
                      mountains and the Atlantic Ocean, specifically from
                      parallel 22nd to 55th South, and is bordered by five
                      countries.
                    </p>
                  </AccordionItem>
                  <AccordionItem key="2" title="Geography and Climate">
                    <p className="text-xs text-justify">
                      Argentina s pleasant climate turns it into a destination
                      to be visited, enjoyed and explored all year round.
                      Located in the Southern Hemisphere, it has four clearly
                      defined seasons and each has its own charm and typical
                      colors. Summer is the ideal time of the year to visit the
                      beaches on the Atlantic Ocean, the lakes and mountains in
                      the Patagonia, the vineyards in the harvest season or the
                      glaciers. Winter is the perfect time to go North, which
                      offers colorful and stunning landscapes, and to enjoy snow
                      and mountain sports in the Andes region. Spring and fall
                      invite travelers to visit Buenos Aires, which offers its
                      jacaranda, linden and other flowering trees, or to travel
                      to must-see destinations such as the Iguazú Falls, the
                      Esteros del Iberá or the mountains in the center region of
                      our country.
                    </p>
                  </AccordionItem>
                  <AccordionItem key="3" title="Seasons in Argentina">
                    <p className="text-xs text-justify">
                      {" "}
                      <span style={{ fontWeight: "700" }}>Summer:</span> from
                      December 21st to March 20th
                    </p>
                    <br />
                    <p className="text-xs text-justify">
                      {" "}
                      <span style={{ fontWeight: "700" }}>Fall:</span> from
                      March 21st to June 20th
                    </p>
                    <br />
                    <p className="text-xs text-justify">
                      {" "}
                      <span style={{ fontWeight: "700" }}>Winter:</span> from
                      June 21st to September 20th
                    </p>
                    <br />
                    <p className="text-xs text-justify">
                      {" "}
                      <span style={{ fontWeight: "700" }}>Spring:</span> from
                      September 21st to December 20th
                    </p>
                  </AccordionItem>
                </Accordion>
                <Button onPress={onModalClose} className="font-poppins">
                  Close
                </Button>
              </ModalContent>
            </>
          )}
        </ModalBody>
      </Modal>
      <div
        className=" snap-start h-screen w-screen bg-white flex justify-center items-center flex-col "
        id="video"
        style={{
          backgroundImage: `linear-gradient(
            to bottom,
transparent 70%,
rgba(0,0,0,0.9)
          ),url(${isMobile ? "backgroundmobileone.png" : "/background.jpg"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            justifySelf: "start",
            position: "relative",
            bottom: isMobile ? 15 : 70,
          }}
        >
          <Image
            src="/guinti.svg"
            alt=""
            width={300}
            loading="eager"
            style={{ position: "relative", bottom: 50 }}
          />

          <ButtonGroup
            className="m-5"
            style={{ display: isMobile ? "none" : "auto" }}
          >
            <Button
              color="default"
              className=" bg-white hover:bg-secondary  hover:text-white text-xs"
              onPress={scrollToElement}
            >
              Packages
            </Button>
            <Button
              color="default"
              onPress={() => setModalOpen("about")}
              className=" bg-white hover:bg-secondary hover:text-white  text-xs"
            >
              About Us
            </Button>
            <Button
              color="default"
              onPress={() => setModalOpen("argentina")}
              className=" bg-white hover:bg-secondary hover:text-white text-xs"
            >
              About Argentina
            </Button>
          </ButtonGroup>
        </div>
        <div className="mt-20 xs:mt-10 w-screen">
          <Marquee
            direction="right"
            style={{ overflow: "hidden" }}
            loop={0}
            speed={50}
          >
            <p className="font-poppins text-5xl  mx-2 text-white">
              EXPLORE ARGENTINA{" "}
            </p>
            <p className="font-poppins text-5xl  mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl  mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl  mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl  mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2  text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl  mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl  mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2  text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2  text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2  text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2  text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2  text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2  text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
          </Marquee>
        </div>
        <div className="w-screen">
          <Marquee style={{ overflow: "hidden" }} speed={90}>
            <p className="font-poppins text-5xl   mx-2 text-white">
              FROM NORTH TO SOUTH
            </p>
            <p className="font-poppins text-5xl  mx-2  text-white">
              FROM NORTH TO SOUTH
            </p>
            <p className="font-poppins text-5xl  mx-2  text-white">
              FROM NORTH TO SOUTH
            </p>
            <p className="font-poppins text-5xl  mx-2  text-white">
              FROM NORTH TO SOUTH
            </p>
            <p className="font-poppins text-5xl  mx-2  text-white">
              FROM NORTH TO SOUTH
            </p>
            <p className="font-poppins text-5xl  mx-2  text-white">
              FROM NORTH TO SOUTH
            </p>
            <p className="font-poppins text-5xl  mx-2  text-white">
              FROM NORTH TO SOUTH
            </p>
            <p className="font-poppins text-5xl   mx-2 text-white">
              FROM NORTH TO SOUTH
            </p>
            <p className="font-poppins text-5xl  mx-2  text-white">
              FROM NORTH TO SOUTH
            </p>
            <p className="font-poppins text-5xl  mx-2  text-white">
              FROM NORTH TO SOUTH
            </p>
            <p className="font-poppins text-5xl  mx-2  text-white">
              FROM NORTH TO SOUTH
            </p>
            <p className="font-poppins text-5xl  mx-2  text-white">
              FROM NORTH TO SOUTH
            </p>
          </Marquee>
        </div>
        <div className="w-screen">
          <Marquee
            direction="right"
            style={{ overflow: "hidden" }}
            loop={0}
            speed={100}
          >
            <p className="font-poppins text-5xl  mx-2 text-white">
              EXPLORE ARGENTINA{" "}
            </p>
            <p className="font-poppins text-5xl  mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl  mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl  mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl  mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2  text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl  mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl  mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2  text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2  text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2  text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2  text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2  text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2  text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
            <p className="font-poppins text-5xl mx-2 text-white">
              EXPLORE ARGENTINA
            </p>
          </Marquee>
        </div>
        <div
          style={{ marginTop: isMobile ? "2rem" : "7rem" }}
          className=" w-screen flex justify-center flex-col items-center"
        >
          <p className="text-white text-xl font-light">Welcome to Argentina</p>
          <p className="text-white text-xs font-light">Travel Packages 2023</p>
          <div style={{ width: isMobile ? "20%" : "5%" }}>
            <Lottie animationData={arrow} loop={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default One;
