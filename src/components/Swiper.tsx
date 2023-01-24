import Link from "next/link";
import { Swiper as SwiperContainer, SwiperSlide } from "swiper/react";
import { Pagination, Lazy, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Image, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

export function Swiper() {
  const {push} = useRouter();

  const images = [
    "https://source.unsplash.com/random/1366x768/?europe,city",
    "https://source.unsplash.com/random/1366x768/?oceania,city",
    "https://source.unsplash.com/random/1366x768/?southamerica,city",
    "https://source.unsplash.com/random/1366x768/?northamerica,city",
    "https://source.unsplash.com/random/1366x768/?asia,city",
    "https://source.unsplash.com/random/1366x768/?africa,city",
  ];

  return (
    <SwiperContainer
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Lazy, Pagination, Navigation]}
      lazy={true}
      loop
      className="mySwiper"
      style={
        {
          "--swiper-pagination-color": "orange",
          "--swiper-navigation-color": "orange",
        } as any
      }
    >
      {images.map((data) => (
          <SwiperSlide key={data} onClick={() => push(`/details?image=${data}`)}>
            <Image src={data} alt="images" filter="brightness(50%)" loading="lazy" />
            <VStack position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
              <Text fontSize="4xl" fontWeight="bold" color="white">
                Europa
              </Text>
              <Text fontSize="2xl" fontWeight="medium" color="white">
                O continente mais antigo
              </Text>
            </VStack>
          </SwiperSlide>
      ))}
    </SwiperContainer>
  );
}
