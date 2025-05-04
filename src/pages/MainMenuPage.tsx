import useMobile from "../hooks/useMobile.tsx";
import Background from "../assets/stars_black_background.png";
import planetWithMountains from "../assets/planet-mountains-background.png"
import {DetailedIcons} from "../data/detailedIcons.ts";
import MainMenuNavButton from "./MainMenuNavButton.tsx";

const MainMenuPage = () => {
    const isMobile = useMobile();

    if (!isMobile){
        //some code
    }

    return(
        <div
            className="m-0 p-0 w-full min-h-screen z-0 bg-repeat"
            style={{
                backgroundImage: `url(${Background})`,
                backgroundSize: 'auto'
            }}
        >
            <img src={planetWithMountains} alt="planets" className="w-full"/>

            <div className={`absolute ${window.innerHeight >= 800 ? "bottom-36" : "bottom-5"} w-full flex flex-wrap justify-center gap-4`}>
                {DetailedIcons.map((icon, index) => (
                    <MainMenuNavButton key={index} {...icon} />
                ))}
            </div>

        </div>
    );
};

export default MainMenuPage;