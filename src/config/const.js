import { GiHandTruck } from "react-icons/gi";
import { FaTruckMoving } from "react-icons/fa";
import { HiTruck } from "react-icons/hi";
import { FaTruck } from "react-icons/fa";
import { MdDryCleaning } from "react-icons/md";
import { MdCleanHands } from "react-icons/md";
import { RiRoadMapFill } from "react-icons/ri";
import { BsPersonFillCheck } from "react-icons/bs";
import { BsFillClipboard2CheckFill } from "react-icons/bs";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
export const navData = [
    {
        id: 1,
        title: "nav_main",
        path: "main"
    },
    {
        id: 2,
        title: "nav_why-us",
        path: "why-us"
    },
    {
        id: 3,
        title: "nav_services",
        path: "services"
    },
    {
        id: 4,
        title: "nav_comments",
        path: "comments"
    },
    {
        id: 5,
        title: "nav_faq",
        path: "faq"
    }
]


export const servicesData = [
    {
        id: 1,
        image: "https://res.cloudinary.com/dss0yvhhr/image/upload/v1735836905/sofa_gdtqr7.jpg",
        title: "serv_card-title-1"
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dss0yvhhr/image/upload/v1735836871/1_188_big_eqo3m2.jpg",
        title: "serv_card-title-2"
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/dss0yvhhr/image/upload/v1735493836/Carpet_20Cleaning_zgo9mu.jpg",
        title: "serv_card-title-3"
    },
    {
        id: 4,
        image: "https://res.cloudinary.com/dss0yvhhr/image/upload/v1735838339/Blankets-scaled-1_jk7tyx.webp",
        title: "serv_card-title-4"
    }
]

export const workProcessData = [
    {
        id: 1,
        title: "work_card-main-title-1",
        description: "work_card-desc-title-1",
        icon: BsFillPhoneVibrateFill,
        nameClass:
            "sm:col-span-2 sm:col-start-none sm:row-start-none " +
            "md:col-span-2 md:col-start-none md:row-start-none " +
            "lg:col-span-2 lg:col-start-none lg:row-start-none"
    },
    {
        id: 2,
        title: "work_card-main-title-2",
        description: "work_card-desc-title-2",
        icon: BsPersonFillCheck,
        nameClass:
            "sm:col-span-2 sm:col-start-3 sm:row-start-none " +
            "md:col-span-2 md:col-start-3 md:row-start-none " +
            "lg:col-span-2 lg:col-start-3 lg:row-start-none"
    },
    {
        id: 3,
        title: "work_card-main-title-3",
        description: "work_card-desc-title-3",
        icon: BsFillClipboard2CheckFill,
        nameClass:
            "sm:col-span-2 sm:col-start-none sm:row-start-2 " +
            "md:col-span-2 md:col-start-5 md:row-start-1 " +
            "lg:col-span-2 lg:col-start-5 lg:row-start-1"
    },
    {
        id: 4,
        title: "work_card-main-title-4",
        description: "work_card-desc-title-4",
        icon: RiRoadMapFill,
        nameClass:
            "sm:col-span-2 sm:col-start-3 sm:row-start-2 " +
            "md:col-span-2 md:col-start-1 md:row-start-2 " +
            "lg:col-span-2 lg:col-start-7 lg:row-start-1"
    },
    {
        id: 5,
        title: "work_card-main-title-5",
        description: "work_card-desc-title-5",
        icon: MdCleanHands,
        nameClass:
            "sm:col-span-2 sm:col-start-none sm:row-start-3 " +
            "md:col-span-2 md:col-start-3 md:row-start-2 " +
            "lg:col-span-2 lg:col-start-2 lg:row-start-2"
    },
    {
        id: 6,
        title: "work_card-main-title-6",
        description: "work_card-desc-title-6",
        icon: MdDryCleaning,
        nameClass:
            "sm:col-span-2 sm:col-start-3 sm:row-start-3 " +
            "md:col-span-2 md:col-start-5 md:row-start-2 " +
            "lg:col-span-2 lg:col-start-4 lg:row-start-2"
    },
    {
        id: 7,
        title: "work_card-main-title-7",
        description: "work_card-desc-title-7",
        icon: FaTruckMoving,
        nameClass:
            "sm:col-span-2 sm:col-start-2 sm:row-start-4 " +
            "md:col-span-4 md:col-start-2 md:row-start-3 " +
            "lg:col-span-2 lg:col-start-6 lg:row-start-2"
    }
];
