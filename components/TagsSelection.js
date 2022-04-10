import { Flex, HStack, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import PostTag from "./PostTag";

function TagsSelection({ tags, color }) {
  return (
    <Wrap spacing="8px" mb="4">
      {tags.map((tag, index) => (
        <WrapItem key={index}>
          <PostTag text={tag.name} color={color} />
        </WrapItem>
      ))}
    </Wrap>
  );
}

export default TagsSelection;
