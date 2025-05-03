import useMobile from "../../hooks/useMobile.tsx";
import Background from "../../assets/stars_black_background.png";
import { planets } from '../../data/planets.ts';
import PlanetBox from "./PlanetBox.tsx";


const PlanetsPage = () => {
    const isMobile = useMobile()

    if (!isMobile) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100 text-center px-4">
                <div className="bg-white shadow-lg rounded-xl p-6 max-w-md">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        🚫 Доступ обмежено
                    </h2>
                    <p className="text-lg text-gray-700">
                        Доступно лише з мобільної версії, сонечко ;D
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div
            className="m-0 p-0 w-full min-h z-0 bg-repeat"
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