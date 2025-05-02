import { useEffect, useRef, useState } from "react";
import useMobile from "../hooks/useMobile";

import robotFull from "../assets/robot1.png";
import robotOverlay from "../assets/robot2.png";
import Background from "../assets/hologram_page_back.png";
import UnionIcon from "../assets/union_black.png";

const TalkingHologram = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowOverlay((prev) => !prev);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[350px] z-10">
      <img src={robotFull} alt="Голограма" className="w-full" />
      {showOverlay && (
        <img
          src={robotOverlay}
          alt="Деталі"
          className="absolute top-0 left-0 w-full opacity-100 pointer-events-none"
        />
      )}
    </div>
  );
};

const ScrollingText = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [autoScrollEnded, setAutoScrollEnded] = useState(false);

  useEffect(() => {
    const textElement = containerRef.current;
    if (!textElement) return;

    const handleAnimationEnd = () => {
      setAutoScrollEnded(true);
    };

    textElement.addEventListener("animationend", handleAnimationEnd);

    return () => {
      textElement.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  return (
    <div
      className={`relative h-[400px] w-full max-w-md bg-none bg-opacity-40 rounded-md text-white text-sm leading-6 ${
        autoScrollEnded ? "overflow-y-auto" : "overflow-hidden"
      }`}
    >
      <div
        ref={containerRef}
        className={`w-full px-4 py-2 ${
          autoScrollEnded ? "" : "animate-scroll-text"
        }`}
        style={{ position: "absolute", top: autoScrollEnded ? "30%" : "0%" }}
      >
        <p className="text-[12px] text-center text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
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
     <div className="relative w-[350px] h-[600px]">
    {/* Текст ПОЗАДУ */}
    <div className="absolute bottom-0 left-0 w-full z-0">
      <ScrollingText />
    </div>

    {/* Голограма ПОВЕРХ */}
    <div className="absolute top-0 left-0 w-full z-10 pointer-events-none">
      <TalkingHologram />
    </div>
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
