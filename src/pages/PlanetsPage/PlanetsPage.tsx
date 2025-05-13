
import Background from "../../assets/bg3.png";
import Starts from "../../assets/stars_black_background.png";
import BackgroundMobile from "../../assets/bg-mobile2.png";
import useIsMobile from "../../hooks/useMobile.tsx";
import RunningRow from "../RunningRow.tsx";
import CharactersSlider from "../CharactersSlider.tsx";


const PlanetsPage = () => {
  const isMobile = useIsMobile();

  return (
  <div className="m-0 p-0 w-full min-h-screen z-0 bg-repeat flex flex-col gap-4"
       style={{
         backgroundImage: `url(${Starts})`,
         backgroundSize: 'auto'
       }}>
    <RunningRow text={"Короткий опис"}></RunningRow>

    <RunningRow text={"Головні герої"}></RunningRow>

    <CharactersSlider></CharactersSlider>

    <RunningRow text={"Вистава в сценах"}></RunningRow>


    <img
      src={Background}
      alt="Background"
      className="w-full"
    />


  </div>
);



};

export default PlanetsPage;