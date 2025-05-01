import useMobile from "../../hooks/useMobile.tsx";
import Background from "../../assets/stars_black_background.png";
import { planets } from '../../data/planets.ts';
import PlanetBox from "./PlanetBox.tsx";


const PlanetsPage = () => {
    const isMobile = useMobile()

    if (isMobile) {
        // return <></>
    }

    return (
        <div
            className="m-0 p-0 w-full min-h z-0 bg-repeat bg-center"
            style={{
                backgroundImage: `url(${Background})`,
                backgroundSize: 'auto'
            }}
        >
            {planets.map((planet, index) => (
                <PlanetBox key={index} {...planet} />
            ))}
        </div>
    );
};

export default PlanetsPage;