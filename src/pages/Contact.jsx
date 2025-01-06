import { AiFillPhone } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import React from 'react'
import { useTranslation } from 'react-i18next'
import Container from "../components/Container";
import AnimateBox from "../components/page-comp/AnimateBox";
import ContactForm from "../components/page-comp/ContactForm";


const Contact = () => {
    const { t } = useTranslation()
    return (
        <section className="py-[20px] pt-[10px] mb-7" id="contact">
            <Container type={"main"}>
                <div className="p-[15px] md:p-[20px] lg:p-[25px] border-[1px] rounded-lg bg-gradient-to-br from-indigo-500 from-0% via-cyan-600 via-50% to-indigo-600 to-100%">
                    <AnimateBox>
                        <h2 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-white flex justify-start items-start sm:items-center flex-col sm:flex-row sm:gap-2">
                            <div className="flex justify-start items-center gap-1">
                                <span>{t("cont_main-title")}</span>
                                <RiMessage2Fill className="hidden sm:block"/>
                            </div>
                        </h2>
                    </AnimateBox>
                    <hr className="mb-[20px] border-blue-400" />
                    <AnimateBox>
                        <div className="flex justify-between gap-2 lg:gap-3 flex-col md:flex-row">
                            <div className="flex-[1.5] lg:flex-[1.2] flex flex-col gap-3">
                                <ContactForm />
                                <div className="font-sans hidden md:flex flex-col gap-1">
                                    <a href="https://maps.app.goo.gl/dGV5MCy4yKqmyNZR6" target="_blank" className="flex hover:text-blue-200 justify-start items-center text-white font-semibold gap-2">
                                        <span className="text-[20px]"><MdLocationOn /></span>
                                        <span>{t("cont_location")}</span>
                                    </a>
                                    <a href="tel:+998950003080" className="flex justify-start hover:text-blue-200 items-center text-white font-semibold gap-2">
                                        <span className="text-[20px]">
                                            <AiFillPhone />
                                        </span>
                                        <span>+998-95-000-30-80</span>
                                    </a>
                                    <a href="tel:+998950603080" className="flex justify-start hover:text-blue-200 items-center text-white font-semibold gap-2">
                                        <span className="text-[20px]">
                                            <AiFillPhone />
                                        </span>
                                        <span>+998-99-060-30-80</span>
                                    </a>
                                </div>
                            </div>
                            <div className="flex-[1.5] border-[1px] shadow-sm rounded-md overflow-hidden">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.4783302096093!2d69.2387797755103!3d41.36369129746544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8de46de1ffc5%3A0x88cd1353d37f4a58!2sComfort%20Clean!5e0!3m2!1sen!2s!4v1736147627606!5m2!1sen!2s" width={"100%"} height="100%" loading="lazy"></iframe>
                            </div>

                        </div>
                    </AnimateBox>
                </div>
            </Container>
        </section>
    )
}

export default Contact
