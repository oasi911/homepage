import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" align="center" my="15px" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Anton Sokolchuk. All Rights Reserved.
    </Box>
  );
};

export default Footer;
