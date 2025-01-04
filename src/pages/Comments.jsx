import { RiDoubleQuotesR } from "react-icons/ri";
import { TiGroup } from "react-icons/ti";
import React from 'react'
import { useTranslation } from 'react-i18next'
import AnimateBox from '../components/page-comp/AnimateBox'
import Container from "../components/Container";
import { commentsData } from "../config/const";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Comments = () => {
    const { t } = useTranslation()
    return (
        <section className="py-[20px] pt-[10px]" id="comments">
            <Container type={"main"}>
                <AnimateBox>
                    <AnimateBox>
                        <h2 className="text-[25px] lg:text-[28px] font-bold text-primary-700 flex justify-start items-start sm:items-center flex-col sm:flex-row sm:gap-2">
                            <div className="flex justify-start items-center gap-1">
                                <span>{t("com_main-title")}</span>
                                <TiGroup />
                            </div>
                        </h2>
                    </AnimateBox>
                    <hr className="mb-[20px]" />
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        speed={1200}
                        loop
                        className="px-[2px]"
                        breakpoints={
                            {
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },

                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },

                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                }
                            }
                        }>

                        {commentsData.map(item => (
                            <SwiperSlide key={item.id} className="px-[2px] pt-[5px] pb-[20px]">
                                <div className="p-[15px]  rounded-lg shadow-md border-[1px] border-blue-100 cursor-pointer bg-blue-50 min-h-[200px]">
                                    <div className="flex justify-between items-center gap-1">
                                        <div className="flex justify-start items-center gap-2 mb-[5px]">
                                            <img className="w-[46px] h-[45px] border-[2px] border-indigo-400 p-[2px] rounded-full object-cover" src={item.avatar} alt="" />
                                            <div className="flex flex-col">
                                                <h4 className="text-[16px] font-bold text-gray-900">{t(item.userName)}</h4>
                                                <p className="text-gray-700 text-[14px] font-inter">
                                                    <span className="">{t("com_telegram")}</span>
                                                    <a href={`https://t.me/${item.telegram}`} className="font-semibold hover:text-blue-500">@{item.telegram}</a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-[30px] text-gray-400">
                                            <RiDoubleQuotesR />
                                        </div>
                                    </div>
                                    <hr className="border-blue-200 mt-[5px]" />
                                    <div className="mt-[10px]">
                                        <p className="text-[14px] text-gray-600">
                                            {t(item.comment)}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </AnimateBox>
            </Container>
        </section>
    )
}

export default Comments
