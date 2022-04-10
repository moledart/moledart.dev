import React from "react";
//Chakra
import { Heading, Text, Box } from "@chakra-ui/react";
import { getWikis } from "../../services";
//Components
import { WikisList } from "../../components";

const Tools = ({ wikis }) => {
  return (
    <Box as="main">
      <Heading as="h1" size="xl" mb="2">
        Tools and useful resources
      </Heading>
      <Text mb="8" color="gray.600">
        This is my list of courses, sandboxes, tutorials etc. that i used throught my
        study and during work. Fell free to check this out, maybe you'll find something
        valuable!
      </Text>
      <WikisList wikis={wikis} />
    </Box>
  );
};

export default Tools;

export async function getStaticProps() {
  const wikis = (await getWikis()) || [];

  return {
    props: { wikis },
  };
}
