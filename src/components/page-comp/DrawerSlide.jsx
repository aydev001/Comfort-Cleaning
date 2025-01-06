import { CgClose } from "react-icons/cg";
import React, { useEffect, useState } from 'react'
import { BiPhoneCall } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer, toggleModal } from "../../app/features/global/globalSlice";
import { navData } from "../../config/const";
import { useTranslation } from "react-i18next";
import SelectedLang from "./SelectedLang";

const DrawerSlide = () => {
  const { isDrawerOpen: drawer } = useSelector(state => state.global)
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const [path, setPath] = useState(window.location.hash);

  useEffect(() => {
    const handlePathChange = () => setPath(window.location.hash);
    window.addEventListener("popstate", handlePathChange);
    return () => {
      window.removeEventListener("popstate", handlePathChange);
    };
  }, []);

  return (
    <div className="md:hidden">
      <div onClick={() => dispatch(toggleDrawer())} className={`${drawer ? "block" : "hidden"} fixed top-0 left-0 right-0 bottom-0  backdrop-brightness-50 backdrop-blur-[1px]`}>

      </div>
      <div className={` bg-white w-[250px] p-[10px] fixed ${drawer ? "right-[5px]" : "right-[-300px]"} duration-500 top-[5px] bottom-[5px] rounded-md shadow-md border-gray-200`}>
        <div className="flex justify-end mb-[10px] gap-[10px]">
          <SelectedLang />
          <button onClick={() => dispatch(toggleDrawer())} className="p-[4px] border-[1px] text-[20px] border-gray-200 rounded-sm hover:bg-gray-100 active:bg-gray-200">
            <CgClose />
          </button>
        </div>
        <hr />
        <div className="mt-[10px]">
          <ul className='text-[16px] flex justify-end items-center flex-col gap-[8px] md:gap-[15px]'>
            {navData.map(item => (
              <li key={item.id}>
                <a href={`#${item.path}`} onClick={() => dispatch(toggleDrawer())} className={`${path==`#${item.path}`? "text-primary-600 hover:text-primary-700 font-semibold" : "text-gray-800 hover:text-primary-700"} hover:text-primary-600 duration-150`}>{t(item.title)}</a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center mt-[20px]">
            <a href="#contact" onClick={() => dispatch(toggleDrawer())} className='btn-primary'>
              <BiPhoneCall />
              <span>{t("contact")}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DrawerSlide
