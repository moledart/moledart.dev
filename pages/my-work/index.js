import React from 'react';
import { getWorks } from '../../services';
//Chakra
import { Box, Heading, Text } from '@chakra-ui/react';
//Components
import { WorksList } from '../../components';

const MyWorks = ({ works }) => {
  return (
    <Box as="main">
      <Heading as="h1" size="xl" mb="2">
        My work
      </Heading>
      <Text mb="8" color="gray.600">
        List of different projects I made. Some of them were freelance jobs,
        some are pet projects and some were made during different courses I
        enrolled.
      </Text>
      <WorksList works={works} />
    </Box>
  );
};

export default MyWorks;

export async function getStaticProps() {
  const works = (await getWorks()) || [];

  return {
    props: { works },
  };
}
