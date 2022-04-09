import { Flex, HStack } from "@chakra-ui/react";
import React from "react";
import PostTag from "./PostTag";

function TagsSelection({ tags }) {
  return (
    <HStack spacing="8px" mb="2">
      {tags.map((tag) => (
        <PostTag key={tag.id} text={tag.name} />
      ))}
    </HStack>
  );
}

export default TagsSelection;
