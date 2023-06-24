import {
  Box,
  Flex,
  Image,
  Text,
  Container,
  Button,
  Heading,
} from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box
      w={"full"}
      h={"500px"}
      backgroundImage={"url(../../images/bg.png)"}
      backgroundRepeat={"no-repeat"}
      backgroundColor={"#000"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <Container maxW={"container.lg"}>
        <Box pt={"100px"}>
          <Flex justify={"space-between"} align={"center"} w={"500px"}>
            <Text
              p={2}
              bg={"#fff"}
              opacity={".7"}
              fontWeight={"300"}
              fontSize={"24px"}
              lineHeight={"110%"}
              letterSpacing={".03em"}
              textTransform={"uppercase"}
              color={"#03030B;"}
            >
              20-21-22-iyun
            </Text>

            <Flex justify={"space-between"} align={"center"} gap={2}>
              <Flex align={"center"} gap={1}>
                <Text
                  fontWeight={"300"}
                  fontSize={"24px"}
                  lineHeight={"110%"}
                  textAlign={"right"}
                  letterSpacing={"0.03em"}
                  textTransform={"uppercase"}
                  color={"#5B6375"}
                >
                  20:00
                </Text>
                <Image src="../../images/fi_clock.png" />
              </Flex>
              <Button bg={"#EF3833"} borderRadius={"20px"} color={"#fff"}>
                ONLINE
              </Button>
            </Flex>
          </Flex>
          <Heading
            fontWeight={"700"}
            fontSize={"80px"}
            letterSpacing={".02em"}
            color={"#fff"}
          >
            Grafik Dizayn
          </Heading>
          <Heading
            fontWeight={"300"}
            fontSize={"40px"}
            letterSpacing={"0.3em"}
            textTransform={"uppercase"}
            color={"#FFFFFF"}
          >
            Sohasiga Kirish
          </Heading>
          <Flex mt={5} gap={3} align={"center"}>
            <Image src="../../images/vector.png" />
            <Box>
              <Text
                fontWeight={"3000"}
                fontSize={"24px"}
                lineHeight={"110%"}
                letterSpacing={"0.03em"}
                color={"#FFFFFF"}
              >
                Ismoil Mahmudjonovdan <br />
                <span style={{ fontWeight: "bold" }}> Bepul Master-Klass</span>
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box mt={"150px"}>
          <Flex align={"flex-end"} justify={"space-between"}>
            <Box>
              <Heading
                color={"#63CDF6"}
                fontSize={"24px"}
                lineHeight={"27px"}
                fontWeight={"700"}
                mb={3}
              >
                3 kunlik Master-Klassda siz:
              </Heading>
              <Flex align={"center"} gap={2} mb={2}>
                <Image src="../../images/pocket.png" />
                <Text
                  fontSize={"24px"}
                  lineHeight={"27px"}
                  fontWeight={"300"}
                  color={"#fff"}
                >
                  Grafik dizayn qanday sohaligini tushunib olasiz;
                </Text>
              </Flex>
              <Flex align={"center"} gap={2} mb={2}>
                <Image src="../../images/pocket.png" />
                <Text
                  fontSize={"24px"}
                  lineHeight={"27px"}
                  fontWeight={"300"}
                  color={"#fff"}
                >
                  Fotoshopda ilk ishlaringizni qila olasiz;
                </Text>
              </Flex>
              <Flex align={"center"} gap={2} mb={2}>
                <Image src="../../images/pocket.png" />
                <Text
                  fontSize={"24px"}
                  lineHeight={"27px"}
                  fontWeight={"300"}
                  color={"#fff"}
                >
                  Grafik dizayn orqali daromad qilish yo’llarini o’rganib
                  olasiz.
                </Text>
              </Flex>
            </Box>
            <Box>
              <Text color={"#45CCFF"} fontSize={"26px"} fontWeight={"700"}>
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "#fff",
                    fontWeight: "300",
                  }}
                >
                  300.000 SO'M
                </span>
                BEPUL
              </Text>
              <Button color={"#fff"} bg={"#45CCFF"} borderRadius={"30px"}>
                ISHTIROK ETISH
              </Button>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
