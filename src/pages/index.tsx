import { Box, Text } from "@chakra-ui/react";
import Head from "next/head";
import { Container } from "../components/Container";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | WorldTrip</title>
      </Head>
      <Hero />
      <Container>
        <Box mt={{base: "8", lg: "24"}}></Box>
        <h1>Hello World</h1>
      </Container>
    </>
  );
}
