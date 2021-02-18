import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, Heading } from "@chakra-ui/react";

import { Carousel } from "jherr-mf-carousel/dist/node";
import("jherr-mf-carousel-mf").then((mod) => console.log(mod));
import "./index.css";

const App = () => (
  <ChakraProvider>
    <Heading>Starter Host</Heading>
    <Carousel />
  </ChakraProvider>
);

ReactDOM.render(<App />, document.getElementById("app"));
