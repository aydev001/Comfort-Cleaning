import { BsPhoneVibrateFill } from "react-icons/bs";
import { SiWasmer } from "react-icons/si";
import React from 'react'
import { useTranslation } from 'react-i18next'
import Container from '../components/Container'
import AnimateBox from '../components/page-comp/AnimateBox'
import { workProcessData } from "../config/const";
import AnimateCards from "../components/page-comp/AnimateCards";

const WorkProcess = () => {
  const { t } = useTranslation()
  return (
    <section className="py-[20px] pt-[10px]" id="work-process">
      <Container type={"main"}>
        <div>
          <AnimateBox>
            <h2 className="text-[25px] lg:text-[28px] font-bold text-primary-700 flex justify-start items-start sm:items-center flex-col sm:flex-row sm:gap-2">
              <div className="flex justify-start items-center gap-1">
                <span>{t("work_main-title")}</span>
                <SiWasmer />
              </div>
            </h2>
          </AnimateBox>
          <hr className="mb-[15px]" />
          <AnimateBox>
            <div className="grid grid-cols-1 grid-rows-7 sm:grid-cols-4 sm:grid-rows-4 md:grid-cols-6 md:grid-rows-3 lg:grid-cols-8 lg:grid-rows-2 gap-[15px]">
            {workProcessData.map(item => (
              <div key={item.id} className={`border-[1px] border-gray-200 h-full shadow-md rounded-lg p-[15px] min-h-[120px] ${item.nameClass}`}>
                <div className="flex justify-start items-center gap-[10px]">
                  <span className="text-primary-700 text-[24px]">
                    {item.icon()}
                  </span>
                  <span className="text-gray-900 text-[20px] font-bold">
                    {t(item.title)}
                  </span>
                </div>
                <hr />
                <p className="text-gray-600 text-[14px] font-semibold mt-[10px]">
                  {t(item.description)}
                </p>
              </div>
            ))}
          </div>
          </AnimateBox>
        </div>
      </Container>
    </section>
  )
}

export default WorkProcess
