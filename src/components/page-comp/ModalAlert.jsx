import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ContactForm from './ContactForm'
import { toggleModal } from '../../app/features/global/globalSlice'
import { useTranslation } from 'react-i18next'
import { CgClose } from 'react-icons/cg'

const ModalAlert = () => {
    const { isModalOpen: modal } = useSelector(state => state.global)
    const [modalHide, setModalHide] = useState(modal)
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const timeoutRef = React.useRef(null);

    useEffect(() => {
        if (modal) {
            setModalHide(true)
        } else {
            timeoutRef.current = setTimeout(() => {
                setModalHide(prev => !prev)
            }, 300)
        }
        return () => clearTimeout(timeoutRef.current) 
    }, [modal])



    return (
        <div className={`${modal ? "block" : "hidden"}`}>
            <div onClick={() => dispatch(toggleModal())} className={`${modalHide ? "opacity-100" : "opacity-0"} duration-300 fixed top-0 left-0 right-0 bottom-0 backdrop-brightness-50 backdrop-blur-[1px]`}>

            </div>
            <div className={` bg-white fixed  duration-300 w-[90%] min-w-[300px] top-[50%] left-[50%] max-w-[400px] translate-x-[-50%] ${modalHide ? "scale-100 opacity-1 translate-y-[-50%]" : "translate-y-[-40%] scale-90 opacity-0"} rounded-md shadow-md border-gray-200`}>
                <ContactForm type="modal" />
            </div>
        </div>
    )
}

export default ModalAlert
