import {
  Box,
  Flex,
  Image,
  Text,
  Container,
  Button,
  Heading,
  Grid,
} from "@chakra-ui/react";

import { lesson } from "../helpers/const";

const Master = () => {
  return (
    <Box bg={"#000"} pt={{ base: 700, md: "350px" }}>
      <Container maxW={"container.lg"}>
        <Flex mb={5} gap={2} align={"center"}>
          <Image src="/images/u_presentation-check.png" />
          <Box w={"140px"} h={"2px"} bg={"#fff"}></Box>
          <Box w={"2px"} h={"2px"} bg={"#fff"}></Box>
          <Box w={"5px"} h={"2px"} bg={"#fff"}></Box>
        </Flex>
        <Box>
          <Heading
            color={"#fff"}
            fontSize={{ base: "25px", md: "40px" }}
            fontWeight={"700"}
            lineHeight={"110%"}
            letterSpacing={"1.2px"}
          >
            3 kunlik Master-Klassda
          </Heading>
          <Heading
            color={"#fff"}
            fontSize={{ base: "25px", md: "40px" }}
            fontWeight={"300"}
            lineHeight={"110%"}
            letterSpacing={"1.2px"}
          >
            siz quyidagi bilimlarga ega bo’lasiz:
          </Heading>
        </Box>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          gap={10}
          mt={{ base: 0, md: 20 }}
          templateRows={{ base: "100px", md: "170px 170px" }}
        >
          {lesson.map((c) => (
            <Flex key={c.title} align={"center"} gap={5}>
              <Image src="../../images/u_check-circle.png" />
              <Text
                color={"#fff"}
                fontSize={"18px"}
                fontWeight={"300"}
                lineHeight={"120%"}
                letterSpacing={"0.54px"}
              >
                {c.title}
              </Text>
            </Flex>
          ))}
          <Flex
            p={{ base: 5, md: 0 }}
            align={"center"}
            justify={"center"}
            flexDirection={"column"}
          >
            <Text color={"#45CCFF"} fontSize={"20px"} fontWeight={"700"}>
              <span
                style={{
                  textDecoration: "line-through",
                  color: "#fff",
                  fontWeight: "300",
                }}
              >
                300.000 SO'M{" "}
              </span>
              BEPUL
            </Text>
            <Button color={"#fff"} bg={"#45CCFF"} borderRadius={"30px"}>
              ISHTIROK ETISH
            </Button>
          </Flex>
        </Grid>
      </Container>
    </Box>
  );
};

export default Master;
