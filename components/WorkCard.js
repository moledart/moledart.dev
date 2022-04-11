import React from "react";
import PostTag from "./PostTag";
import { Heading, Text, Flex, Button, Wrap, WrapItem, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const WorkCard = ({ work }) => {
  const { title, description, link, github, tags } = work;
  return (
    <Flex
      direction="column"
      p={["4", "6"]}
      border="1px"
      borderColor="gray.200"
      borderRadius="md"
      background="white"
    >
      <Heading mb="2" fontWeight="bold" color="gray.900" fontSize="xl" as="h3">
        {title}
      </Heading>
      <Text lineHeight="1.2" mb="6" color="gray.600">
        {description}
      </Text>
      <Wrap spacing="8px" mb="12">
        {tags.map((tag) => (
          <WrapItem key={tag.name}>
            <PostTag text={tag.name} color={tag.color} />
          </WrapItem>
        ))}
      </Wrap>
      <Flex justify="flex-start" alignItems="center" mt="auto">
        <Link href={github} isExternal cursor={!github ? "auto" : "pointer"}>
          <FontAwesomeIcon
            icon={faGithub}
            size={"2xl"}
            color={github ? "black" : "lightgray"}
          />
        </Link>
        <Link ml="4" _hover={{ textDecoration: "none" }} as="a" href={link} isExternal>
          <Button colorScheme="teal">Visit website</Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default WorkCard;
