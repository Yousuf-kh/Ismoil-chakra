import { Box, Flex, Image, Text, Container } from "@chakra-ui/react";

function Navbar() {
  return (
    <Box bg={"#000"} w={"full"} h={"10vh"}>
      <Container maxW={"container.lg"}>
        <Flex justify={"space-between"} align={"center"} h={"10vh"}>
          <Box>
            <Image src="../../images/logo.png" h={"30px"} w={"300px"} />
          </Box>

          <Flex display={{ base: "none", md: "flex" }} gap={2} align={"center"}>
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
}

export default Navbar;
