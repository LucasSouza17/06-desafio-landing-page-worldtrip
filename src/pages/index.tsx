import { Stack, Box, VStack, Text } from "@chakra-ui/react";
import Head from "next/head";
import { Container } from "../components/Container";
import { Hero } from "../components/Hero";
import { ItemDescribe } from "../components/ItemDescribe";
import { Swiper } from "../components/Swiper";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | WorldTrip</title>
      </Head>
      <Hero />
      <Container>
        <Stack
          flexDirection="row"
          alignItems="center"
          justify="space-evenly"
          flexWrap="wrap"
          mt={{ base: "8", lg: "16" }}
        >
          <ItemDescribe label="vida noturna" icon="/cocktail.svg" />
          <ItemDescribe label="praia" icon="/surf.svg" />
          <ItemDescribe label="moderno" icon="/building.svg" />
          <ItemDescribe label="clássico" icon="/museum.svg" />
          <ItemDescribe label="e mais..." icon="/earth.svg" />
        </Stack>
        <Box
          w="90px"
          m="0 auto"
          my="8"
          mt="14"
          h="2px"
          background="dark.750"
          display="flex"
          justifySelf="center"
        />
        <VStack>
          <Text fontSize="3xl" fontWeight="medium" color="dark.750">Vamos nessa?</Text>
          <Text fontSize="3xl" fontWeight="medium" color="dark.750">Então escolha seu continente</Text>
        </VStack>
        <Box my="8">
          <Swiper />
        </Box>
      </Container>
    </>
  );
}
