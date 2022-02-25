import { VStack, Image, Text } from "@chakra-ui/react";

interface ItemDescriptionProps {
  icon: string;
  label: string;
}

export function ItemDescribe({ icon, label }: ItemDescriptionProps) {
  return (
    <VStack
      width="8rem"
      height="8rem"
      spacing="4"
      flexDirection="column"
      justify="center"
      align="center"
    >
      <Image
        src={icon}
        width={{ base: "50px", lg: "85px" }}
        height={{ base: "50px", lg: "85px" }}
      />
      <Text textAlign="center" fontWeight="semibold" color="dark.750">
        {label}
      </Text>
    </VStack>
  );
}
