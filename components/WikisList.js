import React from "react";
import WikiCard from "./WikiCard";
import { Grid } from "@chakra-ui/react";

const WikisList = ({ wikis }) => {
  return (
    <Grid templateColumns={["1fr", "1fr 1fr"]} gap={4} mb="4">
      {wikis.map((wiki, index) => (
        <WikiCard key={index} wiki={wiki.node} />
      ))}
    </Grid>
  );
};

export default WikisList;
