import Starts from "../../assets/stars_black_background.png";
import Background from "../../assets/bg.png";
import RunningRow from "../RunningRow.tsx";
import CharactersSlider from "../CharactersSlider.tsx";
import TeamList from "../TeamList.tsx";
import CharacterList from "../CharacterList.tsx";
import ShortDesc from "../ShortDesc.tsx";
import BottomNav from "../BottomNav.tsx";


const PlanetsPage = () => {

  return (
  <div className="m-0 p-0 w-full min-h-screen z-0 bg-repeat flex flex-col gap-4"
       style={{
         backgroundImage: `url(${Starts})`,
         backgroundSize: 'auto'
       }}>
      <RunningRow text={"Короткий опис"}></RunningRow>
      
      <ShortDesc></ShortDesc>

    <RunningRow text={"Головні герої"}></RunningRow>

    <CharactersSlider></CharactersSlider>
      
      <RunningRow text={"Дійові особи"}></RunningRow>
      
      <CharacterList></CharacterList>

      <RunningRow text={"Вистава в сценах"}></RunningRow>


    <img
      src={Background}
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