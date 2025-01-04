import React, { useState } from "react";
import { FcQuestions } from "react-icons/fc";
import { useTranslation } from "react-i18next";
import Container from "../components/Container";
import AnimateBox from "../components/page-comp/AnimateBox";
import AnimateCards from "../components/page-comp/AnimateCards";

const Questions = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(null);

    // FAQ ma'lumotlari
    const faqData = [
        { question: t("faq_question-1"), answer: t("faq_answer-1") },
        { question: t("faq_question-2"), answer: t("faq_answer-2") },
        { question: t("faq_question-3"), answer: t("faq_answer-3") },
        { question: t("faq_question-4"), answer: t("faq_answer-4") },
        { question: t("faq_question-5"), answer: t("faq_answer-5") },
        { question: t("faq_question-6"), answer: t("faq_answer-6") },
    ];

    // Javobni ochish yoki yopish funksiyasi
    const toggleFAQ = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section className="py-5 mb-7" id="faq">
            <Container type="main">
                <div>
                    <AnimateBox>
                        <h2 className="text-[25px] lg:text-[28px] font-bold text-primary-700 flex items-center gap-2">
                            <span>{t("faq_main-title")}</span>
                            <FcQuestions />
                        </h2>
                    </AnimateBox>
                    <hr className="my-4" />
                    <AnimateBox>
                        <div className="flex gap-2">
                            <div className="flex-1 hidden md:flex justify-center items-center border-[1px] rounded-lg shadow-sm">                               
                                <img src="https://img.freepik.com/premium-vector/concept-illustration-frequently-asked-questions-people-around-question-marks-perfect-web-design-banner-mobile-app-landing-page-vector-flat-design_128772-1867.jpg" alt="" />
                            </div>
                            <AnimateCards classNames="space-y-2 flex-[1.7] lg:flex-[2.5]">
                                {faqData.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`border rounded-md shadow-sm overflow-hidden ${activeIndex === index ? "border-blue-100" : "border-gray-200"}`}
                                    >
                                        {/* Savol */}
                                        <button
                                            onClick={() => toggleFAQ(index)}
                                            className={`w-full text-[16px] text-left p-2 px-3 font-bold text-gray-900 flex justify-between items-center ${activeIndex === index ? "bg-blue-100" : "bg-gray-50"}`}
                                        >
                                            {item.question}
                                            <span className="text-xl">
                                                {activeIndex === index ? "-" : "+"}
                                            </span>
                                        </button>

                                        {/* Javob */}
                                        {activeIndex === index && (
                                            <div className="p-2 px-3 text-gray-700 font-medium text-[14px]">
                                                {item.answer}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </AnimateCards>
                        </div>
                    </AnimateBox>
                </div>
            </Container>
        </section>
    );
};

export default Questions;
