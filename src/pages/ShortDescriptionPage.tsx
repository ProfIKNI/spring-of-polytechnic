import Background from "../assets/stars_black_background.png";
import RunningRow from "./RunningRow.tsx";
import CharactersSlider from "./CharactersSlider.tsx";

const  ShortDescriptionPage = () => {

    return (
        <div
            className="m-0 p-0 w-full min-h-screen z-0 bg-repeat overflow-y-hidden font-playFont"
            style={{
                backgroundImage: `url(${Background})`,
                backgroundSize: 'auto'
            }}>

            <RunningRow text={"Головні герої"}></RunningRow>

            <CharactersSlider></CharactersSlider>

            <div></div>
        </div>
    );
}

export default ShortDescriptionPage;