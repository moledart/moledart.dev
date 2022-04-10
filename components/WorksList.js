import React from "react";
import WorkCard from "./WorkCard";
import { Grid } from "@chakra-ui/react";

const WorksList = ({ works }) => {
  return (
    <Grid templateColumns="1fr 1fr" gap={4} mb="4">
      {works.map((work) => (
        <WorkCard key={work.node.id} work={work.node} />
      ))}
    </Grid>
  );
};

export default WorksList;
