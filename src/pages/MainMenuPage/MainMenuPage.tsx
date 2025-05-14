import Background from "../../assets/stars_black_background.png";
import planetWithMountains from "../../assets/planet-mountains-background.png"
import pcMountains from "../../assets/pc-mountains-background.png"
import pcPlanet from "../../assets/pc-planet-mountains-background.png"
import {DetailedIcons} from "../../data/detailedIcons.ts";
import MainMenuNavButton from "./MainMenuNavButton.tsx";
import useMobile from "../../hooks/useMobile.tsx";
import {Link} from "react-router-dom";

const MainMenuPage = () => {
    const isMobile = useMobile();
    const genre = 'комедія';
    const duration = 'година';
    const date = '15 травня 2025 року';

    if (!isMobile){
        return (
            <div
                className="m-0 p-0 w-full min-h-screen z-0 bg-repeat overflow-y-hidden font-playFont max-h-[100vh]"
                style={{
                    backgroundImage: `url(${Background})`,
                    backgroundSize: 'auto'
                }}>
                <div className={"overflow-y-hidden"}>
                    <img
                        src={pcPlanet}
                        alt="planets"
                        className="absolute w-max h-auto object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                    <svg
                        className="w-[738px] h-[718px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        viewBox="0 0 738 718"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{animation: 'rotateText 40s linear infinite'}}
                    >
                        <defs>
                            <path
                                id="circlePath"
                                d="
                                  M 369, 359
                                  m -330, 0
                                  a 330,330 0 1,1 660,0
                                  a 330,330 0 1,1 -660,0
                                "
                            />
                        </defs>
                        <text fill="black" fontSize="32" fontWeight="bold">
                            <textPath
                                href="#circlePath"
                                startOffset="0%"
                                textLength="2072"
                                lengthAdjust="spacing"
                            >
                                ІКНІ · ІМФН · ІСТР · ІКНІ · ІМФН · ІСТР · ІКНІ · ІМФН · ІСТР · ІКНІ · ІМФН · ІСТР ·
                                ІКНІ · ІМФН · ІСТР · ІКНІ · ІМФН · ІСТР · ІКНІ · ІМФН · ІСТР ·
                            </textPath>
                        </text>
                    </svg>

                </div>
                <img
                    src={pcMountains}
                    alt="planets"
                    className="absolute w-screen h-screen object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-hidden"
                />

                <div
                    className={`absolute top-1/10 left-5 flex flex-col font-bold text-[25px] justify-center gap-1 text-white p-6 px-4 p min-h-fit`}
                    style={{
                        textShadow: `
                                    -1px -1px 0 black,
                                     1px -1px 0 black,
                                    -1px  1px 0 black,
                                     1px  1px 0 black,
                                
                                     0px 4px 4px rgba(0,0,0,1)
                                  `
                    }}
                >
                    <div className={`w-fit flex items-end gap-4 font-playFont`}>
                        <h1 className={`uppercase w-fit`}>жанр:
                        <span className={`font-normal`}> {genre}</span></h1>
                    </div>
                    <div className={`w-fit flex items-end gap-4 font-playFont`}>
                        <p className={`uppercase w-fit`}>тривалість:
                        <span className={`font-normal`}> {duration}</span></p>
                    </div>
                    <div className={`w-fit flex items-center gap-4 font-playFont`}>
                        <h1 className={`uppercase w-fit`}>прем'єра:<br/>
                        <span className={`font-normal`}>{date}</span></h1>
                    </div>
                </div>

                <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex flex-row justify-center gap-15 w-[40rem] text-[25px] font-bold">
                    {DetailedIcons.map((icon) => (
                        <Link
                          to={icon.route}
                          className={"w-[15rem] h-[3rem] flex justify-center items-center border-[5px] rounded-[1rem] text-center text-[#DDE1DB] hover:text-black hover:bg-[#DDE1DB]/50 "}
                          style={{ borderColor: 'rgba(221, 225, 219, 0.6)' }}
                        >{icon.title}</Link>
                    ))}
                </div>

            </div>
        )
    }

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
                        <h1 className={`uppercase w-fit`}>жанр:
                        <span className={`font-normal`}> {genre}</span></h1>
                    </div>
                    <div className={`w-fit flex items-end gap-4 font-playFont`}>
                        <p className={`uppercase w-fit`}>тривалість:
                        <span className={`font-normal`}> {duration}</span></p>
                    </div>
                    <div className={`w-fit flex items-center gap-4 font-playFont`}>
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