import detailedTickets from "../assets/menu_buttons_detailed/ticket_icon_detailed.svg"
import detailedStarts from "../assets/menu_buttons_detailed/stars_icon_detailed.svg"
import detailedPlanets from "../assets/menu_buttons_detailed/planet_icon_detailed.svg"
import detailedHeroes from "../assets/menu_buttons_detailed/heroes_icon_detailed.svg"

export interface DetailedIcon {
    title: string;
    icon: string;
    route: string;
}

export const DetailedIcons: DetailedIcon[] = [
    {
        title: "КВИТКИ",
        icon: detailedTickets,
        route: "/spring-of-polytechnic/buy-ticket"
    },
    {
        title: "КОМІКС",
        icon: detailedStarts,
        route: "/"
    },
    {
        title: "ПЛАНЕТИ",
        icon: detailedPlanets,
        route: "/spring-of-polytechnic/planets"
    },
    {
        title: "ГЕРОЇ",
        icon: detailedHeroes,
        route: "/"
    },
]