import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const SwiperImage = ({type}) => {
    const imageUrlDesktop = [
        {
            id: 1,
            url: "https://res.cloudinary.com/dss0yvhhr/image/upload/v1735487599/carpet-cleaning-service-stockcake_rcgbia.jpg"
        },
        {
            id: 2,
            url: "https://res.cloudinary.com/dss0yvhhr/image/upload/v1735496132/image_s_1000x1000_jen9uz.jpg"
        },
        {
            id: 3,
            url: "https://res.cloudinary.com/dss0yvhhr/image/upload/v1735496242/kover-doma-1_mo5sqe.jpg"
        }
    ]

    const imageUrlMobile = [
        {
            id: 1,
            url: "https://res.cloudinary.com/dss0yvhhr/image/upload/v1735549762/image_s_2000x1333_gt1efh.jpg"
        },
        {
            id: 2,
            url: "https://res.cloudinary.com/dss0yvhhr/image/upload/v1735549789/rug_cleaning_services_g71xm5.jpg"
        },
        {
            id: 3,
            url: "https://res.cloudinary.com/dss0yvhhr/image/upload/v1735549813/Image6_eyx25z.jpg"
        }
    ]
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={5}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            speed={1200}
            loop
            className={`rounded-lg shadow-md border-[1px] border-gray-200 overflow-hidden md:h-full`}
        >
            {type === "desktop" ?
                imageUrlDesktop.map(item => (
                    <SwiperSlide key={item.id}>
                        <img className='max-h-[250px] min-h-[250px] sm:max-h-[350px] sm:min-h-[350px] md:max-h-[calc(100vh-110px)] w-full h-full object-cover'
                            src={item.url} alt="" />
                    </SwiperSlide>
                ))
                :
                imageUrlMobile.map(item => (
                    <SwiperSlide key={item.id}>
                        <img className='max-h-[250px] min-h-[250px] sm:max-h-[350px] sm:min-h-[350px] md:max-h-[calc(100vh-110px)] w-full h-full object-cover'
                            src={item.url} alt="" />
                    </SwiperSlide>
                ))}
        </Swiper>
    )
}

export default SwiperImage
