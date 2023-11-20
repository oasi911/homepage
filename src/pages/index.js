import Main from "@/components/layout/Main";
import { Flex, Heading, VStack, Text, Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Divider } from "@chakra-ui/react";
import Photo from "@/components/Photo";
import {
  HtmlIcon,
  CssIcon,
  JsIcon,
  TsIcon,
  ReactIcon,
  NextJSIcon,
  SassIcon,
  ChakraIcon,
} from "@/components/icons/TechStack";

export default function Home() {
  return (
    <Main title="Homepage">
      <Box as="main">
        <Flex
          as="section"
          direction={{ base: "column", lg: "row-reverse" }}
          alignItems="center"
          my="50px"
        >
          <Flex ml={{ base: "0", lg: "50px" }}>
            <Photo />
          </Flex>
          <VStack
            h={{ base: "100%", lg: "200px" }}
            spacing={{ base: "25px", lg: "0" }}
            justifyContent={{ base: "center", lg: "space-around" }}
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

        <Divider />

        <Flex
          as="section"
          justifyContent="center"
          alignItems="center"
          gap={{ base: "15px", md: "25px" }}
          my="50px"
          direction="column"
        >
          <Heading fontSize="xl">Tech Stack</Heading>
          <Flex gap={{ base: "0", md: "10px" }}>
            <Flex>
              <HtmlIcon boxSize={{ base: "40px", md: "45px", lg: "55px" }} />
              <CssIcon boxSize={{ base: "40px", md: "45px", lg: "55px" }} />
            </Flex>
            <Flex>
              <JsIcon boxSize={{ base: "40px", md: "45px", lg: "55px" }} />
              <TsIcon boxSize={{ base: "40px", md: "45px", lg: "55px" }} />
            </Flex>
            <Flex>
              <ReactIcon boxSize={{ base: "40px", md: "45px", lg: "55px" }} />
              <NextJSIcon boxSize={{ base: "40px", md: "45px", lg: "55px" }} />
            </Flex>
            <Flex>
              <SassIcon boxSize={{ base: "40px", md: "45px", lg: "55px" }} />
              <ChakraIcon boxSize={{ base: "40px", md: "45px", lg: "55px" }} />
            </Flex>
          </Flex>
        </Flex>

        <Divider />

        <Flex
          as="section"
          textAlign="center"
          gap={{ base: "15px", md: "25px" }}
          my="50px"
          direction="column"
        >
          <Heading fontSize="xl">About me</Heading>
          <Text>
            I am a highly motivated individual with a strong passion for coding
            and web development. My strengths lie in my ability to quickly learn
            new technologies and apply them to projects in an efficient and
            effective manner. I am a problem-solver by nature and enjoy tackling
            complex challenges to find elegant solutions. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </Text>
        </Flex>

        <Divider />
      </Box>
    </Main>
  );
}
