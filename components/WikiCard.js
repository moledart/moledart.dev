import React from "react";
import { Heading, Text, Flex, Wrap, WrapItem, Link } from "@chakra-ui/react";
//Components
import TagsSelection from "./TagsSelection";
import PostTag from "./PostTag";

const WikiCard = ({ wiki }) => {
  const { title, description, color, link, tags } = wiki;
  return (
    <Link _hover={{ textDecoration: "none" }} href={link} isExternal>
      <Flex
        direction="column"
        p="4"
        border="1px"
        borderColor="gray.200"
        borderRadius="md"
        background={color ? `${color}.50` : "white"}
        height="100%"
      >
        <TagsSelection tags={tags} color="white" />
        <Heading mb="4" fontWeight="bold" color="gray.900" fontSize="lg" as="h3">
          {title}
        </Heading>
        <Text lineHeight="1.2" color="gray.600">
          {description}
        </Text>
      </Flex>
    </Link>
  );
};

export default WikiCard;
