import Head from "next/head";
import {
  Flex,
  Heading,
  Text,
  Box,
  HStack,
  Image,
  AspectRatio,
  Grid,
} from "@chakra-ui/react";
import { PostCard, TagsSelection, WorkCard } from "../components/index";
import { getPosts, getWorks } from "../services";

export default function Home({ posts, works }) {
  console.log(works[0].node);
  return (
    <Box as="main">
      <Flex pb="64px" as="section">
        <Box flex="4">
          <Heading size="xl" mb="2">
            Hello there👋
          </Heading>
          <Text>My name is Andrew and I am a frontend developer</Text>
        </Box>
        <AspectRatio flex="1" ratio={1 / 1}>
          <Image
            src="photo.jpg"
            alt="photo of me and my older daughter"
            objectFit="cover"
            borderRadius="50%"
          />
        </AspectRatio>
      </Flex>
      <Box as="section" pb="64px">
        <Heading mb="8" as="h2" fontSize="4xl">
          Work
        </Heading>
        <Grid templateColumns="1fr 1fr" gap={6}>
          {works.map((work) => (
            <WorkCard key={work.node.id} work={work.node} />
          ))}
        </Grid>
      </Box>
      {/* <TagsSelection posts={posts} /> */}
      <Box as="section" pb="64px">
        <Heading mb="8" as="h2" fontSize="4xl">
          Blog
        </Heading>
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </Box>
    </Box>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  const works = (await getWorks()) || [];

  return {
    props: { posts, works },
  };
}
