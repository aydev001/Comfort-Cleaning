import { TbMedal } from "react-icons/tb";
import { TiFlashOutline } from "react-icons/ti";
import { MdOutlineHandshake } from "react-icons/md";
import Container from "../components/Container";
import AnimateBox from "../components/page-comp/AnimateBox";
import AnimateCards from "../components/page-comp/AnimateCards";
import { BiPhoneCall } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { toggleModal } from "../app/features/global/globalSlice";

const WhyUs = () => {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    return (
        <section className="py-[20px] pt-[10px]" id="why-us">
            <Container type={"main"}>
                <div>
                    <AnimateBox>
                        <h2 className="text-[25px] lg:text-[28px] font-bold text-primary-700">{t("why_main-title")}</h2>
                    </AnimateBox>
                    <hr className="mb-[15px]" />
                    <AnimateCards classNames="flex justify-between gap-[15px] flex-col md:flex-row">
                        <div className="p-[10px] h-full hover:shadow-lg bg-white hover:border-gray-300 flex flex-col gap-[10px] border-[1px] border-gray-200 shadow-md rounded-md">
                            <div className="text-[40px]  text-primary-600">
                                <TiFlashOutline />
                            </div>
                            <h4 className="text-[18px] lg:text-[20px] font-bold text-gray-800">{t("why_excerpt-title-1")}</h4>
                            <p className="text-[12px] lg:text-[14px] text-gray-600 font-semibold">
                                {t("why_desc_title-1")}
                            </p>
                        </div>
                        <div className="p-[10px] h-full hover:shadow-lg bg-white hover:border-gray-300 flex flex-col gap-[10px] border-[1px] border-gray-200 shadow-md rounded-md">
                            <div className="text-[40px]  text-primary-600">
                                <TbMedal />
                            </div>
                            <h4 className="text-[18px] lg:text-[20px] font-bold text-gray-800">{t("why_excerpt-title-2")}</h4>
                            <p className="text-[12px] lg:text-[14px] text-gray-600 font-semibold">
                                {t("why_desc_title-2")}
                            </p>
                        </div>
                        <div className="p-[10px] h-full hover:shadow-lg bg-white hover:border-gray-300 flex flex-col gap-[10px] border-[1px] border-gray-200 shadow-md rounded-md">
                            <div className="text-[40px]  text-primary-600">
                                <MdOutlineHandshake />
                            </div>
                            <h4 className="text-[18px] lg:text-[20px] font-bold text-gray-800">{t("why_excerpt-title-3")}</h4>
                            <p className="text-[12px] lg:text-[14px] text-gray-600 font-semibold">
                                {t("why_desc_title-3")}
                            </p>
                        </div>
                    </AnimateCards>
                </div>
                <div className="mt-[15px] rounded-md overflow-hidden shadow-md bg-cover bg-[url('https://res.cloudinary.com/dss0yvhhr/image/upload/v1735730796/fon-1-a967294a_boaqoo.jpg')]">
                    <AnimateCards variant="top" classNames="w-full sm:w-[75%] p-[20px] md:p-[25px] bg-gradient-to-r from-indigo-700 from-0% text-white lg:w-[60%] flex flex-col gap-[10px] md:gap-[20px] justify-between font-inter">
                        <h2 className=" text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-bold drop-shadow-lg">
                            {t("why_add-main-title")}
                        </h2>
                        <p className="drop-shadow-md max-w-[470px] text-[14px] md:text-[16px]">
                        {t("why_add-desc-title")}
                        </p>
                        <ul className="flex flex-col gap-[10px]">
                            <li>
                                <a className="font-bold drop-shadow-lg hover:text-primary-100" href="tel:+998950003080">+998-95-000-30-80</a>
                            </li>
                            <li>
                                <a className="font-bold drop-shadow-lg hover:text-primary-100" href="tel:+998990603080">+998-99-060-30-80</a>
                            </li>
                        </ul>
                        <div>
                            <button onClick={() => dispatch(toggleModal())} className='btn-primary'>
                                <BiPhoneCall />
                                <span>{t("contact")}</span>
                            </button>
                        </div>
                    </AnimateCards>
                </div>
            </Container>
        </section>
    )
}

export default WhyUs
