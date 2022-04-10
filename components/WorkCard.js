import React from "react";
import PostTag from "./PostTag";
import {
  Box,
  Heading,
  Text,
  Stack,
  Flex,
  Button,
  Wrap,
  WrapItem,
  Link,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const WorkCard = ({ work }) => {
  const { title, description, link, github, tags } = work;
  return (
    <Flex
      direction="column"
      p="6"
      border="1px"
      borderColor="gray.200"
      borderRadius="md"
      background="white"
    >
      <Heading mb="2" fontWeight="bold" color="gray.900" fontSize="xl" as="h3">
        {title}
      </Heading>
      <Text lineHeight="1.2" mb="8" color="gray.600">
        {description}
      </Text>
      <Wrap spacing="8px" mb="10">
        {tags.map((tag) => (
          <WrapItem key={tag.id}>
            <PostTag text={tag.name} color={tag.color} />
          </WrapItem>
        ))}
      </Wrap>
      <Flex justify="flex-start" alignItems="center" mt="auto">
        <Link href={github} isExternal cursor={!github ? "auto" : "pointer"}>
          <FontAwesomeIcon
            icon={faGithub}
            size="xl"
            color={github ? "black" : "lightgray"}
          />
        </Link>
        <Button ml="4" colorScheme="teal" as="a" href={link} isExternal>
          Visit website
        </Button>
      </Flex>
    </Flex>
  );
};

export default WorkCard;
