import Starts from "../../assets/stars_black_background.png";
import Background from "../../assets/bg.png";
import BackgroundMobile from "../../assets/bg-mobile.png"
import RunningRow from "../RunningRow.tsx";
import CharactersSlider from "../CharactersSlider.tsx";
import BottomNav from "../BottomNav.tsx";
import TeamList from "../TeamList.tsx";
import CharacterList from "../CharacterList.tsx";
import ShortDesc from "../ShortDesc.tsx";
import useIsMobile from "../../hooks/useMobile.tsx";

const PlanetsPage = () => {
  const isMobile = useIsMobile();
  const bg = isMobile ? BackgroundMobile : Background

  return (
  <div className="m-0 p-0 w-full min-h-screen z-0 bg-repeat flex flex-col gap-4"
       style={{
         backgroundImage: `url(${Starts})`,
         backgroundSize: 'auto'
       }}>
    <RunningRow text={" Короткий опис Короткий опис Короткий опис Короткий опис Короткий опис Короткий опис Короткий опис Короткий опис "} key={1}></RunningRow>

      <ShortDesc></ShortDesc>

    <RunningRow text={" Головні герої Головні герої Головні герої Головні герої Головні герої Головні герої Головні герої Головні герої "} key={2}></RunningRow>

    <CharactersSlider></CharactersSlider>
      
      <RunningRow text={" Дійові особи Дійові особи Дійові особи Дійові особи Дійові особи Дійові особи Дійові особи Дійові особи Дійові особи "}></RunningRow>
      
      <CharacterList></CharacterList>

    <RunningRow text={" Вистава в сценах Вистава в сценах Вистава в сценах Вистава в сценах Вистава в сценах Вистава в сценах Вистава в сценах "} key={3}></RunningRow>

    <img
      src={bg}
      alt="Background"
      className="w-full"
    />

      <RunningRow text={"Команда"}></RunningRow>
      <TeamList></TeamList>
      <BottomNav />
  </div>
);
};

export default PlanetsPage;