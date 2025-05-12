import { useLocation, useNavigate } from "react-router-dom";
import HomeButton from "../assets/HomeIcon.svg?react";
import ComicButton from "../assets/StarShootingIcon.svg?react";
import PlanetButton from "../assets/PlanetIcon.svg?react";

type NavItem = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  path: string;
};

const navItems: NavItem[] = [
  { icon: HomeButton, label: "ГОЛОВНА", path: "/spring-of-polytechnic/" },
  { icon: ComicButton, label: "КОМІКС", path: "/spring-of-polytechnic/comics" },
  { icon: PlanetButton, label: "ПРОГРАМКА", path: "/spring-of-polytechnic/planets" },
];

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div
      style={{ boxShadow: "0px 11px 8.3px rgba(255, 255, 255, 0.5)" }}
      className="fixed bottom-12 left-1/2 transform -translate-x-1/2 bg-[#0D0A26] rounded-[24px] px-2 py-4 flex justify-center items-center w-[90%] max-w-md z-50"
    >
      {navItems.map((item, index) => {
        const isActive = location.pathname === item.path;
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center w-auto cursor-pointer mx-auto"
            onClick={() => navigate(item.path)}
          >
            <Icon
              className={`w-6 h-6 mb-1 ${
                isActive ? "text-[#374498]" : "text-[#D9D9D9]"
              }`}
            />
            <span
              className={`text-[12px] font-[Play] ${
                isActive ? "text-[#374498]" : "text-[#D9D9D9]"
              }`}
            >
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default BottomNav;
