import {Planet} from "../../data/planets.ts";

const PlanetBox = ({ name, description, img, align }: Planet) =>{
    return (
        <div className="relative text-white flex">
            <img
                src={img}
                alt={name}
                className={`${align === 'right' ? 'ml-auto' : 'mr-auto'}`}
            />

            <div
                className={`
                    absolute top-0 h-full flex flex-col justify-center
                    ${align === 'right' ? 'right-0 pr-[43%]' : 'left-0 pl-[43%]'}
                `}
            >
                <div className={`${align === 'right' ? 'text-right pl-3' : 'text-left pr-3'}`}>
                    <h1 className={`text-[32px] font-bold`}>{name}</h1>
                    <h6 className="text-[12px] font-bold text-center">Опис планети:</h6>
                    <p className="text-[11px]">{description}</p>
                </div>
            </div>
        </div>

    );
};

export default PlanetBox;