import Main from "@/components/layout/Main";
import { Flex, Heading, VStack, Text, Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import Photo from "@/components/Photo";

export default function Home() {
  return (
    <Main title="Homepage">
      <Box as="main">
        <Flex
          as="section"
          direction={{ base: "column", lg: "row-reverse" }}
          alignItems="center"
        >
          <Flex ml={{ base: "0", lg: "50px" }}>
            <Photo />
          </Flex>
          <VStack
            h={{ base: "100%", lg: "200px" }}
            spacing={{ base: "25px", lg: "0" }}
            justifyContent={{ base: "center", lg: "space-around" }}
            my="50px"
          >
            <Heading
              as="h1"
              fontSize={{ base: "35px", md: "45px" }}
              textAlign="center"
            >
              Front-End React Developer
              <Image
                src="/waving-hand.png"
                display="inline-block"
                verticalAlign="middle"
                boxSize="1em"
                ml="2"
                alt="Waving hand"
              />
            </Heading>
            <Text fontSize="2xl" w="100%" textAlign="justify">
              Hi, I'm Anton Sokolchuk. A passionate Front-end React Developer
              based in Ukraine, Dnipro. 📍
            </Text>
          </VStack>
        </Flex>
      </Box>
    </Main>
  );
}
