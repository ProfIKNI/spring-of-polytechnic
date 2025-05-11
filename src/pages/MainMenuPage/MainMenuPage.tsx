import Background from "../../assets/stars_black_background.png";
import planetWithMountains from "../../assets/planet-mountains-background.png"
import {DetailedIcons} from "../../data/detailedIcons.ts";
import MainMenuNavButton from "./MainMenuNavButton.tsx";
import GenreIcon from '../../assets/genre_icon.png'
import DurationIcon from '../../assets/duration_icon.png'
import DateIcon from '../../assets/date_icon.png'

const MainMenuPage = () => {

    return (
        <div
            className="m-0 p-0 w-full min-h-screen z-0 bg-repeat"
            style={{
                backgroundImage: `url(${Background})`,
                backgroundSize: 'auto'
            }}
        >
            <img
                src={planetWithMountains}
                alt="planets"
                className="w-full h-auto object-cover"
            />

            <div className="absolute w-full flex flex-col items-center bottom-4 px-4 sm:px-8 md:px-14">

                <div className="w-[85%] max-w-xl flex flex-col gap-4 mb-10 p-4 sm:p-6 rounded-2xl bg-white/50 shadow-[0px_4px_8.7px_5px_rgba(255,255,255,0.25)]">
                    <div className="flex items-end gap-3 font-playFont">
                        <img src={GenreIcon} alt="жанр" className="h-6 sm:h-[25px]" />
                        <h1 className="uppercase text-xs sm:text-sm">
                            жанр: <span className="text-lg sm:text-xl">комедія</span>
                        </h1>
                    </div>
                    <div className="flex items-end gap-3 font-playFont">
                        <img src={DurationIcon} alt="тривалість" className="h-6 sm:h-[25px]" />
                        <p className="uppercase text-xs sm:text-sm">
                            тривалість: <span className="text-lg sm:text-xl">година</span>
                        </p>
                    </div>
                    <div className="flex items-center gap-3 font-playFont">
                        <img src={DateIcon} alt="дата" className="h-6 sm:h-[25px]" />
                        <h1 className="uppercase text-xs sm:text-sm">
                            прем'єра: <span className="text-lg sm:text-xl">15 травня 2025 року</span>
                        </h1>
                    </div>
                </div>

                <div className="w-full max-w-4xl flex flex-wrap justify-around gap-4">
                    {DetailedIcons.map((icon, index) => (
                        <MainMenuNavButton key={index} {...icon} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainMenuPage;