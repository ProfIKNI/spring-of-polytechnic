import PhonePage1Part1 from "../assets/comics_phone_page_1_part_01.png";
import PhonePage1Part2 from "../assets/comics_phone_page_1_part_02.png";
import PhonePage1Part3 from "../assets/comics_phone_page_1_part_03.png";
import PhonePage1Part4 from "../assets/comics_phone_page_1_part_04.png";
import PhonePage1Part5 from "../assets/comics_phone_page_1_part_05.png";
import PhonePage2Part1 from "../assets/comics_phone_page_2_part_01.png";
import PhonePage2Part2 from "../assets/comics_phone_page_2_part_02.png";
import PhonePage3Part1 from "../assets/comics_phone_page_3_part_01.png";
import PhonePage3Part2 from "../assets/comics_phone_page_3_part_02.png";
import PhonePage3Part3 from "../assets/comics_phone_page_3_part_03.png";
import PhonePage3Part4 from "../assets/comics_phone_page_3_part_04.png";
import PcPage1Part1 from "../assets/comics_pc_page_1_part_01.png";
import PcPage1Part2 from "../assets/comics_pc_page_1_part_02.png";
import PcPage1Part3 from "../assets/comics_pc_page_1_part_03.png";
import PcPage1Part4 from "../assets/comics_pc_page_1_part_04.png";
import PcPage1Part5 from "../assets/comics_pc_page_1_part_05.png";
import PcPage2Part1 from "../assets/comics_pc_page_2_part_01.png";
import PcPage2Part2 from "../assets/comics_pc_page_2_part_02.png";
import PcPage3Part1 from "../assets/comics_pc_page_3_part_01.png";
import PcPage3Part2 from "../assets/comics_pc_page_3_part_02.png";
import PcPage3Part3 from "../assets/comics_pc_page_3_part_03.png";
import PcPage3Part4 from "../assets/comics_pc_page_3_part_04.png";

export interface ComicsPage {
    img: string;
    animated?: string;
    cursor?: string;
}

export const PhoneComicsPages: ComicsPage[] =[
    {
        img: PhonePage1Part1,
        cursor: "top-1/5 right-1/5"
    },
    {
        img: PhonePage1Part2,
        cursor: "top-1/2 right-1/2"
    },
    {
        img: PhonePage1Part3,
        cursor: "top-4/5 left-1/5"
    },
    {
        img: PhonePage1Part4,
        cursor: "top-4/5 right-1/5"
    },
    {
        img: PhonePage1Part5
    },
    {
        img: PhonePage2Part1,
        animated: PhonePage2Part2
    },
    {
        img: PhonePage3Part1,
        cursor: "top-4/5 right-1/2"
    },
    {
        img: PhonePage3Part2,
        cursor: "top-1/5 right-1/2"
    },
    {
        img: PhonePage3Part3,
        cursor: "top-1/2 right-1/5"
    },
    {
        img: PhonePage3Part4,
    }
]

export const PcComicsPages: ComicsPage[] =[
    {
        img: PcPage1Part1,
        cursor: "top-3/5 left-1/5"
    },
    {
        img: PcPage1Part2,
        cursor: "top-1/2 right-1/2"
    },
    {
        img: PcPage1Part3,
        cursor: "top-1/5 right-1/5"
    },
    {
        img: PcPage1Part4,
        cursor: "top-3/5 right-1/5"
    },
    {
        img: PcPage1Part5
    },
    {
        img: PcPage2Part1,
        animated: PcPage2Part2
    },
    {
        img: PcPage3Part1,
        cursor: "top-3/5 left-1/5"
    },
    {
        img: PcPage3Part2,
        cursor: "top-1/5 right-1/5"
    },
    {
        img: PcPage3Part3,
        cursor: "top-3/5 right-1/5"
    },
    {
        img: PcPage3Part4,
    }
]