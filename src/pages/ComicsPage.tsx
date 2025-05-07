import {useState} from "react";
import {PhoneComicsPages} from "../data/comicsPages.ts";
import ForwardIcon from "../assets/forward_icon.svg"
import BackwardIcon from "../assets/backward_icon.png"
import Cursor from "../assets/cursor.svg"
import BottomNav from "./BottomNav.tsx";

const ComicsPage = () => {
    const [activePart, setActivePart] = useState(0)

    const move = (value: number) =>{
        setActivePart(prevState => ( prevState + value >= 0 && prevState + value < PhoneComicsPages.length ) ? prevState + value : prevState )
    }

    return (
        <>
            <div className={"min-h-screen bg-black"}>

                <img
                    src={PhoneComicsPages[activePart].img}
                    alt="img"
                />

                {PhoneComicsPages[activePart].animated ? (
                    <img
                        src={PhoneComicsPages[activePart].animated}
                        alt="animation"
                        className="absolute top-1/2 left-1/2"
                        style={{
                            animation: 'popIn 0.4s ease-out forwards',
                        }}
                    />
                ) : null}

                { PhoneComicsPages[activePart].cursor ? <img src={Cursor} alt="cursor" className={`absolute ${PhoneComicsPages[activePart].cursor} animate-ping`}/> : null}

                {(activePart === 5) ?
                    <div className="absolute flex flex-col gap-[0.57rem] bottom-4 w-full px-[4rem] font-bold text-white z-2 left-1/2 -translate-x-1/2">
                        <button onClick={() => move(1)}
                                className="flex items-center justify-center gap-2 bg-[#AC0000] rounded-[0.75rem] py-2 px-4 shadow-[2px_4px_4px_0px_rgba(255,255,255,0.25)]">
                            Читати далі
                            <img src={ForwardIcon} alt="Далі" className="w-6 h-6"/>
                        </button>

                        <button onClick={() => move(-5)}
                                className="flex items-center justify-center gap-2 bg-[#AC0000] rounded-[0.75rem] py-2 px-4 shadow-[2px_4px_4px_0px_rgba(255,255,255,0.25)]">
                            <img src={BackwardIcon} alt="Назад" className="w-6 h-6"/>
                            Повернутися назад
                        </button>
                    </div>
                    : null
                }

            </div>

            <div className={"absolute top-0 left-0 h-screen w-full z-1"} onClick={() => move(1)}></div>
            { activePart + 1 >= PhoneComicsPages.length ? <BottomNav/> : null }
        </>
    );
}

export default ComicsPage;