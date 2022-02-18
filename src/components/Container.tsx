import { Box } from "@chakra-ui/react";

interface ContainerProps {
  children: React.ReactNode
}

export function Container({children}: ContainerProps) {
  return (
    <Box maxW="1240px" w="100%" margin="0 auto" padding={["6", "4", "4", "4", "0"]}>
      {children}
    </Box>
  )
}