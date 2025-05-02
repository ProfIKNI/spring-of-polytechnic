import useMobile from "../hooks/useMobile";

import robotFull from "../assets/hologram-unscreen.gif";
import Background from "../assets/hologram_back.png";
import UnionIcon from "../assets/union_black.png";
import planet1 from "..//assets/hologram_planet_1.png";
import planet2 from "..//assets/hologram_planet_2.png";

const TalkingHologram = () => {
  return (
    <div className="relative w-[500px] z-10 mt-10">
      <img src={`${robotFull}?v=${Date.now()}`} alt="Голограма" className="w-full" />
    </div>
  );
};

const ScrollingText = () => {
  return (
    <div className="relative h-[500px] w-full max-w-md mx-auto overflow-hidden text-white text-sm leading-6">
      <div className="absolute w-full h-full flex justify-center">
        <div className="w-[80%] animate-scroll-text text-center leading-[1.6] text-[2rem]">
          <p className="text-[1.5rem] mb-4">Episode IV</p>
          <h1 className="text-[3rem] mb-6">A NEW HOPE</h1>
          <p>
            It is a period of civil war. Rebel spaceships, striking from a hidden base,
            have won their first victory against the evil Galactic Empire.
            During the battle, Rebel spies managed to steal secret plans to the Empire’s
            ultimate weapon, the DEATH STAR, an armored space station with enough power
            to destroy an entire planet.
          </p>
        </div>
      </div>
    </div>
  );
};

const HologramPage = () => {
  const isMobile = useMobile();

  if (!isMobile) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 text-center px-4">
        <div className="bg-white shadow-lg rounded-xl p-6 max-w-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">🚫 Доступ обмежено</h2>
          <p className="text-lg text-gray-700">Ця сторінка доступна лише з мобільного пристрою.</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-between pb-6 px-4"
      style={{ backgroundImage: `url(${Background})` }}
    >
     <div className="relative w-[500px] h-[650px]">
    {/* Текст ПОЗАДУ */}
    <div className="absolute bottom-0 left-0 w-full z-5">
      <ScrollingText />
    </div>

    {/* Голограма ПОВЕРХ */}
    <div className="absolute top-0 left-0 w-full z-10 pointer-events-none">
      <TalkingHologram />
        </div>
        
      </div>
      <div className="absolute top-[35%] right-0 w-[180px] h-[180px] z-0 pointer-events-none">
          <img src={planet1} alt="" className="w-full" />
          </div>
          <div className="absolute top-0 left-0 w-[140px] h-[140px] z-0 pointer-events-none">
          <img src={planet2} alt="" className="w-full" />
          </div>

      {/* Кнопка */}
      <button className="flex w-[324px] h-[76px] items-center text-[25px] font-bold justify-between gap-2 px-6 py-5 bg-[#D9D9D9] text-[#0D0A26] cursor-pointer rounded-[30px] hover:bg-[#9A9A9A] transition">
          ЩО ТРАПИЛОСЬ
          <img src={UnionIcon} alt="icon" className="h-5 w-auto align-right" />
        </button>
    </div>
  );
};

export default HologramPage;
