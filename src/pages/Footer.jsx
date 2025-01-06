import { AiFillPhone, AiFillYoutube } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import { navData } from "../config/const";
import { useTranslation } from "react-i18next";
import { MdLocationOn } from "react-icons/md";
import AnimateBox from "../components/page-comp/AnimateBox";

const Footer = () => {
    const [path, setPath] = useState(window.location.hash);
    const { t } = useTranslation()
    useEffect(() => {
        const handlePathChange = () => setPath(window.location.hash);
        window.addEventListener("popstate", handlePathChange);
        return () => {
            window.removeEventListener("popstate", handlePathChange);
        };
    }, []);
    return (
        <section className="pt-[30px] pb-[20px] bg-gray-100 text-gray-700 border-t-[1px] border-gray-200" id="footer">
            <Container type={"main"}>
                <AnimateBox>
                    <div className='flex justify-between gap-2 mb-[15px]'>
                        <div className='flex-1 flex justify-start flex-col gap-2'>
                            <img className="object-contain max-w-[120px] lg:max-w-[150px]" src="https://res.cloudinary.com/dss0yvhhr/image/upload/v1735374370/logo-afc13476_rxxs7v.png" alt="comfort-cleaning" />
                            <p className='text-[14px]'>
                                {t("foot_excerpt-title-1")}
                            </p>
                            <div className="grid grid-cols-2 gap-1">
                                <a href="" className="flex items-center hover:text-primary-700 gap-2 text-[20px] duration-150 cursor-pointer">
                                    <BsTelegram />
                                    <span className="text-[14px]">telegram</span>
                                </a>
                                <a href="" className="flex items-center hover:text-primary-700 gap-2 text-[22px] duration-150 cursor-pointer">
                                    <AiFillInstagram />
                                    <span className="text-[14px]">instagram</span>
                                </a>
                                <a href="" className="flex items-center hover:text-primary-700 gap-2 text-[20px] duration-150 cursor-pointer">
                                    <BsFacebook />
                                    <span className="text-[14px]">facebook</span>
                                </a>
                                <a href="" className="flex items-center hover:text-primary-700 gap-2 text-[20px] duration-150 cursor-pointer">
                                    <AiFillYoutube />
                                    <span className="text-[14px]">YouTube</span>
                                </a>
                            </div>
                        </div>
                        <div className='flex-1 hidden sm:flex justify-center pt-[10px]'>
                            <div className="flex flex-col gap-1 w-[50%]">
                                <h5 className="text-[20px] font-semibold text-gray-800">{t("foot_main-title-1")}</h5>
                                <hr className="border-gray-200" />
                                <ul className='text-[16px] flex  flex-col'>
                                    {navData.map(item => (
                                        <li key={item.id}>
                                            <a href={`#${item.path}`} className={`${path == `#${item.path}` ? "text-primary-600 hover:text-primary-700 font-semibold" : "text-gray-800 hover:text-primary-700"} hover:text-primary-600 duration-150`}>{t(item.title)}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='flex-1 hidden lg:flex justify-center pt-[10px]'>
                            <div className="flex flex-col gap-1 w-[70%]">
                                <h5 className="text-[20px] font-semibold text-gray-800">{t("foot_main-title-2")}</h5>
                                <hr className="border-gray-200" />
                                <div className="flex flex-col gap-1">
                                    <a href="https://maps.app.goo.gl/dGV5MCy4yKqmyNZR6" target="_blank" className="flex  justify-start text-[14px] items-center gap-2 text-gray-600 hover:text-primary-700">
                                        <span className="text-[20px] drop-shadow-sm"><MdLocationOn /></span>
                                        <span className="drop-shadow-md font-semibold">{t("cont_location")}</span>
                                    </a>
                                    <a href="tel:+998950003080" className="flex justify-start text-[14px]  items-center gap-2 text-gray-600 hover:text-primary-700">
                                        <span className="text-[20px] drop-shadow-sm">
                                            <AiFillPhone />
                                        </span>
                                        <span className="drop-shadow-md font-inter">+998-95-000-30-80</span>
                                    </a>
                                    <a href="tel:+998950603080" className="flex justify-start text-[14px]  items-center gap-2 text-gray-600 hover:text-primary-700">
                                        <span className="text-[20px] drop-shadow-sm">
                                            <AiFillPhone />
                                        </span>
                                        <span className="drop-shadow-md font-inter">+998-99-060-30-80</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="border-gray-300" />
                    <div className="flex flex-col items-center justify-center text-[14px] mt-[15px]">
                        <span className="text-center">Comfort Cleaning</span>
                        <span className="text-center">© {t("foot_excerpt-title-2")}</span>
                    </div>
                </AnimateBox>
            </Container>
        </section>
    )
}

export default Footer
