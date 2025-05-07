import detailedStarts from "../assets/menu_buttons_detailed/stars_icon_detailed.svg"
import detailedPlanets from "../assets/menu_buttons_detailed/planet_icon_detailed.svg"

export interface DetailedIcon {
    title: string;
    icon: string;
    route: string;
}

export const DetailedIcons: DetailedIcon[] = [
    {
        title: "ПРОГРАМКА",
        icon: detailedPlanets,
        route: "/spring-of-polytechnic/planets"
    },
    {
        title: "КОМІКС",
        icon: detailedStarts,
        route: "/"
    }
]