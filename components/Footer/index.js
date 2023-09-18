import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  useDisclosure,
  ModalBody,
  Input,
  Button,
} from "@nextui-org/react";

import { Card, Divider, Image, Link } from "@nextui-org/react";
import Marquee from "react-fast-marquee";
import { MerqueeGuinti } from "../MerqueeGuinti";
import { ModalFooter } from "../UI/ModalFooter";

export const FooterComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
const [sectionOpen, setSectionOpen] = useState('')
  const handleOpen = (value) => {
    setSectionOpen(value)
    onOpen();
  };

  const repeatedDivs = new Array(5).fill(null).map((_, index) => (
    <Card isBlurred className="mx-2" key={index}>
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={250}
        src={`/viajes${index + 1}.jpg`}
        width={250}
      />
    </Card>
  ));
  return (
    <>
      <Modal backdrop={"opaque"} isOpen={isOpen} onClose={onClose}>
        <ModalBody className="flex flex-col justify-center items-start">
          <ModalContent className="px-10 py-2">
            <ModalFooter typeOfModal={sectionOpen} onModalClose={onClose}/>
          </ModalContent>
        </ModalBody>
      </Modal>

      <div className=" bg-black snap-start">
        <Marquee
          direction="right"
          style={{ overflow: "hidden" }}
          loop={0}
          speed={20}
        >
          {repeatedDivs}
        </Marquee>
        <MerqueeGuinti
          backgroundColor={"black"}
          textColor={"white"}
          direction={"left"}
          text={"🌍✈️ FOLLOW US ON @GUINTITRAVEL 🌴📸 · #GUINTITRAVEL ✈️🌍·"}
        />
      </div>
      <div
        style={{
          background:
            "linear-gradient(192deg, #540CEC 44.2%, rgba(12, 196, 236, 0.90) 100%)",
          height: "75vh",
        }}
        className="flex justify-around pt-2 items-center flex-col"
      >
        <div className="my-2">
          <Image src="/guintiwhite.png" width={200} alt="" />
        </div>
        <Card
          style={{
            background:
              "linear-gradient(16deg, #540CEC 44.2%, rgba(12, 196, 236, 0.90) 100%)",
            border: "2px solid #FFF",

            width: "50%",
            height: "30%",
            borderRadius: "20px",
          }}
        >
          <div
            className="flex justify-around items-start  "
            style={{ height: "100%" }}
          >
            <div className="flex items-start justify-center flex-col ">
              <div className="flex justify-center items-center">
                <svg
                  className="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                >
                  <ellipse
                    cx="7.5"
                    cy="8"
                    rx="6.5"
                    ry="7"
                    fill="#7F44F8"
                    stroke="white"
                  />
                </svg>
                <p className="text-white text-xl font-poppins my-2"> KNOW US</p>
              </div>
              <Divider
                className="mb-3"
                style={{
                  paddingTop: 3,
                  borderRadius: "9px",
                  backgroundColor: "#f5f5f7",
                }}
              />
              <div>
                <Link
                  className="text-slate-200 cursor-pointer"
                  onPress={()=>handleOpen('faqs')}
                >
                  FAQS
                </Link>
              </div>
              <div>
                <Link
                  className="text-slate-200 cursor-pointer"
                  onPress={()=>handleOpen('about')}
                >
                  About Argentina
                </Link>
              </div>
              <div>
                <Link
                  className="text-slate-200 cursor-pointer"
                  onPress={()=>handleOpen('form')}
                >
                  Plan your trip!
                </Link>
              </div>
            </div>

            <div className="flex items-start justify-center flex-col  ">
              <div className="flex justify-start items-center">
                <svg
                  className="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                >
                  <ellipse
                    cx="7.5"
                    cy="8"
                    rx="6.5"
                    ry="7"
                    fill="#7F44F8"
                    stroke="white"
                  />
                </svg>
                <p className="text-white text-xl font-poppins my-2 ">
                  {" "}
                  CONTACT US
                </p>
              </div>
              <Divider
                className="mb-2"
                style={{
                  paddingTop: 3,
                  borderRadius: "9px",
                  backgroundColor: "#f5f5f7",
                }}
              />
              <div className="mt-1">
                <Link
                  showAnchorIcon
                  className="text-slate-200 cursor-pointer"
                  anchorIcon={
                    <svg
                      className="ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M17 2.91006C16.0832 1.98399 14.9912 1.24973 13.7876 0.750111C12.5841 0.250494 11.2931 -0.00448012 9.99 5.95696e-05C4.53 5.95696e-05 0.0800002 4.45006 0.0800002 9.91006C0.0800002 11.6601 0.54 13.3601 1.4 14.8601L0 20.0001L5.25 18.6201C6.7 19.4101 8.33 19.8301 9.99 19.8301C15.45 19.8301 19.9 15.3801 19.9 9.92006C19.9 7.27006 18.87 4.78006 17 2.91006ZM9.99 18.1501C8.51 18.1501 7.06 17.7501 5.79 17.0001L5.49 16.8201L2.37 17.6401L3.2 14.6001L3 14.2901C2.17775 12.977 1.74114 11.4593 1.74 9.91006C1.74 5.37006 5.44 1.67006 9.98 1.67006C12.18 1.67006 14.25 2.53006 15.8 4.09006C16.5675 4.85402 17.1757 5.76272 17.5894 6.76348C18.0031 7.76425 18.214 8.83717 18.21 9.92006C18.23 14.4601 14.53 18.1501 9.99 18.1501ZM14.51 11.9901C14.26 11.8701 13.04 11.2701 12.82 11.1801C12.59 11.1001 12.43 11.0601 12.26 11.3001C12.09 11.5501 11.62 12.1101 11.48 12.2701C11.34 12.4401 11.19 12.4601 10.94 12.3301C10.69 12.2101 9.89 11.9401 8.95 11.1001C8.21 10.4401 7.72 9.63006 7.57 9.38006C7.43 9.13006 7.55 9.00006 7.68 8.87006C7.79 8.76006 7.93 8.58006 8.05 8.44006C8.17 8.30006 8.22 8.19006 8.3 8.03006C8.38 7.86006 8.34 7.72006 8.28 7.60006C8.22 7.48006 7.72 6.26006 7.52 5.76006C7.32 5.28006 7.11 5.34006 6.96 5.33006H6.48C6.31 5.33006 6.05 5.39006 5.82 5.64006C5.6 5.89006 4.96 6.49006 4.96 7.71006C4.96 8.93006 5.85 10.1101 5.97 10.2701C6.09 10.4401 7.72 12.9401 10.2 14.0101C10.79 14.2701 11.25 14.4201 11.61 14.5301C12.2 14.7201 12.74 14.6901 13.17 14.6301C13.65 14.5601 14.64 14.0301 14.84 13.4501C15.05 12.8701 15.05 12.3801 14.98 12.2701C14.91 12.1601 14.76 12.1101 14.51 11.9901Z"
                        fill="white"
                      />
                    </svg>
                  }
                >
                  Whatsapp
                </Link>
              </div>
              <div className="mt-1">
                <Link
                  showAnchorIcon
                  className="text-slate-200 cursor-pointer"
                  anchorIcon={
                    <svg
                      className="ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                        fill="white"
                      />
                    </svg>
                  }
                >
                  Instagram
                </Link>
              </div>
              <div className="mt-1">
                <Link
                  className="text-slate-200 cursor-pointer"
                  anchorIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M16.6002 5.82C15.9166 5.03962 15.5399 4.03743 15.5402 3H12.4502V15.4C12.4263 16.071 12.143 16.7066 11.6599 17.1729C11.1768 17.6393 10.5316 17.8999 9.86016 17.9C8.44016 17.9 7.26016 16.74 7.26016 15.3C7.26016 13.58 8.92016 12.29 10.6302 12.82V9.66C7.18016 9.2 4.16016 11.88 4.16016 15.3C4.16016 18.63 6.92016 21 9.85016 21C12.9902 21 15.5402 18.45 15.5402 15.3V9.01C16.7932 9.90985 18.2975 10.3926 19.8402 10.39V7.3C19.8402 7.3 17.9602 7.39 16.6002 5.82Z"
                        fill="white"
                      />
                    </svg>
                  }
                  showAnchorIcon
                >
                  TikTok
                </Link>
              </div>
              <div className="my-1">
                <Link
                  className="text-slate-200 cursor-pointer"
                  anchorIcon={
                    <svg 
                    className="ml-1"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_233_15)">
                      <path d="M22 7.535V17C22 17.7652 21.7077 18.5015 21.1827 19.0583C20.6578 19.615 19.9399 19.9501 19.176 19.995L19 20H5C4.23479 20 3.49849 19.7077 2.94174 19.1827C2.38499 18.6578 2.04989 17.9399 2.005 17.176L2 17V7.535L11.445 13.832L11.561 13.898C11.6977 13.9648 11.8478 13.9995 12 13.9995C12.1522 13.9995 12.3023 13.9648 12.439 13.898L12.555 13.832L22 7.535Z" fill="white"/>
                      <path d="M18.9998 4C20.0798 4 21.0268 4.57 21.5548 5.427L11.9998 11.797L2.44482 5.427C2.69555 5.01977 3.04004 4.6784 3.44953 4.43138C3.85903 4.18436 4.32166 4.03886 4.79882 4.007L4.99982 4H18.9998Z" fill="white"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_233_15">
                        <rect width="24" height="24" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                  }
                  showAnchorIcon
                >
