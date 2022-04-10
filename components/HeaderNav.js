import { Flex, Spacer, Button } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

const navLinks = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/my-work",
    title: "My work",
  },
  // {
  //   href: "/about",
  //   title: "About me",
  // },
  // {
  //   href: "/blog",
  //   title: "Blog",
  // },
  {
    href: "/tools",
    title: "Tools",
  },
];
const HeaderNav = () => {
  return (
    <Flex ml="-4" mb="64px" height="8" as="nav">
      <Flex alignItems="center">
        {navLinks.map((item, index) => (
          <NextLink href={item.href} passHref key={index}>
            <Button borderRadius="8" background="gray.50" _focus={{ border: "none" }}>
              {item.title}
            </Button>
          </NextLink>
        ))}
      </Flex>
    </Flex>
  );
};

export default HeaderNav;
