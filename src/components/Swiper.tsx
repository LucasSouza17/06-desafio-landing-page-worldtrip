import { Swiper as SwiperContainer, SwiperSlide } from "swiper/react";
import { Pagination, Lazy, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Image } from "@chakra-ui/react";

export function Swiper() {
  return (
    <SwiperContainer
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Lazy, Pagination, Navigation]}
      lazy={true}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image src="https://source.unsplash.com/random/1240×450/?europe" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="https://source.unsplash.com/random/1080x720/?oceania,city" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="https://source.unsplash.com/random/1080x720/?southamerica,city" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="https://source.unsplash.com/random/1080x720/?northamerica,city" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="https://source.unsplash.com/random/1080x720/?asia,city" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="https://source.unsplash.com/random/1080x720/?africa,city" />
      </SwiperSlide>
    </SwiperContainer>
  );
}
