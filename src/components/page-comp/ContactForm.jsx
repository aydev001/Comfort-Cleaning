import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { toggleModal } from '../../app/features/global/globalSlice'
import { CgClose } from 'react-icons/cg'

const ContactForm = ({ type }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    return (
        <div className={`bg-white rounded-md p-[15px] border-[1px] flex flex-col gap-[10px]  shadow-sm`}>
            <div className='flex justify-between items-center gap-2'>
                <h4 className='text-[18px] font-semibold text-gray-900'>{t("cont_form-main-title")}</h4>
                {type=="modal" && <button onClick={() => dispatch(toggleModal())} className="p-[4px] border-[1px] text-[20px] border-gray-200 rounded-sm hover:bg-gray-100 active:bg-gray-200">
                    <CgClose />
                </button>}
            </div>
            <div>
                <form className='flex flex-col gap-3'>
                    <div className='flex flex-col'>
                        <label className='text-[12px] font-semibold text-gray-700' htmlFor="user-name">{t("cont_form-label-name-1")}</label>
                        <input required className='px-[10px] duration-100 focus:bg-white py-[5px] bg-gray-50 outline-none text-[14px] rounded-[5px] border-[2px] border-gray-300 focus:border-blue-600 hover:border-blue-300' type="text" placeholder={t("cont_form-label-name-1")} id='user-name' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-[12px] font-semibold text-gray-700' htmlFor="phone-number">{t("cont_form-label-phone-1")}</label>
                        <input required className='px-[10px] duration-100 font-sans focus:bg-white py-[5px] bg-gray-50 outline-none text-[14px] rounded-[5px] border-[2px] border-gray-300 focus:border-blue-600 hover:border-blue-300' type="number" placeholder='+998991234567' id='phone-number' />
                    </div>
                    <div className='flex justify-end'>
                        <button className='bg-blue-600 rounded-[100px] duration-100 text-white font-semibold text-[14px] px-[20px] py-[7px] hover:bg-blue-700 active:bg-blue-500'>
                            {t("send_button")}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
