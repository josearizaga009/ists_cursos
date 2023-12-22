// Import Swiper React components
import "./Slider.css";
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

export default function Slider({ speed, delay, images }) {
    return (
        <Swiper
            className="slider"
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{ delay }}
            speed={speed}
            spaceBetween={0}
            slidesPerView={1}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
        >
            {images.map(({ id, url }) => (
                <SwiperSlide key={id}>
                    <img src={url} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
