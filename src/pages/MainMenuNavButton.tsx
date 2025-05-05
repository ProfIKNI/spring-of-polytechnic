import {DetailedIcon} from "../data/detailedIcons.ts";
import {Link} from "react-router-dom";

const MainMenuNavButton = ({ title, icon, route } : DetailedIcon) => {

    return (
        <Link to={route}
            className={`${window.innerWidth < 390 ? "w-28 h-28" : "w-32 h-32"} p-4 rounded-[30%] bg-white/70 font-playFont flex flex-col items-center justify-end`}>
            <img src={icon} alt={title}/>
            <h2 className="text-[#98835E] drop-shadow-[4px_4px_4px_rgba(0,0,0,0.4)]">{title}</h2>
        </Link>
    );
};

export default MainMenuNavButton;