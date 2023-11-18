import Main from "@/components/layout/Main";
import { Flex, Heading, VStack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import Photo from "@/components/Photo";

export default function Home() {
  return (
    <Main title="Homepage">
      <Flex as="main">
        <VStack as="section" spacing="25px" my="50px">
          <Photo />
          <Heading as="h1" size="2xl" textAlign="center">
            Front-End React Developer
            <Image
              src="/waving-hand.png"
              display="inline-block"
              verticalAlign="middle"
              boxSize="2.25rem"
              ml="2"
              alt="Waving hand"
            ></Image>
          </Heading>
          <Text fontSize="2xl" w="100%" textAlign="justify">
            Hi, I'm Anton Sokolchuk. A passionate Front-end React Developer
            based in Ukraine, Dnipro. 📍
          </Text>
        </VStack>
      </Flex>
    </Main>
  );
}
