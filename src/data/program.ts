import slavik from "../assets/slavic_character.png"
import stasik from "../assets/stasik_character.png"
import roma from "../assets/roma_character.png"
import dima from "../assets/dima_character.png"


export interface Character {
    name: string;
    role: string;
    img: string;
}

export const Characters: Character[] = [
    {
        role: "Капітан Смоук",
        name: "Мартиняк Ярослав, КН-406, ІКНі",
        img: slavik
    },
    {
        role: "Помічник Дейв",
        name: "Стас Мінтус, ПЗ-33, ІКНІ",
        img: stasik
    },
    {
        role: "Містер ЗЛО",
        name: "Лесяк Роман, ПМ-22, ІМФН",
        img: roma
    },
    {
        role: "Дімка (помічник містера Зло)",
        name: "Кріслатий Дмитро, ПМ-43, ІМФН",
        img: dima
    },
]