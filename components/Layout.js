import React from "react";
import HeaderNav from "./HeaderNav";
import { Box, Flex } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Box background="gray.50">
      <Flex maxW="672px" mx="auto" py="8" flexDirection="column">
        <HeaderNav />
        {children}
      </Flex>
    </Box>
  );
};

export default Layout;
