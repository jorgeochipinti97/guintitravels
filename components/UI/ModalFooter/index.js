import { Accordion, AccordionItem, Button, Image, ModalContent } from "@nextui-org/react";
import { AboutUs } from "../AboutArgentina";
import { FormPlanTrip } from "../formPlanTrip";

export const ModalFooter = ({ typeOfModal, onModalClose }) => {
  return (
    <>
      {typeOfModal == "faqs" && (
        <>
          <Accordion isCompact>
            <AccordionItem
              key="1"
              aria-label="VISA: DO I NEED A VISA TO ENTER ARGENTINA?"
              title="VISA: DO I NEED A VISA TO ENTER ARGENTINA?"
              className="font-poppins text-xs "
            >
              If you are coming from Western Europe, South America or North
              America, you probably will not need a visa to enter the country
              for tourist purposes. In any case, check the immigration official
              website where you will find the visa policy worldwide to know your
              country s specific case.
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="SECURITY:WHAT DO I NEED TO KNOW?"
              title="SECURITY:WHAT DO I NEED TO KNOW?"
              className="font-poppins text-xs "
            >
              According to the Global Peace Index 2020, Argentina is one of the
              safest countries in Latin America. However, as in any other part
              of the world, it is important to be cautious when travelling. In
              case of an emergency, you can call 911 from all over Argentina. We
              also recommend you to book these phone numbers: ● 101 - Police ●
              100 – Fire Brigade ● 107 – Medical Emergencies
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="MONEY: WHAT IS ARGENTINA S CURRENCY?"
              title="MONEY: WHAT IS ARGENTINA S CURRENCY?"
              className="font-poppins text-xs "
            >
              The Argentine peso is the currency unit for the country. You can
              exchange money at the airport or at official bureaux de change.
              Credit cards are also accepted in most places of business
              throughout the country. And the best thing about it? Amazing
              landscapes, unique gastronomy, strategic accommodations with the
              best services, safe and accessible transport, and a favourable
              exchange rate. Here is a fact: a bus, underground or train ticket
              costs only 30 cents, a good quality wine in the supermarket costs
              3 dollars, and eating the freshest crab on earth costs only 10
              dollars.
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="WHAT LANGUAGE DO THEY SPEAK IN ARGENTINA?"
              title="WHAT LANGUAGE DO THEY SPEAK IN ARGENTINA?"
              className="font-poppins text-xs "
            >
              You probably think Spanish is the correct answer. Well, in fact
              the answer is correct, but here we also speak Rioplatense Spanish,
              a dialect that spread along the Rio de la Plata Basin, and whose
              most particular characteristics are the voseo and the famous
              Argentine cantito (vocalisation). Here we do not speak of tú
              (you), but of vos. The intonation is unique and very famous, it
              must be said. This is surely one of the first differences you will
              notice when you arrive, compared to other countries in Latin
              America and Spain.
            </AccordionItem>
            <AccordionItem
              key="5"
              aria-label="HOW MANY DAYS DO I NEED TO SEE IN THE COUNTRY?"
              title="HOW MANY DAYS DO I NEED TO SEE IN THE COUNTRY?"
              className="font-poppins text-xs "
            >
              Argentina has incredible natural and scenic wonders that make
              travellers from all over the world fall in love with the country.
              The truth is that the time you need will depend on your priorities
              and the places you want to visit.
            </AccordionItem>
            <AccordionItem
              key="6"
              aria-label="WHAT IS THE WEATHER LIKE, AND WHAT SHOULD I PACK?"
              title="WHAT IS THE WEATHER LIKE, AND WHAT SHOULD I PACK?"
              className="font-poppins text-xs "
            >
              Argentina is famous around the world for its varied geography and
              climatic diversity. Visitors will be surprised every minute by
              each one of its landscapes. The weather is usually mild, but there
              are places where, depending on the season, it is drier and colder.
              Is there a type of climate for each type of traveller? Yes,
              because of the length of the country and its north-south
              distribution, the territory covers all temperatures.
              <br />
              SEASONS OF THE YEAR
              <br />
              Summer (21 December to 20 March).
              <br />
              Autumn (21 March to 20 June).
              <br />
              Winter (21 June to 20 September).
              <br />
              Spring (21 September to 20 December).
            </AccordionItem>

            <AccordionItem
              key="8"
              title="WHEN IS THE BEST TIME OF YEAR TO TRAVEL?              "
              className="font-poppins text-xs "
            >
              There is a suitable destination in Argentina to welcome tourists
              at every time of the year.
            </AccordionItem>
            <AccordionItem
              key="7"
              title="WHAT IS THE BEST WAY TO TRAVEL BETWEEN CITIES?              "
              className="font-poppins text-xs "
            >
              The country is ready to welcome tourists from all over the world.
              Those who prefer air transport will be glad to know that all
              provinces have their own airport. And if the road trip is a must
              on your itinerary, there are plenty of land routes to enjoy the
              incredible natural scenery. The Ruta 40, 5200 km long, is the main
              witness of the diversity of landscapes that Argentina has to
              offer, since it crosses the country from north to south. There are
              also long-distance trains, such as the famous Tren a las Nubes
              (Train to the Clouds) or the Tren Patagónico (Patagonian Train).
              One thing is for sure: there are no obstacles to discovering the
              national must-sees.
            </AccordionItem>
            <AccordionItem
              key="9"
              title="HOW DOES THE SUBE CARD WORK, AND WHERE CAN I BUY IT?              "
              className="font-poppins text-xs "
            >
              The SUBE card is a payment method for all modes of public
              transport (buses, subways, trains and subways) in the Metropolitan
              Area of Buenos Aires and many urban areas of the country (yes,
              very similar to the Oyster card!). What is interesting is that, in
              addition to its convenience, it offers automatic discounts when
              transport combinations are made. So, the first trip is paid in
              full, the second one 50% less and from the third one onward, 75%
              less. The SUBE can be purchased at underground and train stations,
              kiosks and betting shops. You can top up your card at these same
              places. It is easy to buy and easy to use.
            </AccordionItem>
          </Accordion>
        </>
      )}
      {typeOfModal == "about" && (
        <>
          <AboutUs onModalClose={onModalClose} />
        </>
      )}

      {typeOfModal == "argentina" && (
        <>
          <ModalContent>
            <Image src="/argentina.jpg" width={"100%"} />
            <Accordion>
              <AccordionItem key="1" title="Location">
                <p className="text-xs text-justify">
                  The Argentine Republic, one of the longest countries worldwide
                  -3,800 km long – and the eighth largest country, with an area
                  of 3.8 million km, is located at the Southern end of the
                  Southern Hemisphere, between the Andes mountains and the
                  Atlantic Ocean, specifically from parallel 22nd to 55th South,
                  and is bordered by five countries.
                </p>
              </AccordionItem>
              <AccordionItem key="2" title="Geography and Climate">
                <p className="text-xs text-justify">
                  Argentina s pleasant climate turns it into a destination to be
                  visited, enjoyed and explored all year round. Located in the
                  Southern Hemisphere, it has four clearly defined seasons and
                  each has its own charm and typical colors. Summer is the ideal
                  time of the year to visit the beaches on the Atlantic Ocean,
                  the lakes and mountains in the Patagonia, the vineyards in the
                  harvest season or the glaciers. Winter is the perfect time to
                  go North, which offers colorful and stunning landscapes, and
                  to enjoy snow and mountain sports in the Andes region. Spring
                  and fall invite travelers to visit Buenos Aires, which offers
                  its jacaranda, linden and other flowering trees, or to travel
                  to must-see destinations such as the Iguazú Falls, the Esteros
                  del Iberá or the mountains in the center region of our
                  country.
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
                  <span style={{ fontWeight: "700" }}>Fall:</span> from March
                  21st to June 20th
                </p>
                <br />
                <p className="text-xs text-justify">
                  {" "}
                  <span style={{ fontWeight: "700" }}>Winter:</span> from June
                  21st to September 20th
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
      {typeOfModal == "terms" && (
        <>
          <div>
            <p className="text-2xl text-center">
              Terms and Conditions for Guinti Travel
            </p>
            <p className="text-xs mt-2">
              Access to and/or use of www.guinti.com requires all visitors and
              users to adhere to the terms and conditions, accepting them from
              the moment of entry, fully and without reservation. Furthermore,
              in the event that these terms and conditions may be modified,
              supplemented, or replaced in any way in relation to the services
              and contents of the Site in the future, it is clarified that by
              the mere act of entering and using the Site, the user immediately
              adheres to each and every one of the following terms and
              conditions. Therefore, the user should carefully read the terms
              and conditions before accessing and/or using any portal service,
              under their sole responsibility.
            </p>
            <div className="my-5">
              <Accordion isCompact>
                <AccordionItem
                  key="1"
                  title="SCOPE"
                  className="font-poppins text-xs "
                >
                  These terms and conditions apply to the digital assets listed
                  below: www.guinti.com
                </AccordionItem>
                <AccordionItem
                  key="2"
                  title="LINKS TO OTHER SITES, PRODUCTS, AND SERVICES                  "
                  className="font-poppins text-xs "
                >
                  Digital assets may contain links to other sites, products, and
                  services. The National Government does not manage or control
                  those sites, products, and services, and is not responsible
                  for their content or any damage and harm that such content,
                  products, and services may cause. Therefore, it is recommended
                  to read the terms and conditions of each of them.
                </AccordionItem>
                <AccordionItem
                  key="3"
                  title="RESPONSIBILITY FOR CONTENT                  "
                  className="font-poppins text-xs "
                >
                  The Site cannot assume responsibility for information created
                  by third parties or obtained from links to other sites or
                  servers. Nor can it provide any guarantee regarding accuracy,
                  completeness, or reliability. In no case can the organization
                  be held liable for any direct or indirect damage,
                  consequential, or incidental, resulting from the use or
                  outcome of information extracted from its server or through
                  links to other servers.
                </AccordionItem>
                <AccordionItem
                  key="4"
                  title="ACCURACY OF INFORMATION                  "
                  className="font-poppins text-xs "
                >
                  The Site contains information that has been prepared by its
                  respective team with the utmost accuracy and efforts are made
                  to keep it up to date. However, if you find information that
                  you consider inaccurate, we would appreciate it if you could
                  inform us so that we can rectify the issue immediately.
                </AccordionItem>
                <AccordionItem
                  key="5"
                  title="PRIVACY OF INFORMATION                  "
                  className="font-poppins text-xs "
                >
                  Users of the Site can access all the information contained on
                  this site without being asked for any personal information. In
                  cases where users are required to voluntarily provide personal
                  information through contact forms or other means, it will only
                  be used for the registration process and to offer new services
                  to the user. Furthermore, all user information will only be
                  used for personal communications and will not be disclosed to
                  third parties without prior, freely given, informed consent,
                  in addition to exercising all the rights established by Law
                  No. 25,326. The use of cookies is related solely to technical
                  issues related to producing statistical information about the
                  type of browser used by users, their operating systems,
                  internet service providers, the sections of the Site visited,
                  and remembering user preferences, etc. Cookies can never read
                  information from your hard drive or files created by other
                  sites. All data is managed in accordance with established
                  standards, stored in automated files, and processed under
                  strict security and confidentiality rules.
                </AccordionItem>
                <AccordionItem
                  key="6"
                  title="INTELLECTUAL PROPERTY RIGHTS                  "
                  className="font-poppins text-xs "
                >
                  Under no circumstances can users alter or modify the format of
                  files, pages, images, information, materials, or any content
                  on the site. Special attention should be paid to photographs,
                  as the site often uses images that have been exclusively
                  provided by their authors for use on the site. Therefore, the
                  institution does not have permission to transfer them, which
                  is why inquiries should be made in all cases before using
                  them.
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </>
      )}
      {typeOfModal == "privacy" && (
        <>
          <div>
            <p className="text-2xl text-center">
              Privacy Policy for Guinti Travel
            </p>
            <div>
              <p className="mt-2 text-xs">
                {" "}
                This Privacy Policy sets out the terms of use and protection of
                information provided by our users when using the Guinti Travel
                website. At Guinti Travel, we are committed to the security of
                our users data. When requested to complete certain fields of
                personal information that can identify you, rest assured that it
                will only be used in accordance with the terms of this document.
                However, this Privacy Policy may change over time or be updated,
                so we recommend that our users continually review this web page
                to ensure they agree with any modifications.
              </p>
            </div>
            <div>
              <p className="mt-2 text-md"> Information Collected</p>
            </div>
            <div>
              <p className="mt-2 text-xs">
                {" "}
                At Guinti Travel, we may collect personal information, such as
                your name, contact details like your email address, and in some
                cases, additional demographic information if necessary
              </p>
            </div>
            <div>
              <p className="mt-2 text-md">Use of the Collected Information</p>
            </div>
            <div>
              <p className="mt-2 text-xs">
                {" "}
                We use the information collected on our website to provide the
                best possible service. This includes maintaining a record of
                users, managing orders when necessary, and continuously
                improving our products and services. Occasionally, we may send
                emails with special offers, new products, or other advertising
                information that we consider relevant and beneficial to our
                users. These emails will be sent to the address you provide and
                can be unsubscribed at any time. Our commitment is to keep your
                information secure by using advanced and updated systems to
                ensure there is no unauthorized access.
              </p>
            </div>
          </div>
        </>
      )}
      {typeOfModal == "form" && (
        <>
          <FormPlanTrip />
        </>
      )}
    </>
  );
};
