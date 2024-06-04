import { Box, Container, Heading, Image, Stack, Text } from "@chakra-ui/react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.webp";

const headingOptions = {
  pos: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  textTransform: "uppercase",
  p: "4",
  size: "4xl",
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={"container.xl"} minH={"100vh"} p="16">
        <Heading
          textTransform={"uppercase"}
          py="2"
          w={"fit-content"}
          borderBottom={"2px solid"}
          m="auto"
        >
          Services
        </Heading>

        <Stack
          h="full"
          p={"4"}
          alignItems={"center"}
          direction={["column", "row"]}
        >
          <Image src={img6} h={["40", "400"]} filter={"hue-rotate(-130deg)"} />

          <Text
            letterSpacing={"widest"}
            lineHeight={"190%"}
            p={["4", "16"]}
            textAlign={"center"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            optio explicabo commodi maiores nesciunt? Ipsa tempore dolorum a
            necessitatibus officiis molestiae, eveniet laboriosam, commodi aut
            excepturi, ipsam pariatur consequatur fuga adipisci quasi minima!
            Ducimus blanditiis eius labore excepturi itaque. Recusandae
            laboriosam cumque eaque aliquam sapiente modi unde, laborum fugit
            sit, cum inventore. Eaque, deleniti, iusto, consectetur modi
            praesentium impedit aspernatur illum numquam accusantium quas at
            perspiciatis delectus inventore! Omnis cum adipisci libero ipsam,
            rerum consequatur assumenda placeat nulla rem sequi, cumque fuga
            neque ratione animi? Odit nihil assumenda expedita dolore rem,
            aliquid itaque alias incidunt voluptates sapiente hic facilis,
            necessitatibus cumque voluptatem consectetur perferendis obcaecati
            accusantium laborum error quae reiciendis omnis ullam. Quas,
            perspiciatis?
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showThumbs={false}
    showArrows={false}
    showStatus={false}
  >
    <Box w={"full"} h={"100vh"}>
      <Image src={img1} h={"full"} w={"full"} objectFit={"cover"} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
        The Future of Gaming!
      </Heading>
    </Box>
    <Box w={"full"} h={"100vh"}>
      <Image src={img2} h={"full"} w={"full"} objectFit={"cover"} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
        Bring your games to life!
      </Heading>
    </Box>
    <Box w={"full"} h={"100vh"}>
      <Image src={img3} h={"full"} w={"full"} objectFit={"cover"} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
        Forget the past, embrace the future!
      </Heading>
    </Box>
    <Box w={"full"} h={"100vh"}>
      <Image src={img4} h={"full"} w={"full"} objectFit={"cover"} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
        Gamer in your pocket!
      </Heading>
    </Box>
    <Box w={"full"} h={"100vh"}>
      <Image src={img5} h={"full"} w={"full"} objectFit={"cover"} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
        Gaming on the go!
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