guintitravel@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </Card>
        <div className="flex flex-col items-center my-5 w-screen">
          <div style={{width:'500px'}}>
            <Input
              key={"secondary"}
              type="email"
              size="lg"
              color={"secondary"}
              label="Suscribe to the Newsletter"
              placeholder="Enter your email"
            />
          </div>
          <div className="mt-2">
            <Button color="secondary">Send</Button>
          </div>
        </div>

        <div
          className="flex justify-around"
          style={{
            background:
              "linear-gradient(93deg, #5746E4 3.06%, #7844F4 106.58%)",
            display: "flex",
            border: "2px solid #FFF",
            borderRadius: "100px",
            padding: 20,
          }}
        >
          <p className="font-poppins text-white" style={{ fontSize: "18px" }}>
            ALL RIGHTS RESERVED © 2023
          </p>
          <Divider
            className="mx-2"
            style={{ backgroundColor: "white" }}
            orientation="vertical"
          />
          <p
            className="font-poppins text-white px-2"
            style={{ fontSize: "18px" }}
          >
            GUINTI LLC{" "}
          </p>
          <Divider
            className="mx-2"
            style={{ backgroundColor: "white" }}
            orientation="vertical"
          />
          <p
            className="font-poppins text-white px-2 cursor-pointer"
            style={{ fontSize: "18px" }}
            onClick={()=>handleOpen('privacy')}
          >
            PRIVACY POLICY
          </p>

          <p
            className="font-poppins text-white px-2 cursor-pointer"
            style={{ fontSize: "18px" }}
            onClick={()=>handleOpen('terms')}
          >
            TERMS AND CONDITIONS
          </p>
        </div>
      </div>
    </>
  );
};
