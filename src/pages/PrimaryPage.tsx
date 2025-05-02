import UnionIcon from "../assets/union.png";
import RocketImg from "../assets/rocket.png";
import ShadowImg from "../assets/shadow.png";
import BackgroundGif from "../assets/high_quality_animated_planets.gif";
import useMobile from "../hooks/useMobile";
import { useNavigate } from 'react-router-dom';

const PrimaryPage = () => {

	const isMobile = useMobile()
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/spring-of-polytechnic/buy-ticket')
  }

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
      className="relative min-h-screen w-full bg-cover bg-center bg-fixed h-screen overflow-hidden"
      style={{ backgroundImage: `url(${BackgroundGif})` }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-4 z-10 text-center">
        <p className="text-[24px] text-[#30234F]" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.2)" }}>
          І в темну ніч, і в білий день
        </p>
        <p className="text-[24px] text-[#30234F]" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.2)" }}>
          рятуєм світ
        </p>
        <h1 className="text-[32px] font-bold drop-shadow-2xl text-[#30234F] mb-8" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.2)" }}>
          ВСІМ ДОБРИЙ ДЕНЬ!
        </h1>
        <button onClick={handleClick} className="flex w-[85%] items-center text-[25px] font-bold justify-between gap-2 px-6 py-5 bg-[#0D0A26] text-white rounded-4xl hover:bg-[#1b1839] transition">
          ГАЙДА З НАМИ!
          <img src={UnionIcon} alt="icon" className="h-5 w-auto align-right" />
        </button>
      </div>

      <div className="absolute mt-20 w-full h-full z-0">    
        <img src={ShadowImg} alt="Shadow" className="w-full mt-4" />
      </div>
			<img
          src={RocketImg}
          alt="Rocket"
          className="ml-26 pt-6 rocket"
        />
    </div>
  );
};

export default PrimaryPage;
