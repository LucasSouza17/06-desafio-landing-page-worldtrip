import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";

export function Hero() {
  return (
    <Flex maxW="100vw" w="100%" align="center">
      <HStack
        backgroundImage="/hero.jpg"
        backgroundPosition="center"
        w="100%"
        h="335px"
      >
        <Flex
          margin="0 auto"
          maxW="1240px"
          h="100%"
          w="100%"
          align="center"
          position="relative"
        >
          <VStack
            spacing="5"
            maxW="524px"
            padding={{ base: "6", xl: "0" }}
            align="flex-start"
          >
            <Text
              as="h1"
              fontSize={{ base: "1.75rem", lg: "2.25rem" }}
              fontWeight="medium"
              color="light.100"
            >
              5 Continentes, infinitas possibilidades.
            </Text>
            <Text
              as="p"
              fontSize={{ base: "1rem", lg: "1.25rem" }}
              fontWeight="normal"
              color="light.200"
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </VStack>
          <Image
            src="/airplane.svg"
            position="absolute"
            right="0.75rem"
            bottom="-8"
            w={{md: "320px", lg: "417.15px"}}
            display={{base: "none", md: "block"}}
          />
        </Flex>
      </HStack>
    </Flex>
  );
}
