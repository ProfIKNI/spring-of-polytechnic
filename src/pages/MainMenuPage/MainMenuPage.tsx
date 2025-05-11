import useMobile from "../../hooks/useMobile.tsx";
import Background from "../../assets/stars_black_background.png";
import planetWithMountains from "../../assets/planet-mountains-background.png"
import {DetailedIcons} from "../../data/detailedIcons.ts";
import MainMenuNavButton from "./MainMenuNavButton.tsx";
import GenreIcon from '../../assets/genre_icon.png'
import DurationIcon from '../../assets/duration_icon.png'
import DateIcon from '../../assets/date_icon.png'

const MainMenuPage = () => {
    const isMobile = useMobile();
    const genre = 'комедія';
    const duration = 'година';
    const date = '15 травня 2025 року';

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
            <img
                src={planetWithMountains}
                alt="planets"
                className="w-screen h-screen object-cover"
            />

            <div className={`absolute w-full flex flex-col justify-center bottom-5 min-h-fit px-14`}>

                <div
                    className={`w-auto flex flex-col font-bold ${innerWidth >= 390 ? "text-[21px]" : "text-[18px]"} justify-center gap-1 text-white mb-10 p-6 px-4 p min-h-fit rounded-[2rem] bg-white/50 shadow-[0px_4px_8.7px_5px_rgba(255,255,255,0.25)]`}
                    style={{
                        textShadow: '0px 4px 4px rgba(0,0,0,0.25)',
                    }}
                >
                    <div className={`w-fit flex items-end gap-4 font-playFont`}>
                        {/*<img src={GenreIcon} alt={'img'} className={`h-[25px]`}/>*/}
                        <h1
                            className={`uppercase w-fit`}
                        >жанр:
                            <span className={`font-normal`}> {genre}</span></h1>
                    </div>
                    <div className={`w-fit flex items-end gap-4 font-playFont`}>
                        {/*<img src={DurationIcon} alt={'img'} className={`h-[25px]`}/>*/}
                        <p className={`uppercase w-fit`}>тривалість:
                            <span className={`font-normal`}> {duration}</span></p>
                    </div>
                    <div className={`w-fit flex items-center gap-4 font-playFont`}>
                        {/*<img src={DateIcon} alt={'img'} className={`h-[25px]`}/>*/}
                        <h1 className={`uppercase w-fit`}>прем'єра:<br/>
                            <span className={`font-normal`}>{date}</span></h1>
                    </div>
                </div>

                <div
                    className={`w-full flex flex-wrap justify-between mb-8`}>
                    {DetailedIcons.map((icon, index) => (
                        <MainMenuNavButton key={index} {...icon} />
                    ))}
                </div>

            </div>

        </div>
    );
};

export default MainMenuPage;