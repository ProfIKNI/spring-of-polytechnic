import { useState } from "react";
import HomeButton from "../assets/HomeIcon.svg";
import ComicButton from "../assets/StarShootingIcon.svg";
import TicketButton from "../assets/TicketIcon.svg";
import PlanetButton from "../assets/PlanetIcon.svg";
import CharacterButton from "../assets/PersonIcon.svg";

type NavItem = {
  icon: string;
  label: string;
};

const navItems: NavItem[] = [
  { icon: HomeButton, label: "ГОЛОВНА" },
  { icon: ComicButton, label: "КОМІКС" },
  { icon: TicketButton, label: "КВИТОК" },
  { icon: PlanetButton, label: "ПЛАНЕТИ" },
  { icon: CharacterButton, label: "ПЕРСОНАЖІ" },
];

const BottomNav = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div
      style={{ boxShadow: "0px 11px 8.3px rgba(255, 255, 255, 0.5)" }}
      className="fixed bottom-12 left-1/2 transform -translate-x-1/2 bg-[#0D0A26] rounded-[24px] px-2 py-4 flex justify-center items-center w-[90%] max-w-md z-50"
    >
      {navItems.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center w-auto cursor-pointer mx-auto"
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={item.icon}
              alt={item.label}
              className="w-6 h-6 mb-1"
            />
            <span className={`text-[12px] font-[Play] ${isActive ? "text-[#374498]" : "text-[#D9D9D9]"}`}>
              {item.label}
            </span>

          </div>
        );
      })}
    </div>
  );
};

export default BottomNav;
