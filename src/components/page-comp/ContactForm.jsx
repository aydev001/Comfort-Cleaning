import { CgSpinner } from "react-icons/cg"; 
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { toggleModal } from '../../app/features/global/globalSlice'
import { CgClose } from 'react-icons/cg'
import { Formik } from 'formik'
import * as Yup from 'yup';
import { useMask } from '@react-input/mask';
import Swal from 'sweetalert2'


const ContactForm = ({ type }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const yupValidation = Yup.object({
        userName: Yup.string().max(15, "Maksimal 15 ta belgi").required("Ismingizni kiriting"),
        phoneNumber: Yup.string().min(19, "Raqamni toliq yozing").required("Telefon raqamingizni kiriting")
    })

    const inputRef = useMask({
        mask: '+998 (__) ___-__-__',
        replacement: { _: /\d/ },
    });

    const handleSubmit = async (values, resetForm, setSubmitting) => {

        const message = `
          🙋🏻‍♂️Yangi mijoz ma'lumotlari:

  _Ism:_  *${values.userName}*
  _Tel:_  *${values.phoneNumber}*

        `;

        const token = "7841858843:AAH0g6lJTZ6jmJnAihhkVgFW9XF1JHU8Wuo"; // O'zingizning bot tokeningizni kiriting
        const chatId = "1427666666"; // O'zingizning chat ID'ingizni kiriting

        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}&parse_mode=Markdown`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            Swal.fire({
                position: "center",
                icon: "success",
                title: t("alert_success"),
                showConfirmButton: false,
                timer: 2000
            });
            setSubmitting(false)
            dispatch(toggleModal())
            resetForm()
        } catch (error) {
            console.error("Xatolik:", error);
        }
    };

    return (
        <div className={`bg-white rounded-md p-[15px] border-[1px] flex flex-col gap-[10px]  shadow-sm`}>
            <div className='flex justify-between items-center gap-2'>
                <h4 className='text-[18px] font-semibold text-gray-900'>{t("cont_form-main-title")}</h4>
                {type == "modal" && <button onClick={() => dispatch(toggleModal())} className="p-[4px] border-[1px] text-[20px] border-gray-200 rounded-sm hover:bg-gray-100 active:bg-gray-200">
                    <CgClose />
                </button>}
            </div>
            <div>
                <Formik
                    initialValues={{ userName: '', phoneNumber: '' }}
                    onSubmit={(values, { resetForm, setSubmitting }) => {
                        handleSubmit(values, resetForm, setSubmitting)
                    }}
                    validationSchema={yupValidation}
                >{({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                }) => (
                    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                        <div className='flex flex-col'>
                            <label className='text-[13px] font-semibold text-gray-700' htmlFor="user-name">{t("cont_form-label-name-1")}</label>
                            <input
                                name='userName'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.userName}
                                className={`px-[10px] duration-100 focus:bg-white py-[5px] bg-gray-50 outline-none text-[14px] rounded-[5px] border-[2px] ${errors.userName && touched.userName ? "border-red-400 focus:border-red-500 hover:border-red-300" : "border-gray-300 focus:border-blue-600 hover:border-blue-300"}`} type="text" placeholder={t("cont_form-label-name-1")} id='user-name' />
                            <span className='text-[12px] text-red-600'>{errors.userName && touched.userName && errors.userName}</span>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-[13px] font-semibold text-gray-700' htmlFor="phone-number">{t("cont_form-label-phone-1")}</label>
                            <input
                                ref={inputRef}
                                value={values.phoneNumber}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="phoneNumber"
                                className={`px-[10px] duration-100 font-sans focus:bg-white py-[5px] bg-gray-50 outline-none text-[14px] rounded-[5px] border-[2px] ${errors.phoneNumber && touched.phoneNumber
                                    ? "border-red-400 focus:border-red-500 hover:border-red-300"
                                    : "border-gray-300 focus:border-blue-600 hover:border-blue-300"
                                    }`}
                                type="tel"
                                placeholder="+998(99)123-45-67"
                                id="phone-number"
                            />
                            <span className='text-[12px] text-red-600'>{errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}</span>
                        </div>
                        <div className='flex justify-end'>
                            <button type="submit" disabled={isSubmitting} className='bg-blue-600 flex justify-center items-center gap-1 rounded-[100px] duration-100 text-white font-semibold text-[14px] px-[20px] py-[7px] hover:bg-blue-700 active:bg-blue-500'>
                                {
                                    isSubmitting && <span className="text-[16px] animate-spin"><CgSpinner /></span>
                                }
                                {t("send_button")}
                            </button>
                        </div>
                    </form>
                )}</Formik>
            </div>
        </div>
    )
}

export default ContactForm
