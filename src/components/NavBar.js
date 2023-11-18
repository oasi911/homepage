const { Box, Link, Flex } = require("@chakra-ui/layout");
import NextLink from "next/link";
import ThemeToggleButton from "./ThemeToggleButton";

const LinkItem = ({ href, target, children, ...props }) => {
  return (
    <Link as={NextLink} href={href} p={2} target={target} {...props}>
      {children}
    </Link>
  );
};

const NavBar = () => {
  return (
    <Box
      as="nav"
      pt="10px"
      pb="10px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex direction="row">
        <LinkItem href="/">Home</LinkItem>
        <LinkItem href="/works">Works</LinkItem>
        <LinkItem href="https://github.com/oasi911/homepage" target="_blank">
          Source
        </LinkItem>
      </Flex>
      <ThemeToggleButton />
    </Box>
  );
};

export default NavBar;
