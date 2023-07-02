import Carousel from "react-multi-carousel";

import {
  Box,
  Flex,
  Image,
  Text,
  Container,
  Button,
  Heading,
} from "@chakra-ui/react";

import { responsive, portfolioFirst, portfolioSecond } from "../helpers/const";

const Portfolio = () => {
  return (
    <Box>
      <Carousel
        autoPlay={true}
        autoPlaySpeed={2500}
        arrows={false}
        responsive={responsive}
        infinite={true}
      >
        {portfolioFirst.map((c, i) => (
          <Box key={i}>{c.image}</Box>
        ))}
      </Carousel>
      <Carousel
        autoPlay={true}
        autoPlaySpeed={3500}
        arrows={false}
        responsive={responsive}
        infinite={true}
      >
        {portfolioSecond.map((c, i) => (
          <Box key={i}>{c.image}</Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Portfolio;
