import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const SwiperImage = () => {
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={5}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            speed={1500}
            loop
            className="rounded-lg shadow-md border-[1px] border-gray-200 overflow-hidden h-full"
        >
            <SwiperSlide>
                <img className='max-h-[calc(100vh-110px)] w-full h-full object-cover'
                    src="https://res.cloudinary.com/dss0yvhhr/image/upload/v1735496132/image_s_1000x1000_jen9uz.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='max-h-[calc(100vh-110px)] w-full h-full object-cover'
                    src="https://res.cloudinary.com/dss0yvhhr/image/upload/v1735487599/carpet-cleaning-service-stockcake_rcgbia.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='max-h-[calc(100vh-110px)] w-full h-full object-cover'
                    src="https://res.cloudinary.com/dss0yvhhr/image/upload/v1735496242/kover-doma-1_mo5sqe.jpg" alt="" />
            </SwiperSlide>
        </Swiper>
    )
}

export default SwiperImage
