import Head from "next/head";
import { Suspense, lazy, useEffect, useRef, useState } from "react";

import { Power1, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { Button, Image, Progress } from "@nextui-org/react";

import { FooterComponent } from "@/components/Footer";

import { PaqueteComponent } from "../components/PaqueteComponent";
import { Layout } from "@/components/Layout";
import One from "@/components/Sections/Home/One";
import Two from "@/components/Sections/Home/Two";
import { MerqueeGuinti } from "@/components/MerqueeGuinti";
import { Three } from "@/components/Sections/Home/Three";
import build from "../animations/build.json";
import Lottie from "lottie-react";

export default function Home() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => {
        if (v >= 100) {
          gsap.to(".intro", {
            yPercent: -1000,
            duration: 1,
            ease: Power1.easeIn,
          });
          gsap.to(".intro", {

            delay: 1.2,
display:'none'
          });
          clearInterval(interval);
        } else {
          return v + 10;
        }
      });
    }, 500);
  }, []);

  gsap.registerPlugin(ScrollTrigger);
  const elementoRef = useRef(null);

  const scrollToElement = () => {
    if (elementoRef.current) {
      elementoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout>
      <div className=" sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
        <Image src="/guinti.svg" alt="" />
        <div style={{ width: "100%" }}>
          <Lottie animationData={build} loop={true} />
        </div>
        <p className="text-center font-poppins">
          We are hard at work to bring you an amazing online experience. Please
          bear with us as we make improvements to our website.
          <br /> Stay tuned for exciting updates, and thank you for your
          patience!
        </p>
      </div>

      <div className="hidden md:block">
        <div
        className="intro"
          style={{
            position: "fixed",
            backgroundColor: "white",
            height: "100vh",
            width: "100vw",
            zIndex: 100,
          }}
        >
          <div className="flex justify-center flex-col items-center">
            <Image src="/guinti.svg" alt="logo" />
            <Progress
              size="md"
              value={value}
              color="secondary"
              showValueLabel={true}
              className="max-w-md"
            />
          </div>
        </div>
        <One scrollToElement={scrollToElement} />
        <Two />
        <div ref={elementoRef}>
          <PaqueteComponent
            phraseOne={"Raise your glass in Mendoza! "}
            calltoAction={
              "Reserve your trip and uncover the secrets of Argentina s finest wines. We are waiting for you"
            }
            name={"Mendoza, Argentina "}
            price={640}
            backgroundImage={"backgroundmendoza"}
            excursiones={[
              {
                name: "Wineries and Vineyards",
                image: "bodegascel.png",
                video:
                  "https://www.youtube.com/watch?v=kxzUWQKsrVg&ab_channel=Intriper",
              },
              {
                name: "Uco Valley",
                image: "ucovertical.jpg",
                video:
                  "https://www.youtube.com/watch?v=c136JmQoxog&ab_channel=SirChandler",
              },
              {
                name: "High mountain",
                image: "altamontana.jpg",
                video:
                  "https://www.youtube.com/watch?v=EplA2Qj5AiI&ab_channel=ConociendoLugares",
              },
            ]}
            dias={[
              {
                title: "Arrival in Mendoza",
                body: " Arrival at Mendoza International Airport. Reception and transfer to your chosen hotel (DIPLOMATIC Hotel or AMERIAN Hotel). Free time to rest and acclimatize.",
              },
              {
                title: "Wineries and Vineyards",
                body: " Breakfast at the hotel. Full-day excursion to the famous wineries and vineyards of Mendoza. Lunch included during the excursion. Return to the hotel in the afternoon. Overnight at the hotel.",
              },
              {
                title: "High Mountain",
                body: "Breakfast at the hotel. Full-day excursion to the High Mountain, including visits to stunning sites like Puente del Inca and Aconcagua Provincial Park. Lunch included during the excursion. Return to the hotel in the afternoon. Overnight at the hotel.",
              },
              {
                title: "Uco Valley",
                body: "Breakfast at the hotel. Full-day excursion to the Uco Valley, an emerging and beautiful wine region. Lunch included during the excursion. Return to the hotel in the afternoon. Overnight at the hotel.",
              },
              {
                title: "Free Day and Departure",
                body: "Breakfast at the hotel. Free day to explore Mendoza on your own, enjoy optional activities, or relax. Check-out from the hotel. Transfer to Mendoza International Airport for your return flight.",
              },
            ]}
            hotels={[
              "For DIPLOMATIC Hotel: USD 750 per person.          ",
              "For AMERIAN Hotel: USD 640 per person. ",
            ]}
            itinerary={
              "Round-trip airfare with Aerolíneas Argentinas, including taxes, fees, and checked baggage. 4 nights of accommodation in the chosen hotel with breakfast. Transfers to and from the airport. Excursions to Wineries and Vineyards, High Mountain, and Uco Valley, all with specialized guides. Lunches during the excursions."
            }
          />
        </div>
        <MerqueeGuinti
          backgroundColor={"black"}
          textColor={"white"}
          direction={"left"}
          text={
            "🍷✨ SIP & SAVOR IN MENDOZA 🍇🌄 WINE ADVENTURES AWAIT ✈️🌍 MENDOZA MOMENTS 🍇 WE LOVE MENDOZA"
          }
        />
        <PaqueteComponent
          phraseOne={
            "Ready to experience the adventure of a lifetime in Calafate? "
          }
          calltoAction={
            "Book now and witness the majesty of the Perito Moreno Glacier."
          }
          name={"Calafate, Santa Cruz, Argentina        "}
          price={1265}
          backgroundImage={"backgroundcalafate"}
          dias={[
            {
              title: "Arrival in Calafate",
              body: " Arrival at Calafate International Airport. Reception and transfer to your chosen hotel (IMAGO Hotel or POSADA LOS ÁLAMOS Hotel). Free time to rest and acclimatize.",
            },
            {
              title: " Perito Moreno Glacier Excursion",
              body: " Breakfast at the hotel. Full-day excursion to the Perito Moreno Glacier, one of the world s most famous glaciers. Lunch included during the excursion. Return to the hotel in the afternoon. Overnight at the hotel.",
            },
            {
              title: " Nautical Safari",
              body: " Breakfast at the hotel. Half-day boat excursion on Lake Argentino to explore the glaciers from the water. Return to the hotel in the afternoon. Overnight at the hotel.",
            },
            {
              title: "Minitrekking on the Glacier",
              body: " Breakfast at the hotel. Full-day excursion that includes minitrekking on the glacier (specialized equipment and guide included). Lunch included during the excursion. Return to the hotel in the afternoon. Overnight at the hotel.",
            },
            {
              title: "Free Day and Departure",
              body: " Breakfast at the hotel. Free day to explore Calafate on your own or participate in optional activities. Check-out from the hotel. Transfer to Calafate International Airport for your return flight",
            },
          ]}
          excursiones={[
            {
              name: "Nautical Safari            ",
              image: "nautical.jpg",
              video:
                "https://www.youtube.com/watch?v=XzHIWghdZ1w&ab_channel=HieloyAventura",
            },
            {
              name: "Minitrekking",
              image: "trekkingcalafate.jpg",
              video:
                "https://www.youtube.com/watch?v=4uiPyF2FGn4&ab_channel=HieloyAventura",
            },
            {
              name: "Perito Moreno Glacier           ",
              image: "peritovertical.jpg",
              video:
                "https://www.youtube.com/watch?v=OZzHVxP14Qw&ab_channel=ARecorrerelMundo ",
            },
          ]}
          hotels={[
            "For IMAGO Hotel:  $1,265 USD per person.",
            "For POSADA LOS ÁLAMOS Hotel:  $1,440 USD per person.       ",
          ]}
          itinerary={
            "Round-trip airfare with Aerolíneas Argentinas, including taxes, fees, and checked baggage. 4 nights of accommodation in the chosen hotel with breakfast. Transfers to and from the airport. Excursions to the Perito Moreno Glacier, Nautical Safari, and Minitrekking on the glacier, all with specialized guides. Lunches during the excursions."
          }
        />
        <MerqueeGuinti
          backgroundColor={"black"}
          textColor={"white"}
          direction={"right"}
          text={
            "🏔️❄️ EXPLORE CALAFATE & PERITO MORENO ❄️🏔️ GLACIER ADVENTURES AWAITS! ✈️🌍 CALAFATE EXPLORATIONS ❄️ WE LOVE CALAFATE"
          }
        />
        <PaqueteComponent
          phraseOne={
            "Don t wait any longer to explore the Quebrada de Humahuaca in Salta"
          }
          calltoAction={
            "Reserve your spot now and be part of this unique experience!"
          }
          name={"Salta, Argentina"}
          price={955}
          backgroundImage={"saltabackground"}
          excursiones={[
            {
              name: " Salinas Grandes por Pumamarca        ",
              image: "salinasvertical.jpg",
              video:
                "https://www.youtube.com/watch?v=a5hcesFiVFw&ab_channel=Argentinayelmundo",
            },
            {
              name: "Walking Salta",
              image: "walkingsaltavertical.jpg",
              video:
                "https://www.youtube.com/watch?v=DxXzwe8_2k0&ab_channel=ManuTrip ",
            },
            {
              name: "                  Quebrada de Humahuaca            ",
              image: "quberadavertical.jpg",
              video:
                "https://www.youtube.com/watch?v=dr_00iCJtfo&ab_channel=Irisan ",
            },
          ]}
          video={
            "https://www.youtube.com/watch?v=4uiPyF2FGn4&ab_channel=HieloyAventura"
          }
          dias={[
            {
              title: "Arrival in Salta",
              body: "Arrival at Salta International Airport. Reception and transfer to your chosen hotel (SHERATON Hotel or ALEJANDRO I Hotel). Free time to rest and acclimatize",
            },
            {
              title: "Quebrada de Humahuaca",
              body: "Breakfast at the hotel. Full-day excursion to the Quebrada de Humahuaca, a UNESCO World Heritage site. The excursion will include visits to places like Purmamarca, Tilcara, and Humahuaca. Lunch included during the excursion. Return to the hotel in the afternoon. Overnight at the hotel.",
            },
            {
              title: "Salinas Grandes via Purmamarca",
              body: "Breakfast at the hotel. Full-day excursion to the stunning Salinas Grandes through Purmamarca, known for its famous Cerro de los Siete Colores (Hill of Seven Colors). Lunch included during the excursion. Return to the hotel in the afternoon. Overnight at the hotel.",
            },
            {
              title: "Free Day in Salta",
              body: "Breakfast at the hotel. Free day to explore Salta on your own, enjoy optional activities, or relax. Check-out from the hotel.",
            },
            {
              title: "Departure",
              body: "Breakfast at the hotel. Transfer to Salta International Airport for your return flight.",
            },
          ]}
          hotels={[
            "For SHERATON Hotel: USD 980 per person.",
            "For ALEJANDRO I Hotel: USD 955 per person.",
          ]}
          itinerary={
            "Round-trip airfare with Aerolíneas Argentinas, including taxes, fees, and checked baggage. 4 nights of accommodation in the chosen hotel with breakfast. Transfers to and from the airport. Excursions to Quebrada de Humahuaca and Salinas Grandes, both with specialized guides. Lunches during the excursions."
          }
        />

        <MerqueeGuinti
          backgroundColor={"black"}
          textColor={"white"}
          direction={"left"}
          text={
            "🌵🌄 SALTA ADVENTURES AWAIT 🏞️✨ EXPLORE THE BEAUTY OF SALTA 🌞🍇 SALTA ESCAPADES 🏞️ WE LOVE SALTA"
          }
        />
        <PaqueteComponent
          phraseOne={"Iguazu Falls awaits you"}
          calltoAction={
            "Book your trip today and witness Argentina is most impressive natural wonder!"
          }
          name={"Misiones, Argentina"}
          price={920}
          backgroundImage={"backgroundcataratas"}
          excursiones={[
            {
              name: "                   Cataratas Parque Nacional Iguazu            ",
              image: "cataratasvertical.jpg",
              video:
                "https://www.youtube.com/watch?v=EeB253mLQn4&pp=ygUeY2F0YXJhdGFzIGRlbCBpZ3VhenUgYXJnZW50aW5h ",
            },
            {
              name: "      Devil s Throat Circuit",
              image: "devilsvertical.jpg",
              video:
                "https://www.youtube.com/watch?v=-eDMQ3U_n1M&pp=ygUdY2F0YXJhdGFzIGdhcmdhbnRhIGRlbCBkaWFibG8%3D ",
            },
            {
              name: "                  Cataratas Parque Foz do Iguaçu       ",
              image: "cataratasveriticaldos.jpg",
              video:
                "https://www.youtube.com/watch?v=ZnJRpYd5NAU&pp=ygUYY2F0YXJhdGFzIGZveiBkbyBpZ3Vhw6d1 ",
            },
          ]}
          dias={[
            {
              title: "Arrival in Iguazu",
              body: "Arrival at Iguazu International Airport. Reception and transfer to your chosen hotel (LOI SUITES Hotel or MELIA INTERNACIONAL Hotel). Free time to rest and acclimatize.",
            },
            {
              title: "Iguazu Falls - Argentine Side",
              body: "Breakfast at the hotel. Full-day excursion to the spectacular Iguazu Falls, on the Argentine side. Includes a tour of the trails and walkways offering breathtaking views of the falls. Lunch included during the excursion. Return to the hotel in the afternoon. Overnight at the hotel.",
            },
            {
              title: "Iguazu Falls - Brazilian Side",
              body: "Breakfast at the hotel. Half-day excursion to Iguazu Falls, on the Brazilian side, for a different perspective of this natural wonder. Return to the hotel in the afternoon. Overnight at the hotel.",
            },
            {
              title: "Free Day in Iguazu",
              body: "Breakfast at the hotel. Half-day excursion to Iguazu Falls, on the Brazilian side, for a different perspective of this natural wonder. Return to the hotel in the afternoon. Overnight at the hotel.",
            },
            {
              title: "Departure",
              body: "Breakfast at the hotel. Transfer to Iguazu International Airport for your return flight.",
            },
          ]}
          hotels={[
            "For MELIA INTERNACIONAL Hotel: USD 1035 per person.          ",
            "For LOI SUITES Hotel: USD 920 per person.",
          ]}
          itinerary={
            "Round-trip airfare with Aerolíneas Argentinas, including taxes, fees, and checked baggage. 4 nights of accommodation in the chosen hotel with breakfast. Transfers to and from the airport. Excursions to Iguazu Falls on the Argentine and Brazilian sides, both with specialized guides. Lunches during the excursions."
          }
        />
        <MerqueeGuinti
          backgroundColor={"black"}
          textColor={"white"}
          direction={"right"}
          text={
            "🌿🌊 IGUAZÚ FALLS DISCOVERY 🦋🌎 NATURE WONDER AWAITS 🌞🦜 IGUAZÚ ADVENTURES 🌊 WE LOVE IGUAZÚ"
          }
        />
        <PaqueteComponent
          video={
            "https://www.youtube.com/watch?v=4uiPyF2FGn4&ab_channel=HieloyAventura"
          }
          phraseOne={"Ready for a one-of-a-kind adventure in Ushuaia? "}
          calltoAction={
            "Reserve now and discover the charm of the southernmost city in the world. Your journey starts here!"
          }
          name={"Ushuaia, Argentina"}
          price={980}
          backgroundImage={"backgroundushuaia"}
          excursiones={[
            {
              name: " Parque Nacional Tierra del Fuego",
              image: "travesiavertical.jpg",
              video:
                "https://www.youtube.com/watch?v=xYnK82gPUiY&pp=ygUgcGFycXVlIG5hY2lvbmFsIHRpZXJyYSBkZWwgZnVlZ28%3D ",
            },
            {
              name: "Boardwalk in Ushuaia",
              image: "walkingusu.jpg",
              video:
                "https://www.youtube.com/watch?v=ENweXieaUHE&pp=ygURYm9hcmR3YWxrIHVzaHVhaWE%3D ",
            },
            {
              name: "Navegacion Canal de Beagle",
              image: "farovertical.jpg",
              video:
                "https://www.youtube.com/watch?v=-wh7FqOl634&pp=ygUaTkFWRUdBQ0lPTiBDQU5BTCBERSBCRUFHTEU%3D ",
            },
          ]}
          dias={[
            {
              title: "Arrival in Ushuaia",
              body: "Arrival at Ushuaia International Airport. Reception and transfer to your chosen hotel (ARAKUR Hotel or ALBATROS Hotel). Free time to rest and acclimatize.",
            },
            {
              title: "Tierra del Fuego National Park",
              body: "Breakfast at the hotel. Full-day excursion to Tierra del Fuego National Park, where you can enjoy the natural beauty of the region, hike, and explore the wildlife and flora. Lunch included during the excursion. Return to the hotel in the afternoon. Overnight at the hotel.",
            },
            {
              title: "Beagle Channel Navigation",
              body: "Breakfast at the hotel. Half-day excursion of navigation through the Beagle Channel, where you can see marine wildlife and the iconic Les Eclaireurs Lighthouse and Sea Lions Island. Return to the hotel in the afternoon. Overnight at the hotel.",
            },
            {
              title: "Free Day in Ushuaia",
              body: "Breakfast at the hotel. Free day to explore Ushuaia on your own, enjoy optional activities, or relax. Check-out from the hotel.",
            },
            {
              title: "Departure",
              body: "Breakfast at the hotel. Transfer to Ushuaia International Airport for your return flight..",
            },
          ]}
          hotels={[
            "For ARAKUR Hotel: USD 1,210 per person.",
            "For ALBATROS Hotel: USD 980 per person.",
          ]}
          itinerary={
            "Round-trip airfare with Aerolíneas Argentinas, including taxes, fees, and checked baggage. 4 nights of accommodation in the chosen hotel with breakfast. Transfers to and from the airport. Excursions to Tierra del Fuego National Park and Beagle Channel Navigation, both with specialized guides. Lunches during the excursions."
          }
        />
        <MerqueeGuinti
          backgroundColor={"black"}
          textColor={"white"}
          direction={"left"}
          text={
            "❄️🏔️ USHUAIA, THE END OF THE WORLD 🌍❄️ ADVENTURES IN THE SOUTHERNMOST CITY 🚢🌲 USHUAIA WONDERS 🏞️ WE LOVE USHUAIA 🌨️"
          }
        />

        <Three />
        <FooterComponent />
      </div>
    </Layout>
  );
}
