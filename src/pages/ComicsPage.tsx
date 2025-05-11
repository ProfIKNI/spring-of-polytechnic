import {useState} from "react";
import {PhoneComicsPages, PcComicsPages} from "../data/comicsPages.ts";
import ForwardIcon from "../assets/forward_icon.svg"
import BackwardIcon from "../assets/backward_icon.png"
import Cursor from "../assets/cursor.svg"
import BottomNav from "./BottomNav.tsx";
import useMobile from "../hooks/useMobile.tsx";

const ComicsPage = () => {
    const isMobile = useMobile();
    const pages = isMobile ? PhoneComicsPages : PcComicsPages
    const [activePart, setActivePart] = useState(0)

    const move = (value: number) =>{
        setActivePart(prevState => ( prevState + value >= 0 && prevState + value < PhoneComicsPages.length ) ? prevState + value : prevState )
    }

    return (
        <>
            <div className="min-h-screen bg-black select-none font-playFont">

                {pages.map((item, index) =>
                    index <= activePart ? (
                        item.img && (
                            <>
                                <img
                                    key={item.img}
                                    src={item.img}
                                    alt="img"
                                    className={`
                                      absolute 
                                      max-w-screen 
                                      max-h-screen 
                                      object-contain
                                      top-1/2 left-1/2 
                                      -translate-x-1/2 
                                      -translate-y-1/2
                                    `}
                                    style={{
                                        opacity: 0,
                                        animation: "fadeIn 0.75s ease-out forwards"
                                    }}
                                />

                            </>
                        )
                    ) : null
                )}

                {pages[activePart].animated ? (
                    <img
                        src={pages[activePart].animated}
                        alt="animation"
                        className={`absolute top-1/2 left-1/2 ${isMobile && "w-[80%]"}`}
                        style={{
                            animation: 'popIn 0.4s ease-out forwards',
                        }}
                    />
                ) : null}

                {pages[activePart].cursor ?
                    <img src={Cursor} alt="cursor" className={`absolute w-16 h-16 ${pages[activePart].cursor} animate-ping`}/>
                    : null
                }

                {(activePart === 5) ?
                    <button onClick={() => move(1)}
                            className={`absolute text-white ${isMobile ? "bottom-12 px-6" : "bottom-24 px-10"} left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 bg-[#5625E7] rounded-[0.75rem] py-2 font-bold`}>
                        Читати далі
                        <img src={ForwardIcon} alt="Далі" className="w-6 h-6"/>
                    </button>
                    : null
                }

                {(activePart === 6) ?
                    <div
                        className={`absolute flex ${isMobile ? "flex-col bottom-4 gap-[0.57rem] left-1/2 -translate-x-1/2 px-16" : "flex-row-reverse justify-center bottom-16 gap-[5rem]"} w-full font-bold text-white z-11`}>
                        <button onClick={() => move(1)}
                                className={`flex items-center justify-around gap-2 bg-[#AC0000] rounded-[0.75rem] ${isMobile ? "py-3 px-4" : "w-[20%] py-4"} shadow-[2px_4px_4px_0px_rgba(255,255,255,0.25)]`}>
                            Читати далі
                            <img src={ForwardIcon} alt="Далі" className="w-6 h-6"/>
                        </button>

                        <button onClick={() => move(-6)}
                                className={`flex items-center justify-around gap-2 bg-[#AC0000] rounded-[0.75rem] ${isMobile ? "py-3 px-4" : "w-[20%] py-4"} shadow-[2px_4px_4px_0px_rgba(255,255,255,0.25)]`}>
                            <img src={BackwardIcon} alt="Назад" className="w-6 h-6"/>
                            Повернутися назад
                        </button>
                    </div>
                    : null
                }

            </div>

            {[5, 6, pages.length - 1].includes(activePart) ? null :
                <div className={"absolute top-0 left-0 h-screen w-full z-11"} onClick={() => move(1)}></div>}
            {activePart + 1 >= pages.length && isMobile ? <BottomNav/> : null}
        </>
    );
}

export default ComicsPage;