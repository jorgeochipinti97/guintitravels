import React from "react";
import { Button, ButtonGroup } from "@nextui-org/react";

import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import useIsMobile from "@/hooks/useIsMobile";
export const ButtonGroupComponent = ({ price, dias, itinerary, hotels }) => {
  const { isOpen, onOpen, onClose,onOpenChange } = useDisclosure();
const isMobile = useIsMobile()
  const handleOpen = () => {
    onOpen();
  };

  return (
    <>
      <ButtonGroup style={{width:'90%'}}>
        <Button
          color="default"
          onPress={() => handleOpen()}
          className=" bg-secondary hover:bg-white hover:text-black text-3xl text-white"
        >
          MORE INFO
        </Button>

        <Button
          color="default"
          className=" bg-white hover:bg-secondary hover:text-white text-3xl text-black"
        >
          BOOK NOW
        </Button>
      </ButtonGroup>
      <Modal backdrop={"opaque"} isOpen={isOpen} onClose={onClose}   scrollBehavior="outside" style={{height:'content-fit'}}
>
        <ModalContent style={{paddingTop:'20px', height:'content-fit',padding:'15px'}}> 
          {() => (
            <>

                <div className="font-bold font-poppins">
                  ITINERARY: {name.toUpperCase()}
                </div>
                {dias.map((e, index) => (
                  <div className="flex flex-col" key={index}>
                    <p>
                      Day {`${index + 1}`}: {e.title}
                    </p>
                    <p className="text-xs font-poppins">{e.body}</p>
                  </div>
                ))}
                <div className="flex flex-col font-poppins">
                  <p>This itinerary includes:</p>
                  <p className="text-xs">{itinerary}</p>
                  <p className="text-md  font-semibold mt-2 font-poppins">
                    Total rate per person based on double room
                  </p>
                  {hotels.map((e, index) => (
                    <p
                      key={index}
                      className="text-md font-semibold font-poppins"
                    >
                      {e}
                    </p>
                  ))}
                </div>

            </>
          )}
        </ModalContent> 
      </Modal>
    </>
  );
};
