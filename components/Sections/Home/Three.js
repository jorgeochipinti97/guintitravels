import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { FormPlanTrip } from "@/components/UI/formPlanTrip";

export const Three = () => {
  const { isOpen, onOpen,onClose } = useDisclosure();

  return (
    <>
      <Modal backdrop={"opaque"} isOpen={isOpen} onClose={onClose}>
        <ModalBody className="flex flex-col justify-center items-start">
          <ModalContent className="px-10 py-2">
            <FormPlanTrip />
          </ModalContent>
        </ModalBody>
      </Modal>
      <div
        className="snap-start h-screen w-screen bg-black flex justify-start items-center flex-col "
        style={{
          height: "100vh",
        }}
      >
        <div>
          <p className="text-4xl px-4 mb-9 mt-9 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-50">
            Discover Argentina with us and turn your travel dreams into reality.
          </p>
        </div>
        <div
          style={{
            backgroundImage: "url('/video.gif')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "19px",
            width: "60%",
            height: "60%",
          }}
        />

        <p className="text-white mt-9 text-xl">
          You have the flexibility to{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-sky-500 text-2xl">
            combine
          </span>{" "}
          any of the previous packages to suit your preferences or{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-sky-500 text-2xl">
            design
          </span>{" "}
          your own customized journey.
        </p>
        <div className="flex w-screen justify-center mt-3">
          <div>
            <Button
              size="lg"
              color="default"
              onPress={onOpen}
              className=" bg-white hover:bg-secondary mx-2 my-3 hover:text-white text-md font-poppins"
            >
              PLAN YOUR TRIP
            </Button>
          </div>
          <div>
            <Button
              size="lg"
              color="default"
              className=" bg-white hover:bg-secondary mx-2 my-3 hover:text-white text-md font-poppins"
            >
              CONTACT US
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
