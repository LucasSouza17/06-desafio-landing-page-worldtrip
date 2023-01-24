import { Flex, HStack, Image, Stack, Text, VStack, Wrap } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { CardCountry } from "../components/CardCountry";
import { Container } from "../components/Container";
import { Hero } from "../components/Hero";

export default function Details() {
  const { query } = useRouter();

  const cards = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <Head>
        <title>Details | WorldTrip</title>
      </Head>
      <VStack position="relative" h={{ base: "300px", md: "400px", lg: "500px" }}>
        <Image
          src={query!.image as string}
          alt="banner"
          h={{ base: "300px", md: "400px", lg: "500px" }}
          objectFit="cover"
          w="100%"
        />
        <Text
          position="absolute"
          top={{ base: "50%", md: "auto" }}
          bottom={{ base: "auto", md: "8" }}
          left={{ base: "50%", md: "16" }}
          transform={{ base: "translate(-50%, -50%)", md: "auto" }}
          fontWeight="bold"
          fontSize="3xl"
          color="white"
        >
          Europe
        </Text>
      </VStack>
      <Container>
        <Stack flexDir={{ base: "column", lg: "row" }} justifyContent="space-between" w="100%" mt="12">
          <Text w={{ base: "100%", lg: "50%" }}>
            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental
            da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes
            Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
          <HStack w={{ base: "100%", lg: "50%" }} pt={{ base: "12", lg: "0" }}>
            <VStack w="100%">
              <Text fontSize="4xl" color="orange" fontWeight="bold" lineHeight="5">
                50
              </Text>
              <Text fontSize="lg" color="gray.600" fontWeight="semibold">
                países
              </Text>
            </VStack>
            <VStack w="100%">
              <Text fontSize="4xl" color="orange" fontWeight="bold" lineHeight="5">
                60
              </Text>
              <Text fontSize="lg" color="gray.600" fontWeight="semibold">
                línguas
              </Text>
            </VStack>
            <VStack w="100%">
              <Text fontSize="4xl" color="orange" fontWeight="bold" lineHeight="5">
                27
              </Text>
              <Text fontSize="lg" color="gray.600" fontWeight="semibold">
                cidades +100
              </Text>
            </VStack>
          </HStack>
        </Stack>
        <Flex flexDir="column" mt="12" mb="12">
          <Text fontSize="4xl" color="gray.600" fontWeight="medium">
            Cidades +100
          </Text>
          <Wrap mt="8" spacing="6" justify={{base: "center", lg: "flex-start"}}>
            {cards.map((data) => (
              <CardCountry key={data} />
            ))}
          </Wrap>
        </Flex>
      </Container>
    </>
  );
}
