import React from "react";
import { Tag } from "@chakra-ui/react";

const PostTag = ({ text, color }) => {
  return <Tag colorScheme={color ? color : "gray"}>{text}</Tag>;
};

export default PostTag;
