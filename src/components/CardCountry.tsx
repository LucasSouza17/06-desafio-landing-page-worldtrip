import { Flex, Image, Text, VStack } from "@chakra-ui/react";

export function CardCountry() {
  return (
    <Flex borderRadius="md" flexDir="column" w="64">
      <Image src="/cardimage.png" alt="Card Image" />
      <Flex borderWidth="1px"  borderTopWidth="0px" borderBottomRadius="md" borderColor="orange" flexDir="row" justify="space-between" align="center" p="4">
        <VStack align="flex-start">
          <Text textAlign="left" fontSize="lg" fontWeight="semibold" color="gray.600">Amsterdã</Text>
          <Text textAlign="left" fontSize="sm" fontWeight="normal" color="gray.400">Reino unido</Text>
        </VStack>
        <Image src="/bordercountry.png" alt="country" borderRadius="full" w="30px" h="30px" />
      </Flex>
    </Flex>
  );
}
