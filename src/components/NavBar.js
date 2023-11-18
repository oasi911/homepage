const { Box, Flex } = require("@chakra-ui/layout");
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
      as="nav"
      pt="10px"
      pb="10px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex direction="row" gap="10px">
        <LinkItem href="/">Home</LinkItem>
        <LinkItem href="/works">Works</LinkItem>
        <LinkItem href="https://github.com/oasi911/homepage" target="_blank">
          Source
        </LinkItem>
      </Flex>
      <ThemeToggleButton />
    </Flex>
  );
};

export default NavBar;
