import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from '../../app/features/global/globalSlice'
import uzb from "../../assets/uzb.png"
import rus from "../../assets/rus.png"
import { useTranslation } from 'react-i18next'

const SelectedLang = () => {
    const langData = [
        {
            id: 1,
            title: "uzb",
            image: uzb
        },
        {
            id: 2,
            title: "rus",
            image: rus
        }
    ]
    const { isLanguage: lang } = useSelector(state => state.global)
    const dispatch = useDispatch()
    const { t, i18n } = useTranslation()
    function selectedLanguage(lng) {
        i18n.changeLanguage(lng)
        dispatch(setLanguage(lng))
    }

    return (
        <button onClick={() => selectedLanguage(lang === "uzb" ? "rus" : "uzb")} className='px-[5px] py-[4px] border-[1px] border-gray-200 cursor-pointer hover:bg-gray-100 active:bg-gray-200 font-semibold rounded-sm md:rounded-md flex justify-center items-center gap-1'>
            {lang === "uzb" ?
                <>
                    <img className='max-w-[18px] max-h-[18px] object-contain' src={langData[0]?.image} alt="image" />
                    <span className='text-[14px] font-bold'>UZB</span>
                </>
                :
                <>
                    <img className='max-w-[18px] max-h-[18px] object-contain' src={langData[1]?.image} alt="image" />
                    <span className='text-[14px] font-bold'>RUS</span>
                </>}
        </button>
    )
}

export default SelectedLang
