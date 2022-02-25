import { Flex, HStack, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiChevronLeft } from "react-icons/fi";

export function Header() {
  const { pathname } = useRouter();

  return (
    <Flex as="header" maxW="100vw" height={{base: "16", md: "24"}} background="light.50">
      <Flex
        maxW="1240px"
        w="100%"
        align="center"
        justify="center"
        margin="0 auto"
        position="relative"
      >
        {pathname !== "/" && (
          <Link href="/" passHref>
            <Icon
              as={FiChevronLeft}
              fontSize="25"
              position="absolute"
              left="0.75rem"
              color="dark.750"
              cursor="pointer"
              _hover={{opacity: 0.85}}
              transition="opacity 0.2s"
            />
          </Link>
        )}
        <Image src="/logo.svg" w={{base: "120px", md: "184.06px"}} />
      </Flex>
    </Flex>
  );
}
