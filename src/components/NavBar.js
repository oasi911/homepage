import { HStack, Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import Link from "next/link";
import ThemeToggleButton from "./ThemeToggleButton";

const LinkItem = ({ href, target, children, ...props }) => {
  return (
    <Button as={Link} href={href} p={2} target={target} {...props}>
      {children}
    </Button>
  );
};

const NavBar = () => {
  return (
    <Flex
      as="header"
      py="10px"
      justifyContent="space-between"
      alignItems="center"
    >
      <HStack as="nav" spacing="10px">
        <LinkItem href="/">Home</LinkItem>
        <LinkItem href="/works">Works</LinkItem>
        <LinkItem href="https://github.com/oasi911/homepage" target="_blank">
          Source
        </LinkItem>
      </HStack>
      <ThemeToggleButton />
    </Flex>
  );
};

export default NavBar;
