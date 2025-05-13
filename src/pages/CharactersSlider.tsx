import toggleBtn from "../assets/sliderIcon.svg"
import {Characters} from "../data/program.ts";
import {useState} from "react";
import useMobile from "../hooks/useMobile.tsx";


const CharactersSlider = () => {
    const isMobile = useMobile();
    const characters = Characters;
    const [active, setActive] = useState(0);


    const toggleForward = () => {
        setActive(prev => (prev + 1 < characters.length ? prev + 1 : 0));
    };

    const toggleBackward = () => {
        setActive(prev => (prev - 1 >= 0 ? prev - 1 : characters.length - 1));
    };

    return(
        <div className={`flex ${isMobile ? "flex-col" : "flex-row"}`}
             style={{fontFamily: '"Pixelify Sans", sans-serif', fontWeight: 700}}
        >

            <div className={`flex justify-center ${!isMobile && "w-[50%]"}`}>
                <div className={`flex justify-center ${!isMobile && "rounded-[3rem] bg-[rgba(43,45,49,0.5)]"} items-center w-fit`}>
                    <button onClick={toggleBackward} className={"h-fit"}>
                        <img src={toggleBtn} className={"rotate-[180deg] cursor-pointer"}/>
                    </button>

                    <div
                        className={`max-h-[400px] min-w-[100px] text-white flex ${isMobile ? "flex-col" : "flex-row"} ${isMobile && "rounded-[3rem] bg-[rgba(43,45,49,0.5)]"}`}
                    >
                        <img
                            key={characters[active].name}
                            src={characters[active].img}
                            className={`h-[400px] fade-in-up`}
                        />
                    </div>


                    <button onClick={toggleForward} className={"h-fit"}>
                        <img src={toggleBtn} className={"cursor-pointer"}/>
                    </button>
                </div>

            </div>

            <div className={`text-white flex flex-col justify-center items-center ${!isMobile && "w-[50%]"} fade-in-up`} key={characters[active].role}>
                <h3 className={`${!isMobile ? "text-[40px]" : "text-[20px]"}`}>{characters[active].role}</h3>
                <p className={`${!isMobile ? "text-[24px]" : "text-[11px]"}`}>{characters[active].name}</p>
            </div>


        </div>
    )
}

export default CharactersSlider;