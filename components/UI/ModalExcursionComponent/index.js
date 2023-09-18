import { Button, ModalBody, ModalHeader } from "@nextui-org/react";

import { Modal, ModalContent, useDisclosure } from "@nextui-org/react";
import ReactPlayer from "react-player";
export const ModalExcursionComponent = ({ name, video }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };
  return (
    <>
      <Modal backdrop={"opaque"} isOpen={isOpen} onClose={onClose}>
        <ModalBody className="flex flex-col justify-center items-start">
          <ModalContent className="px-10 py-2">
            {" "}
            <p
              className="text-xl font-poppins my-4"
              style={{ fontWeight: 700 }}
            >
              {name}
            </p>
            <div className="flex justify-center">
              <ReactPlayer
                url={video}
                height={200}
                playsinline
                style={{ borderRadius: "90px" }}
                width={400}
              />
            </div>
            {name.toLowerCase() == "minitrekking" && (
              <>
                <p className="font-poppins text-justify text-sm mt-2">
                  The excursion begins at the{" "}
                  <span style={{ fontStyle: "italic" }}>
                    Bajo de las Sombras
                  </span>{" "}
                  port, where you board to cross Lake Rico, enjoying
                  breathtaking views of the front wall of Perito Moreno Glacier,
                  Los Glaciares National Park.
                  <br /> After disembarking, you will access the refuge where
                  the guides organize the groups. A walk along the lakeshore of
                  approximately 20 minutes to the glacier then begins. Upon
                  reaching the edge of the ice, the guides fit crampons onto the
                  participants, who receive instructions on how to move on the
                  ice. During the journey on the glacier, you will have the
                  opportunity to appreciate a variety of ice formations such as
                  crevasses, seracs, sinkholes, small lagoons, and more.
                  <br /> The walk is moderate. The ice surface you will walk on
                  is uneven but firm and safe. Upon concluding the walk, you
                  will return to the refuge by passing through the Magellanic
                  forest.
                </p>
              </>
            )}
            {name.toLowerCase().includes("perito") && (
              <>
                <p className="font-poppins text-justify text-xs mt-2">
                  During the visit, you will have the opportunity to admire the
                  majesty of this imposing glacier, walk along its walkways, and
                  listen to the sound of ice breaking off into the water. It is
                  a natural spectacle that you cannot afford to miss when
                  visiting the region. <br />
                  The distance from El Calafate to the Perito Moreno Glacier is
                  approximately 80 kilometers.
                  <br />
                  Accompanied by a guide authorized by{" "}
                  <span style={{ fontStyle: "italic" }}>
                    Los Glaciares
                  </span>{" "}
                  National Park, as we depart from the city, you can observe
                  Lake Argentino with its Round Bay. Here, you can appreciate a
                  significant variety of birdlife, with black-necked swans,
                  flamingos, and steam ducks standing out. In the first 40
                  kilometers, we traverse the Patagonian steppe, where the
                  landscape is dominated by the yellow hues of Coiron grass.
                  <br />
                  Upon passing the entrance to the National Park, we enter the
                  Andean-Patagonian Forest, where you'll observe species such as
                  ñires, guindos, and lengas, among others. Once at the glacier,
                  you'll behold the majesty that captivates visitors' eyes.
                  After recovering from the amazement, we will begin the walk on
                  walkways and balconies to enjoy different views of the glacier
                  s front.
                  <br />
                  Optional:{" "}
                  <span style={{ fontStyle: "italic" }}>
                    Moreno Spirit
                  </span> or{" "}
                  <span style={{ fontStyle: "italic" }}>Nautical Safari</span>.
                  These excursions complement the terrestrial excursion to the
                  Perito Moreno Glacier and consist of an approximate 1-hour
                  navigation.
                  <br />
                  On-site services: The Perito Moreno Glacier area offers a
                  restaurant, a snack bar, and restrooms.
                </p>
              </>
            )}
            {name.toLowerCase().includes("nautical") && (
              <>
                <p className="font-poppins text-justify text-sm mt-2">
                  1-Hour Navigation along the South Wall of Perito Moreno
                  Glacier.
                  <br />
                  The excursion begins at the "Bajo de las Sombras" port,
                  located on Route 11, Km 70.9, an hour and a half from El
                  Calafate and only 7km from the glacier. Passengers should make
                  their way to the port, where they will embark to sail on Lake
                  Rico. Here, you'll have the opportunity to appreciate the
                  impressive ice wall of the Perito Moreno Glacier and the
                  icebergs that originate from it.
                  <br />
                  This navigation lasts for one hour and offers the possibility
                  to observe, from our comfortable vessels and with a completely
                  different perspective, the stunning walls of the Perito Moreno
                  Glacier and its continuous and thunderous collapses into the
                  waters of Lake Rico.
                  <br />
                  At 400 meters from the south wall of the Perito Moreno
                  Glacier, the boat stops for a few minutes to allow for a
                  closer and more detailed observation of the landscape. It
                  doesn't get any closer to the breaking wall than this!
                  <br />
                  The Nautical Safari is suitable for all ages and can be
                  enjoyed 365 days a year.
                </p>
              </>
            )}
            {name.toLowerCase().includes("high") && (
              <>
                <p className="font-poppins text-justify text-xs mt-2">
                  Enjoy the Impressive and Majestic Andes Mountain Range. Along
                  the way, you will encounter wonderful places like:
                  <br />
                  <span style={{ fontWeight: "700" }}>Potrerillos:</span> It is
                  a locality situated in the Andes Mountain Range. Here, you can
                  admire the landscape of Potrerillos Reservoir, which covers
                  approximately 1500 hectares with a length of 7 km and a
                  maximum width of nearly 1.5 km.
                  <br />
                  <span style={{ fontWeight: "700" }}>
                    Uspallata Valley:
                  </span>{" "}
                  This area divides the foothills from the high mountains and is
                  nestled in the stunning Cordón del Plata, located between 1900
                  and 2500 meters above sea level.
                  <br />
                  <span style={{ fontWeight: "700" }}>Penitentes:</span> It is a
                  locality and ski resort with extensive infrastructure in
                  Mendoza, located just 4 km from Cerro Aconcagua, the highest
                  peak in the Americas (6960 meters above sea level).
                  <br />
                  <span style={{ fontWeight: "700" }}>Puente del Inca:</span> It
                  is a protected natural area declared a UNESCO World Heritage
                  Site. Its rock formation creates a natural bridge over the Las
                  Cuevas River. Its geological, scenic, and historical value
                  allows for the appreciation of its significant cultural
                  identity.
                  <br />
                  <span style={{ fontWeight: "700" }}>
                    {" "}
                    Cerro Aconcagua Viewpoint:
                  </span>{" "}
                  This is the highest mountain in America, reaching 6960 meters
                  above sea level.
                  <br />
                  <span style={{ fontWeight: "700" }}>Las Cuevas:</span> It is
                  the highest locality in Mendoza at 3557 meters above sea
                  level. It is a border area adjacent to Chile and provides
                  access to the Cristo Redentor monument during the summer
                  season.
                </p>
              </>
            )}
            {name.toLowerCase().includes("uco") && (
              <>
                <p className="font-poppins text-justify text-sm mt-2">
                  Discover the Best Views of the Andes Mountain Range and behold
                  the mountain chain of Cordón del Plata, composed of peaks such
                  as Volcano, El Tupungato, and El Plata.
                  <br />
                  Next, visit a winery in the Uco Valley to explore it from
                  within and savor the finest wines produced at altitudes
                  exceeding 1200 meters above sea level.
                  <br />
                  <span style={{ fontWeight: "700" }}>Includes:</span>
                  <br />
                  - Bilingual guide
                  <br />
                  - Transfers from hotels in the downtown area of Mendoza
                  <br />
                  - Visit to Cristo Rey (monument with a panoramic view of the
                  Uco Valley)
                  <br />
                  - Journey through Arroyo de los Puntanos, formed by meltwater
                  <br />- Visit to Manzano Histórico, the place where General
                  San Martín left his mark during the struggle for liberation.
                </p>
              </>
            )}
            {name.toLowerCase().includes("wineries") && (
              <>
                <p className="font-poppins text-justify text-sm mt-2">
                  Embark on an exciting wine adventure in the beautiful region
                  of Mendoza. Our tours will take you to explore the
                  world-renowned wineries and vineyards of this land of wine
                  tradition. Guided by wine experts, you'll immerse yourself in
                  wine culture, learn about the production process, and savor
                  some of Argentina's most exquisite wines.
                  <br />
                  Stroll through the vineyards, marvel at the mountain
                  landscapes surrounding the estates, and uncover the secrets of
                  the malbec grape, which finds its finest expression in these
                  lands. From historic, renowned wineries to exclusive boutique
                  ones, our tour will take you through a world of flavors and
                  aromas.
                  <br />
                  Don t miss the chance to delight your palate with premium wine
                  tastings and delightful local cuisine pairings. Each winery
                  has its own story to tell and unique wines to offer.
                </p>
              </>
            )}
            {name.toLowerCase().includes("quebrada") && (
              <>
                <p className="font-poppins text-justify text-sm mt-2">
                  A journey through the Quebrada, declared a{" "}
                  <span style={{ fontWeight: "600" }}>
                    UNESCO World Heritage Site
                  </span>
                  , where the landscape and the colors of the hills blend with
                  the equally colorful cultures that inhabit this region. It's a
                  journey of social connection and a glimpse into the ancestral.
                  It begins with arrival in the little village of Purmamarca to
                  observe the Hill of Seven Colors. Passing through the Posta de
                  Hornillos, continuing on to the town of Tilcara. Continuing
                  towards Huacalera, crossing the Tropic of Capricorn, from
                  where you can see the colors of the hill called "La Pollera de
                  la Colla." Visit to the Church of Uquía, where the paintings
                  of the Archangel Warriors are found (an important vestige in
                  the Cuzco school of art). Arrival in Humahuaca with its
                  significant Cathedral and the Monument to Independence (El
                  Indio) by sculptor Soto Avendaño. Return after lunch to
                  observe from the road the "Painter's Palette" that frames the
                  town of Maimara. Arrival in San Salvador de Jujuy. Return to
                  Salta.
                </p>
              </>
            )}
            {name.toLowerCase().includes("salinas") && (
              <>
                <p className="font-poppins text-justify text-sm mt-2">
                  Departure from Salta in the morning to arrive in the early
                  hours at the town of Purmamarca, with its Seven Colors Hill,
                  the Church, and the Craft Market in the square. After
                  exploring the town, you ascend through the Cuesta de Lipán to
                  reach the impressive Salinas Grandes, one of the most visited
                  destinations in the Puna de Jujuy region. It's an incredible
                  place where the white landscape blends with the intense blue
                  sky, and you can observe the process of table salt extraction.
                  Return to Salta along the same route.
                </p>
              </>
            )}
            {name.toLowerCase().includes("walking") && (
              <>
                <p className="font-poppins text-justify text-sm mt-2">
                  A circuit through the downtown area of the city that will
                  adapt to the tastes and interests of each passenger. You will
                  visit the 9 de Julio Square and the historical buildings
                  surrounding it: the Cathedral Church, Day Palace, Cabildo, and
                  San Francisco Church will be appreciated in the finest detail,
                  as well as the peculiarities of the life and daily movements
                  of the people of Salta. The Abasto Market is an interesting
                  point for culinary art enthusiasts, and the High Mountain
                  Archaeology Museum (MAAM) is for those interested in
                  archaeology. It does not include entrance fees or transfers.
                  Pick-up from hotels located in the downtown area.
                </p>
              </>
            )}
            {name
              .toLowerCase()
              .includes("cataratas parque nacional iguazu") && (
              <>
                <p className="font-poppins text-justify text-xs mt-2">
                  Daily departures starting at 07:30 AM. Return at 4:00 PM.
                  Approximate timings, subject to modification based on the
                  location of the hotel.
                  <br />
                  <br />
                  <span style={{ fontWeight: "700" }} className="text-xs">
                    Devil s Throat Circuit
                  </span>
                  <br />
                  Indescribable for its beauty and energy that moves everyone,
                  it offers an impressive blend of sounds and landscapes. A
                  must-see.
                  <br />
                  Difficulty: No stairs.
                  <br />
                  <span style={{ fontWeight: "700" }}>Upper Circuit</span>
                  <br />
                  Access to magnificent panoramic views of the waterfalls and
                  the Iguazu River Delta formed by a set of lush islands.
                  <br />
                  Difficulty: No stairs.
                  <br />
                  <span style={{ fontWeight: "700" }}>Lower Circuit</span>
                  <br />A set of strategically designed walkways that provide
                  diverse views of the Falls and an intimate encounter with the
                  waterfalls and charming corners of the jungle.
                  <br />
                  High Difficulty: With stairs.
                </p>
              </>
            )}
            {name.toLowerCase().includes("devil") && (
              <>
                <p className="font-poppins text-justify text-xs mt-2">
                  Daily departures starting at 07:30 AM. Return at 4:00 PM.
                  Approximate timings, subject to modification based on the
                  location of the hotel.
                  <br />
                  <span style={{ fontWeight: "700" }}>
                    Devil s Throat Circuit
                  </span>{" "}
                  <br />
                  Indescribable for its beauty and energy that moves everyone,
                  it offers an impressive blend of sounds and landscapes. A
                  must-see.
                  <br />
                  Difficulty: No stairs.
                  <br />
                  <span style={{ fontWeight: "700" }}>Upper Circuit</span>
                  <br />
                  Access to magnificent panoramic views of the waterfalls and
                  the Iguazu River Delta formed by a set of lush islands.
                  <br />
                  Difficulty: No stairs.
                  <br />
                  <span style={{ fontWeight: "700" }}>Lower Circuit</span>
                  <br />A set of strategically designed walkways that provide
                  diverse views of the Falls and an intimate encounter with the
                  waterfalls and charming corners of the jungle.
                  <br />
                  High Difficulty: With stairs.
                </p>
              </>
            )}
            {name.toLowerCase().includes("iguaçu") && (
              <>
                <p className="font-poppins text-justify text-md mt-2">
                  Prepare to be spellbound by the sheer magnificence of Brazil's
                  Foz do Iguaçu National Park, home to the mesmerizing Iguazu
                  Falls. Feel the earth tremble beneath your feet as you stand
                  at the edge of this thunderous natural wonder, surrounded by
                  lush rainforest. Get ready for an exhilarating adventure that
                  will leave you breathless and in awe. Join us and let the
                  magic of the Brazilian side of the Iguazu Falls take your
                  breath away.
                </p>
              </>
            )}
            {name.toLowerCase().includes("devil") && (
              <>
                <p className="font-poppins text-justify text-xs mt-2">
                  Experience the breathtaking power of nature at its most
                  awe-inspiring with our guided tours to the Devil's Throat, the
                  heart-pounding centerpiece of the majestic Iguazu Falls. Get
                  ready to be mesmerized as you stand on the edge of this
                  thundering abyss, feeling the mist on your face and the
                  adrenaline in your veins. Join us on an adventure of a
                  lifetime and let the Devil's Throat steal your heart
                </p>
              </>
            )}
            {name.toLowerCase().includes("tierra del fuego") && (
              <>
                <p className="font-poppins text-justify text-sm mt-2">
                  Get ready to embark on an unforgettable journey through the
                  picturesque trails of Ushuaia, the gateway to adventure in
                  Tierra del Fuego. Immerse yourself in the untamed beauty of
                  the southernmost city in the world as you explore its
                  breathtaking landscapes, from rugged peaks to serene
                  lakeshores. Whether you're a seasoned hiker or a first-time
                  explorer, our guided tours will ignite your spirit and leave
                  you with memories to cherish forever. Join us and discover the
                  wild heart of Ushuaia, the capital of adventure in Argentina's
                  Tierra del Fuego.
                </p>
              </>
            )}
            {name.toLowerCase().includes("beagle") && (
              <>
                <p className="font-poppins text-justify text-sm">
                  Sail on the waters of the Beagle Channel and discover the most
                  mythical landscapes of the end of the world until you reach
                  Les Éclaireurs Lighthouse, an icon of the city of Ushuaia.
                  <br />
                  On the way, we will explore the Bridges Archipelago, where we
                  will observe colonies of sea lions and imperial cormorants.
                  Occasionally, we may also spot other bird species such as
                  seagulls, rock cormorants, skuas, petrels, albatrosses, and
                  ducks.
                  <br />
                  If weather conditions permit, we will make a landing on one of
                  the Bridges Islands with the opportunity for a short hike to
                  appreciate the typical flora of the area and obtain beautiful
                  panoramic views of the city and the mountain range.
                  Additionally, you can enjoy a brief representation of the
                  local natives, the Yamanas or Yaganes.
                  <br />
                  After visiting Les Éclaireurs Lighthouse, we will begin the
                  return journey, approaching the northern coast of the Beagle
                  Channel, passing by Estancia Tunel, the Playa Larga Natural
                  and Cultural Reserve, and the eastern sector of the city.
                </p>
              </>
            )}
            {name.toLowerCase().includes("boardwalk") && (
              <>
                <p className="font-poppins text-justify text-sm">
                  Prepare to embark on a journey like no other as you enter the
                  enchanting world of Tierra del Fuego National Park. With its
                  rugged landscapes, pristine wilderness, and the irresistible
                  call of adventure, this is where your wildest dreams come to
                  life. From the windswept peaks to the serene lakeshores, every
                  step here is a discovery waiting to happen. Join us in this
                  untamed paradise and ignite your spirit in the Land of Fire."
                </p>
              </>
            )}
          </ModalContent>
        </ModalBody>
      </Modal>
      <Button
        className="bg-white"
        style={{ fontWeight: 500 }}
        onPress={() => handleOpen()}
      >
        More info
      </Button>
    </>
  );
};
