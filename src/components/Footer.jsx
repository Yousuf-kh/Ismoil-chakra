import {
  Box,
  Flex,
  Image,
  Text,
  Container,
  Button,
  Heading,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box w={"full"} bg={"#000"} h={"10vh"}>
      <Container maxW="container.lg">
        <Flex
          justify={{ base: "center", md: "space-between" }}
          align={"center"}
          h={"10vh"}
        >
          <Box display={{ base: "none", md: "block" }}>
            <Image src="../../images/logo.png" />
          </Box>

          <Flex gap={2}>
            <Image src="../../images/telegram.png" />
            <Image src="../../images/insta.png" />
            <Image src="../../images/youtube.png" />
          </Flex>

          <Flex gap={2} align={"center"} display={{ base: "none", md: "flex" }}>
            <Box>
              <Text
                color={"#414157"}
                fontWeight={"400"}
                fontSize={"14px"}
                lineHeight={"14px"}
              >
                Biz bilan bog’laning:
              </Text>
              <Text fontWeight={"400"} fontSize={"14px"} color={"#fff"}>
                +998 99 821 33 91
              </Text>
            </Box>
            <Image w={"25px"} h={"25px"} src="../../images/fi.png" />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
