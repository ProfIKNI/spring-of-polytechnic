import {Planet} from "../../data/planets.ts";

const PlanetBox = ({ name, description, img, align }: Planet) =>{
    return (
        <div className="relative text-white flex max-w-96 m-auto font-playFont">
            <img
                src={img}
                alt={name}
                className={`${align === 'right' ? 'ml-auto' : 'mr-auto'} planet`}
            />

            <div
                className={`
                    absolute h-full flex flex-col justify-center
                    ${align === 'right' ? 'text-right right-0 mr-[40%] ml-3' : 'text-left left-0 ml-[40%] mr-3'}
                `}
                style={{ wordBreak: 'break-all' }}
            >
                    <h1 className={`text-[32px] font-bold`}>{name}</h1>
                    <h6 className="text-[12px] font-bold text-center">Опис планети:</h6>
                    <p className="text-[11px]">{description}</p>
            </div>
        </div>

    );
};

export default PlanetBox;