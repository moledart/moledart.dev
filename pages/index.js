import Head from "next/head";
//Chakra
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
import { ArrowForwardIcon } from "@chakra-ui/icons";
//Components
import NextLink from "next/link";
import { WorkCard, WikisList, WorksList } from "../components/index";
//GraphQl
import { getPosts, getWorks, getWikis } from "../services";
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTelegram, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Home({ posts, works, wikis }) {
  const personalLinks = [
    {
      href: "https://github.com/moledart",
      icon: faGithub,
    },
    {
      href: "https://t.me/moledart",
      icon: faTelegram,
    },
    {
      href: "mailto:moleand@gmail.com?subject=Mail from my website",
      icon: faEnvelope,
    },
  ];
  return (
    <Box as="main">
      <Flex pb="64px" as="section">
        <Flex direction="column" flex="3">
          <Heading size="xl" mb="2">
            Hello there👋
          </Heading>
          <Text color="gray.600">My name is Andrew. I am a frontend developer.</Text>
          <Wrap spacing="4" mt="auto">
            {personalLinks.map((link, index) => (
              <WrapItem key={index}>
                <Link
                  href={link.href}
                  color="gray.600"
                  isExternal
                  _hover={{ color: "gray.800" }}
                >
                  <FontAwesomeIcon size="2xl" icon={link.icon} />
                </Link>
              </WrapItem>
            ))}
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
        <WorksList works={works} />
        <NextLink href="/my-work" passHref>
          <Link>
            List of all projects <ArrowForwardIcon ml="1" />
          </Link>
        </NextLink>
      </Box>
      {/* <Box as="section" pb="64px">
        <Heading mb="6" as="h2" fontSize="4xl">
          Blog
        </Heading>
        {posts.map((post) => (
          <PostCard key={post.node.id} post={post.node} />
        ))}
      </Box> */}
      <Box as="section" pb="64px">
        <Heading mb="6" as="h2" fontSize="4xl">
          Tools
        </Heading>
        <WikisList wikis={wikis} />
        <NextLink href="/tools" passHref>
          <Link>
            List of all tools <ArrowForwardIcon ml="1" />
          </Link>
        </NextLink>
      </Box>
    </Box>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  const works = (await getWorks(4)) || [];
  const wikis = (await getWikis(4)) || [];

  return {
    props: { posts, works, wikis },
  };
}
