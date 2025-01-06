import { AiOutlineMenu } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import React, { useEffect, useState } from 'react'
import Container from './Container'
import SelectedLang from './page-comp/SelectedLang'
import DrawerSlide from "./page-comp/DrawerSlide";
import { useDispatch } from "react-redux";
import { toggleDrawer, toggleModal } from "../app/features/global/globalSlice";
import { navData } from "../config/const";
import { useTranslation } from "react-i18next";
import ModalAlert from "./page-comp/ModalAlert";

const Header = () => {
    const dispatch = useDispatch()
    const { t, i18n } = useTranslation()

    const [path, setPath] = useState(window.location.hash);

    useEffect(() => {
        const handlePathChange = () => {
            setPath(window.location.hash)
        };
        window.addEventListener("popstate", handlePathChange);
        window.location = path? `/${path}` : `/#main`
        return () => {
            window.removeEventListener("popstate", handlePathChange);
        };
        
    }, []);

    return (
        <header className="border-b-[1px] border-gray-200 relative shadow-md z-10 bg-white">
            <Container>
                <div className='flex justify-between items-center gap-[15px] h-[60px]'>
                    <div>
                        <img className="object-contain max-w-[120px] lg:max-w-[150px]" src="https://res.cloudinary.com/dss0yvhhr/image/upload/v1735374370/logo-afc13476_rxxs7v.png" alt="comfort-cleaning" />
                    </div>
                    <nav className='flex justify-end items-center gap-[10px] lg:gap-[20px]'>
                        <ul className='hidden text-[14px] lg:text-[16px] md:flex justify-end items-center gap-[8px] md:gap-[15px]'>
                            {navData.map(item => (
                                <li key={item.id}>
                                    <a href={`/#${item.path}`} className={`${path==`#${item.path}`? "text-primary-600 hover:text-primary-700 font-semibold" : "text-gray-800 hover:text-primary-700"} duration-150`}>{t(item.title)}</a>
                                </li>
                            ))}
                        </ul>
                        <SelectedLang />
                        <button onClick={() => dispatch(toggleModal())} className='btn-primary-menu'>
                            <BiPhoneCall />
                            <span>{t("contact")}</span>
                        </button>
                        <button onClick={() => dispatch(toggleDrawer())} className="p-[5px] md:hidden border-[1px] text-[20px] border-gray-200 rounded-sm hover:bg-gray-100 active:bg-gray-200">
                            <AiOutlineMenu />
                        </button>
                    </nav>
                </div>
            </Container>
            <DrawerSlide />
            <ModalAlert/>
        </header>
    )
}

export default Header
