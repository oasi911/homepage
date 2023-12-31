import Main from "@/components/layout/Main";
import { Flex, Heading, VStack, HStack, Text, Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Divider, Link } from "@chakra-ui/react";
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
import { BioSection, BioYear } from "@/components/Bio";
import {
  EmailIcon,
  LinkedinIcon,
  TelegramIcon,
} from "@/components/icons/Contacts";

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

        <Flex
          as="section"
          gap={{ base: "15px", md: "25px" }}
          my="50px"
          direction="column"
        >
          <Heading fontSize="xl" m="auto">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1998</BioYear>
            Born in Dnipro, Ukraine.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Completed the Bachelor&apos;s Program of Computer Science at Dnipro
            University of Technology.
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Completed Full Stack Developer courses at GOIT.
          </BioSection>
          <BioSection>
            <BioYear>2023 to present</BioYear>
            Looking for a job.
          </BioSection>
        </Flex>

        <Divider />

        <Flex
          as="section"
          gap={{ base: "15px", md: "25px" }}
          my="50px"
          direction="column"
        >
          <Heading fontSize="xl" m="auto">
            Contacts
          </Heading>
          <HStack spacing={{ base: "10px", lg: "20px" }}>
            <EmailIcon boxSize="30px" />
            <Text>sokolchukwork@gmail.com</Text>
          </HStack>
          <HStack spacing={{ base: "10px", lg: "20px" }}>
            <LinkedinIcon boxSize="30px" />
            <Link
              href="https://www.linkedin.com/in/antonsokolchuk/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </HStack>
          <HStack spacing={{ base: "10px", lg: "20px" }}>
            <TelegramIcon boxSize="30px" />
            <Link href="https://t.me/loremipsumyoda" target="_blank">
              Telegram
            </Link>
          </HStack>
        </Flex>
      </Box>
    </Main>
  );
}
