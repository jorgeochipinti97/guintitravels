import { Button, Image } from '@nextui-org/react'
import React from 'react'

export const AboutUs = ({onModalClose}) => {
  return (
<>
<Image src="/amigos.png" width={"100%"} alt='imagen de argentina'/>
                <p className="text-justify mx-4 mt-5 text-sm font-poppins">
                  We are a group of young entrepreneurs who, with our combined
                  <span style={{ fontWeight: "700" }}>

                    experience and passion{" "}
                  </span>
                  <span style={{ color: "#7F44F8" }}> for travel</span>,
                  embarked on our own journey in the world of tourism. It was
                  during this journey that we decided to merge our expertise and
                  create Guinti Travel a travel agency entirely focused on
                  crafting exceptional travel experiences.
                </p>
                <p className="text-justify mx-4 mt-5 text-sm font-poppins">
                  We understand that every remarkable journey is a{" "}
                  <span style={{ fontWeight: "700" }}> unique opportunity</span>
                  , and that each traveler is an individual with their own
                  dreams and preferences. That is why we are dedicated to
                  designing tailor-made adventures, offering expert guidance,
                  and providing personalized service.
                </p>
                <p className="text-justify mx-4 mt-5 text-sm font-poppins">
                  And why do we specialize in{" "}
                  <span style={{ fontWeight: "700" }}>Argentina</span>?{" "}
                </p>
                <p className="text-justify mx-4 mt-5 text-sm font-poppins mb-5">
                  Because we believe that{" "}
                  <span style={{ color: "#7F44F8" }}>
                    specialization adds immense value
                  </span>
                  , and we are passionate about sharing the beauty and{" "}
                  <span style={{ fontWeight: "700" }}>
                    wonders of our country
                  </span>
                  with fellow{" "}
                  <span style={{ color: "#7F44F8" }}>travelers</span>.
                </p>
                <Button onPress={onModalClose} className="font-poppins">
                  Close
                </Button>
</>
  )
}
