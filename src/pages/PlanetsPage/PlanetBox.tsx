import {Planet} from "../../data/planets.ts";
import useIsMobile from "../../hooks/useMobile.tsx";

const PlanetBox = ({ name, location, talents, img, align }: Planet) =>{
	const isMobile = useIsMobile();
    const isRocket = img.includes('rocket');

		if (isMobile) {
    return (
        <div className="relative text-white flex max-w-96 m-auto font-playFont">
            {isRocket &&
						 <div  className="flex flex-col">
            	<img
                src={img}
                alt={name}
                className={`${align === 'right' ? 'ml-auto' : 'mr-auto'} planet w-full `}
							/>
              <div
                className={`
                  absolute bottom-[35%] h-full flex flex-col justify-center
                  ${align === 'right' ? 'text-right right-0 mr-[40%] ml-3' : 'text-left left-0 ml-[40%] mr-3'}
                `}
                style={{ wordBreak: 'break-all' }}
              >
                <h1 className={`text-8 font-bold`}>{name}</h1>
                <p className="text-sm"><span className="font-bold">Локація:</span> {location}</p>
                <p className="text-sm"><span className="font-bold">Таланти:</span> {talents}</p>
              </div>
            </div>
					}

					{!isRocket && (
						<div className="flex w-full absolute bottom-20">
							<div className="w-1/2 flex justify-center items-center shrink-0">
								<img
									src={img}
									alt={name}
									className="planet "
								/>
							</div>
							<div
								className={`
									w-1/2 flex flex-col justify-center 
									${align === 'right' ? 'text-right items-end pr-6' : 'text-left items-start pl-6'}
								`}
								style={{ wordBreak: 'break-word' }}
							>
								<h1 className="text-8 font-bold">{name}</h1>
								<p className="text-sm"><span className="font-bold">Локація:</span> {location}</p>
								<p className="text-sm"><span className="font-bold">Таланти:</span> {talents}</p>
							</div>
						</div>
					)}
        </div>
    );
	}

	return (
		<div className="relative text-white flex m-auto font-playFont">
      <img
        src={img}
        alt={name}
       className={`${align === 'right' ? 'left-0' : 'right-0'} ${isRocket ? "ml-10" : "absolute w-1/3 mx-20 bottom-0 translate-y-50"} planet`}

      />

      <div
        className={`
          absolute w-[20%] h-full flex flex-col justify-center bottom-10
          ${align === 'right' ? 'text-right right-0 mr-[40%] ml-3' : 'text-left left-0 ml-[40%] mr-3'}
        `}
        style={{ wordBreak: 'break-all' }}
      >
      <h1 className="text-9 font-bold">{name}</h1>
				<p className="text-sm"><span className="font-bold">Локація:</span> {location}</p>
				<p className="text-sm"><span className="font-bold">Таланти:</span> {talents}</p>
      </div>
    </div>
	)
};

export default PlanetBox;