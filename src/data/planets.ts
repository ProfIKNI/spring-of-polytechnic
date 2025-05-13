import WaterPlanet from "../assets/water-planet.png"
import QueenPlanet from "../assets/queen-planet.png"
import CandyPlanet from "../assets/candy-planet.png"
import BlackHole from "../assets/black-hole.png"
import BlackHoleMobile from "../assets/black-hole-mobile.png"
import RocketLeft from "../assets/rocket-left.png"
import RocketRight from "../assets/rocket-right.png"
import RocketMobile from "../assets/rocket-mobile.png"

export interface Planet {
    name: string;
    location: string;
    talents: string;
    img: string;
    align: string;
}

export const planets: Planet[] = [
    {
        name: 'Сцена 1',
        location: 'космічний корабель',
        talents: 'блаблабла',
        img: RocketRight,
        align: 'right'
    },
    {
        name: 'Сцена 2',
        location: 'планета Кондитерська',
        talents: 'хореографічна постановка ліплення конитерського виробу з елементами вокалу художня гімнастика - Христя ІКНІ',
        img: CandyPlanet,
        align: 'right'
    },
    {
        name: 'Сцена 3',
        location: 'космічний корабель',
        talents: 'блаблабла',
        img: RocketLeft,
        align: 'left'
    },
    {
        name: 'Сцена 4',
        location: 'планета води',
        talents: 'блаблабла',
        img: WaterPlanet,
        align: 'left'
    },
    {
        name: 'Сцена 5',
        location: 'космічний корабель',
        talents: 'блаблабла',
        img: RocketRight,
        align: 'right'
    },
    {
        name: 'Сцена 6',
        location: 'чорна діра',
        talents: 'блаблабла',
        img: BlackHole,
        align: 'right'
    },
    {
        name: 'Сцена 7',
        location: 'космічний корабель',
        talents: 'блаблабла',
        img: RocketLeft,
        align: 'left'
    },
    {
        name: 'Сцена 8',
        location: 'планета королеви',
        talents: 'блаблабла',
        img: QueenPlanet,
        align: 'left'
    },
    {
        name: 'Сцена 9',
        location: 'космічний корабель',
        talents: 'блаблабла',
        img: RocketRight,
        align: 'right'
    },
];


export const planetsMobile: Planet[] = [
    {
        name: 'Сцена 1',
        location: 'космічний корабель',
        talents: 'блаблабла',
        img: RocketMobile,
        align: 'right'
    },
    {
        name: 'Сцена 2',
        location: 'планета Кондитерська',
        talents: 'хореографічна постановка ліплення конитерського виробу з елементами вокалу художня гімнастика - Христя ІКНІ',
        img: CandyPlanet,
        align: 'left'
    },
    {
        name: 'Сцена 3',
        location: 'космічний корабель',
        talents: 'блаблабла',
        img: RocketMobile,
        align: 'right'
    },
    {
        name: 'Сцена 4',
        location: 'планета води',
        talents: 'блаблабла',
        img: WaterPlanet,
        align: 'right'
    },
    {
        name: 'Сцена 5',
        location: 'космічний корабель',
        talents: 'блаблабла',
        img: RocketMobile,
        align: 'right'
    },
    {
        name: 'Сцена 6',
        location: 'чорна діра',
        talents: 'блаблабла',
        img: BlackHoleMobile,
        align: 'left'
    },
    {
        name: 'Сцена 7',
        location: 'космічний корабель',
        talents: 'блаблабла',
        img: RocketMobile,
        align: 'right'
    },
    {
        name: 'Сцена 8',
        location: 'планета королеви',
        talents: 'блаблабла',
        img: QueenPlanet,
        align: 'right'
    },
    {
        name: 'Сцена 9',
        location: 'космічний корабель',
        talents: 'блаблабла',
        img: RocketMobile,
        align: 'right'
    },
];
