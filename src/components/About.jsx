import {
  Box,
  Flex,
  Image,
  Text,
  Container,
  Button,
  Heading,
} from "@chakra-ui/react";
import { about } from "../helpers/const";

const About = () => {
  return (
    <Box bg={"#000"} w={"full"} h={"335px"} pt={"250px"}>
      <Container maxW={"container.lg"}>
        <Flex gap={2} align={"center"} mb={5}>
          <Image src="../../images/receipt.png" />
          <Box w={"150px"} h={"2px"} bg={"#fff"}></Box>
          <Box w={"10px"} h={"2px"} bg={"#fff"}></Box>
          <Box w={"5px"} h={"2px"} bg={"#fff"}></Box>
        </Flex>
        <Heading
          fontSize={"40px"}
          fontWeight={"300"}
          lineHeight={"44px"}
          letterSpacing={"0.03em"}
          textAlign={"left"}
          color={"#fff"}
        >
          ISMOIL MAHMUDJONOV
        </Heading>
        <Heading
          fontSize={"40px"}
          fontWeight={"700"}
          lineHeight={"44px"}
          letterSpacing={"0.03em"}
          textAlign={"left"}
          color={"#fff"}
        >
          HAQIDA
        </Heading>

        <Box mt={"50px"}>
          <Flex gap={5}>
            {about.map((c) => {
              return (
                <Box
                  width={"270px"}
                  height={"133px"}
                  borderRadius={"4px"}
                  bg={"#fff"}
                  pos={"relative"}
                  p={5}
                  pt={8}
                >
                  <Text
                    color={"#3F4266"}
                    fontSize={"18px"}
                    fontWeight={"300"}
                    lineHeight={"120%"}
                    letterSpacing={"0.54px"}
                  >
                    {c.title}
                  </Text>
                  <Flex
                    top={"-5"}
                    right={"5"}
                    w={"46px"}
                    h={"46px"}
                    pos={"absolute"}
                    bg={"#fff"}
                    borderRadius={"100%"}
                    align={"center"}
                    justify={"center"}
                    boxShadow={"0px 4px 16px 0px rgba(0, 0, 0, 0.25)"}
                  >
                    {c.icon}
                  </Flex>
                </Box>
              );
            })}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
