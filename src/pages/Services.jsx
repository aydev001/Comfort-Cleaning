import { MdCleanHands } from "react-icons/md";
import React from 'react'
import { useTranslation } from 'react-i18next'
import AnimateBox from '../components/page-comp/AnimateBox'
import AnimateCards from '../components/page-comp/AnimateCards'
import Container from '../components/Container'
import { BiPhoneCall } from "react-icons/bi";
import { servicesData } from "../config/const";
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

const Services = () => {
    const { t } = useTranslation()

    const FIRST_IMAGE = {
        imageUrl: 'https://res.cloudinary.com/dss0yvhhr/image/upload/v1735910483/1_jyecwa.jpg'
    };
    const SECOND_IMAGE = {
        imageUrl: 'https://res.cloudinary.com/dss0yvhhr/image/upload/v1735910438/2_kynnau.jpg'
    };

    const delimiterIconStyles = {
        width: '30px',
        height: '30px',
        backgroundSize: 'contain',
        borderRadius: 'none',
        backgroundImage: 'url("https://cdn-icons-png.freepik.com/512/11568/11568116.png")',
        cursor: "w-resize"
    }

    return (
        <section className="py-[20px] pt-[10px]" id="services">
            <Container type={"main"}>
                <div>
                    <AnimateBox>
                        <h2 className="text-[25px] lg:text-[28px] font-bold text-primary-700 flex justify-start items-start sm:items-center flex-col sm:flex-row sm:gap-2">
                            <div className="flex justify-start items-center gap-1">
                                <span>{t("serv_main-title")}</span>
                                <MdCleanHands />
                            </div>
                            <div className='text-[18px] font-bold text-pink-700'>({t("serv_excerpt-title")})</div>
                        </h2>
                    </AnimateBox>
                    <hr className="mb-[15px]" />
                    <AnimateCards variant={"top"} classNames="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[15px]">
                        {
                            servicesData.map(item => (
                                <div key={item.id} className="h-full hover:shadow-lg bg-white p-[10px] flex flex-col border-[1px] border-gray-200 shadow-md rounded-[30px] overflow-hidden group">
                                    <div className="max-h-[210px] min-h-[210px] rounded-[9%_10%_58%_6%_/_10%_9%_51%_7%] overflow-hidden rounded-t-[22px] shadow-sm border-[1px] border-gray-200">
                                        <img className="h-full w-full object-cover duration-[400ms] scale-110 group-hover:scale-100 ease-linear" src={item.image} alt="" />
                                    </div>
                                    <div className="p-[15px] flex justify-center items-center gap-2 flex-col">
                                        <h3 className="text-primary-700 text-[20px] font-bold text-center leading-[25px]">
                                            {t(item.title)}
                                        </h3>
                                        <div className="mt-[10px]">
                                            <button className='btn-primary'>
                                                <BiPhoneCall />
                                                <span>{t("contact")}</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </AnimateCards>
                    <AnimateBox>
                        <div className="flex justify-between items-center gap-2">
                            <div className="text-[18px] font-bold text-gray-800 hidden lg:block">
                                {t("serv_before-title")}
                            </div>
                            <div className="mt-[15px] max-w-[1100px] overflow-hidden rounded-lg shadow-sm border-[1px] border-gray-200">
                                <ReactBeforeSliderComponent
                                    firstImage={FIRST_IMAGE}
                                    secondImage={SECOND_IMAGE}
                                    delimiterIconStyles={delimiterIconStyles}
                                />
                            </div>
                            <div className="text-[18px] font-bold text-gray-800 hidden lg:block">
                                {t("serv_after-title")}
                            </div>
                        </div>
                    </AnimateBox>
                </div>
            </Container>
        </section>
    )
}

export default Services
