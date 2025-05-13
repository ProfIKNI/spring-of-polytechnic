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
        <div className={`flex`}
             style={{fontFamily: '"Pixelify Sans", sans-serif', fontWeight: 700}}
        >

            <div className={'flex justify-center w-[50%]'}>
                <div className={"flex justify-center rounded-[3rem] items-center bg-[rgba(43,45,49,0.5)] w-fit"}>
                    <button onClick={toggleBackward} className={"h-fit"}>
                        <img src={toggleBtn} className={"rotate-[180deg] cursor-pointer"}/>
                    </button>

                    {active >= 0 &&
                        <div key={characters[active].name}
                             className={`max-h-[400px] text-white flex ${isMobile ? "flex-col" : " flex-row"}`}
                        >
                            <img src={characters[active].img} className={"h-[400px]"}/>
                        </div>
                    }

                    <button onClick={toggleForward} className={"h-fit"}>
                        <img src={toggleBtn} className={"cursor-pointer"}/>
                    </button>
                </div>

            </div>

            <div className={"text-white flex flex-col justify-center items-center w-[50%]"}>
                <h3>{characters[active].role}</h3>
                <p>{characters[active].name}</p>
            </div>


        </div>
    )
}

export default CharactersSlider;