import React from "react";
import HeaderNav from "./HeaderNav";
import { Flex } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Flex maxW="672px" mx="auto" py="8" flexDirection="column">
      <HeaderNav />
      {children}
    </Flex>
  );
};

export default Layout;
