import Head from "next/head";
import {
  Flex,
  Heading,
  Text,
  Box,
  Image,
  AspectRatio,
  Grid,
  Link,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { PostCard, TagsSelection, WorkCard } from "../components/index";
import { getPosts, getWorks } from "../services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTelegram, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Home({ posts, works }) {
  console.log(works[0].node);
  return (
    <Box as="main">
      <Flex pb="64px" as="section">
        <Flex direction="column" flex="3">
          <Heading size="xl" mb="2">
            Hello there👋
          </Heading>
          <Text color="gray.600">My name is Andrew. I am a frontend developer.</Text>
          <Wrap spacing="4" mt="auto">
            <WrapItem>
              <Link href="">
                <FontAwesomeIcon size="2xl" icon={faGithub} />
              </Link>
            </WrapItem>
            <WrapItem>
              <Link href="">
                <FontAwesomeIcon size="2xl" icon={faTelegram} />
              </Link>
            </WrapItem>
            <WrapItem>
              <Link href="">
                <FontAwesomeIcon size="2xl" icon={faEnvelope} />
              </Link>
            </WrapItem>
          </Wrap>
        </Flex>
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
        <Heading mb="6" as="h2" fontSize="4xl">
          My work
        </Heading>
        <Grid templateColumns="1fr 1fr" gap={4}>
          {works.map((work) => (
            <WorkCard key={work.node.id} work={work.node} />
          ))}
        </Grid>
      </Box>
      {/* <TagsSelection posts={posts} /> */}
      <Box as="section" pb="64px">
        <Heading mb="6" as="h2" fontSize="4xl">
          Blog
        </Heading>
        {posts.map((post) => (
          <PostCard key={post.node.id} post={post.node} />
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
