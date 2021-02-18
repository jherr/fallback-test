import React from "react";
import { Button, Grid } from "@chakra-ui/react";

export function Carousel() {
  return (
    <Grid templateColumns="1fr 10fr 1fr" gap={6}>
      <Button>Left</Button>
      <div>Image (version 1.0.2)</div>
      <Button>Right</Button>
    </Grid>
  );
}
