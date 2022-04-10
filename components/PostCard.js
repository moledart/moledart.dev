import React from "react";
import {
  Flex,
  Heading,
  Text,
  Box,
  Image,
  AspectRatio,
  Grid,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import TagsSelection from "./TagsSelection";
import NextLink from "next/link";

const PostCard = ({ post }) => {
  const { tags, publishedAt, excerpt, slug, thumbnail, title } = post;
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(publishedAt).toLocaleDateString(undefined, options);

  return (
    <LinkBox as="article" mb="8">
      <Grid templateColumns="3fr 2fr" columnGap={20}>
        <Box>
          <TagsSelection tags={tags} />
          <NextLink href="#" passHref>
            <LinkOverlay>
              <Heading
                size="md"
                mb="2"
                fontWeight="semibold"
                color="gray.900"
                fontSize="2xl"
                as="h3"
              >
                {title}
              </Heading>
            </LinkOverlay>
          </NextLink>
          <Text color="gray.600" noOfLines={2} mb="4">
            {excerpt}
          </Text>
          <Text fontSize="sm" color="gray.400">
            {date}
          </Text>
        </Box>
        <AspectRatio ratio={2 / 1}>
          <Image src={thumbnail.url} alt="photo" objectFit="cover" />
        </AspectRatio>
      </Grid>
    </LinkBox>
  );
};

export default PostCard;
