import React from 'react'
import Container from '../components/Container'
import { useTranslation } from 'react-i18next'
import { BiPhoneCall } from 'react-icons/bi'
import SwiperImage from '../components/page-comp/SwiperImage'

const Home = () => {
    const { t } = useTranslation()
    return (
        <main className='py-[20px] bg-[url("")] bg-no-repeat bg-cover bg-center min-h-[calc(100vh-150px)] max-h-[700px]'>
            <Container type={"main"}>
                <div className='flex justify-between gap-[20px] flex-col md:flex-row'>
                    <div className='flex-[1.3] lg:flex-1 flex flex-col justify-center gap-[10px]'>
                        <p className='text-[20px] md:text-[25px] lg:text-[35px] text-pink-600 font-bold'>{t("home_excerpt-title")}</p>
                        <h2 className='text-[50px] md:text-[60px] lg:text-[70px] font-bold text-primary-600 leading-[50px] md:leading-[60px] lg:leading-[75px]'>
                            {t("home_main-title")}
                        </h2>
                        <p className='font-semibold text-gray-600 text-[12px] md:text-[14px] lg:text-[16px]'>
                            {t("home_desc-title")}
                        </p>
                        <div className='mt-[10px]'>
                            <button className='btn-primary'>
                                <BiPhoneCall />
                                <span>{t("contact")}</span>
                            </button>
                        </div>
                    </div>
                    <div className='flex-1 md:max-w-[40%] lg:max-w-[50%] hidden md:block'>
                        <SwiperImage />
                    </div>
                    <div className='flex-1 block md:hidden'>
                        <img className='h-full w-full max-h-[300px] min-h-[250px] object-cover rounded-md shadow-md border-[1px] border-gray-200'
                            src="https://res.cloudinary.com/dss0yvhhr/image/upload/v1735487999/machine-cleaning-the-carpet-Fort-Wayne-IN_ce9ov0.jpg" alt="" />
                    </div>
                </div>
            </Container>
        </main>
    )
}

export default Home
