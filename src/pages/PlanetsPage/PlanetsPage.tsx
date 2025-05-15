import Starts from "../../assets/stars_black_background.png";
import Background from "../../assets/bg.png";
import BackgroundMobile from "../../assets/bg_phone.png"
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

    {!isMobile &&
        <img
            src={bg}
            alt="Background"
            className="w-full"
        />
    }

    {isMobile &&

    <div
        className="w-full bg-cover bg-center leading-tight bg-no-repeat text-[12px]"
        style={{backgroundImage: `url(${bg})`}}
    >

      <div className={"text-white mt-10 flex flex-col justify-center items-end w-[50%]"}>
        <h2 className={'italic text-[12px]'} style={{fontFamily: 'Montserrat, sans-serif'}}>Сцена 1</h2>
        <h1 className={"font-bold leading-tight"} style={{ fontFamily: 'Unbounded, sans-serif' }}>Локація:</h1>
        <h1 className={"font-bold leading-tight"} style={{ fontFamily: 'Unbounded, sans-serif' }}>космічний корабель</h1>
      </div>

      <div className="text-white mt-10 flex flex-col w-[50%] ml-auto mr-4">
        <h2 className={'italic text-[12px]'} style={{fontFamily: 'Montserrat, sans-serif'}}>Сцена 2</h2>
        <h1 className="font-bold leading-tight" style={{ fontFamily: 'Unbounded, sans-serif' }}>Локація:<br/> планета Кондитерська</h1>

        <div className={"mr-2 text-[10px]"} style={{fontFamily: 'Montserrat, sans-serif'}}>
          <p>Таланти:</p>
          <p className={"mb-2"}>Вокально-хореографічна постановка ліплення кондитерського виробу:</p>
          <div className={"ml-3"}>
            <p className={"mb-2"}>
              Вокал: <br/>
              Нестор Сарвас, УП-11, ІКНІ <br/>
              Кривошей Єлизавета УП-41 ІКНІ <br/>
              Баранова Софія КН-405 ІКНІ <br/>
              Каркульовська Ярина ФЛ-26 ІКНІ <br/>
              Гвоздовська Софія ПМ-13 ІМФН</p>
            <p className={"mb-2"}>Хореографія:<br/>
              Жирош Яна, СА-21, ІКНІ<br/>
              Хомицька Марта, СА-21, ІКНІ<br/>
              Пасіщук Алла, РІ-22, ІКНІ<br/>
              Бариляк Ілона, ПМ-22, ІМФН</p>
            <p className={"mb-2"}>Художня гімнастика: Гопяк Христина, ВП-31, ІКНІ
            </p>
            <p className={"mb-2"}>Вокал (виконання авторської пісні):<br/>
              Кріслатий Дмитро, ПМ-43, ІМФН;<br/>
              Нестор Сарвас, УП-11, ІКНІ;<br/>
              Кривошей Єлизавета УП-41 ІКНІ;<br/>
              Баранова Софія КН-405 ІКНІ;<br/>
              Каркульовська Ярина ФЛ-26 ІКНІ;<br/>
              Гвоздовська Софія ПМ-13 ІМФН</p>
          </div>
        </div>

      </div>

      <div className={"text-white flex mt-20 flex-col ml-5 w-[50%]"}>
        <h2 className={'italic text-[12px]'} style={{fontFamily: 'Montserrat, sans-serif'}}>Сцена 3</h2>
        <h1 className={"font-bold leading-tight"} style={{ fontFamily: 'Unbounded, sans-serif' }}>Локація:</h1>
        <h1 className={"font-bold leading-tight"} style={{ fontFamily: 'Unbounded, sans-serif' }}>космічний корабель</h1>
        <p className={"text-[10px]"} style={{fontFamily: 'Montserrat, sans-serif'}}>
          Таланти:<br/>
          <span className={"ml-2"}>
          Бітбокс: Мінтус Станіслав,</span> <br/>
          <span className={"ml-2"}>ПЗ-33, ІКНІ</span>
        </p>
      </div>

      <div className={"text-white mt-10 flex flex-col justify-center items-end w-[50%]"}>
        <h2 className={'italic text-[12px]'} style={{fontFamily: 'Montserrat, sans-serif'}}>Сцена 4</h2>
        <h1 className={"font-bold leading-tight"} style={{ fontFamily: 'Unbounded, sans-serif' }}>Локація:</h1>
        <h1 className={"font-bold leading-tight"} style={{ fontFamily: 'Unbounded, sans-serif' }}>планета Води</h1>

        <div className="flex flex-col items-end text-[10px] w-full text-right"
             style={{fontFamily: 'Montserrat, sans-serif'}}>
          <p>Таланти:</p>
          <p>Оперний спів:</p>
          <p className="mb-1">Жанна, акторка Національного драматичного театру імені Марії Заньковецької.</p>
          <p className="mb-1">
            Хореографічна постановка в якій фігурують пакети:
            Мартиняк Ярослав, КН-406, ІКНІ
          </p>
          <p className="mb-1">
            Гімнастика на петлях: <br/>
            Бойчук Ганна, ВП-22, ІКНІ
          </p>
        </div>
      </div>


      <div className={"text-white mt-10 flex flex-col justify-center items-end w-[50%]"}>
        <h2 className={'italic text-[12px]'} style={{fontFamily: 'Montserrat, sans-serif'}}>Сцена 5</h2>
        <h1 className={"font-bold"} style={{ fontFamily: 'Unbounded, sans-serif' }}>Локація: </h1>
        <h1 className={"font-bold"} style={{ fontFamily: 'Unbounded, sans-serif' }}>космічний корабель</h1>
      </div>

      <div className="text-white mt-16 flex flex-col w-[50%] ml-auto ">
        <h2 className={'italic text-[12px]'} style={{fontFamily: 'Montserrat, sans-serif'}}>Сцена 6</h2>
        <h1 className="font-bold leading-tight" style={{ fontFamily: 'Unbounded, sans-serif' }}>Локація:<br/> планета темряви</h1>
      </div>

      <div className="text-white mt-32 flex flex-col w-[50%] ml-auto ">
        <h2 className={'italic text-[12px]'} style={{fontFamily: 'Montserrat, sans-serif'}}>Сцена 7</h2>
        <h1 className="font-bold leading-tight" style={{ fontFamily: 'Unbounded, sans-serif' }}>Локація:<br/> космічний корабель</h1>

        <p className={"text-[10px]"} style={{fontFamily: 'Montserrat, sans-serif'}}>Таланти:
          <br/> Гра на губній гармошці та
          <br/> ліричне читання:
          <br/> Мартиняк Ярослав,
          <br/> КН-406, ІКНІ</p>
      </div>


      <div className={"text-white mt-24 flex flex-col items-end w-[40%]"}>
        <h2 className={'italic text-[12px]'} style={{fontFamily: 'Montserrat, sans-serif'}}>Сцена 8</h2>
        <h1 className={"font-bold leading-tight"} style={{ fontFamily: 'Unbounded, sans-serif' }}>Локація:</h1>
        <h1 className={"font-bold leading-tight"} style={{ fontFamily: 'Unbounded, sans-serif' }}>чорна діра</h1>

        <p className={"text-[10px] text-right w-full"} style={{fontFamily: 'Montserrat, sans-serif'}}>Таланти:
          <br/> Мультик:
          <br/> Мартиняк Ярослав,
          <br/> КН-406, ІКНІ</p>
      </div>

      <div className="text-white mt-32 flex flex-col justify-center items-end w-[50%]">
        <h2 className={'italic text-[12px]'} style={{fontFamily: 'Montserrat, sans-serif'}}>Сцена 9</h2>
        <h1 className="font-bold leading-tight text-right" style={{ fontFamily: 'Unbounded, sans-serif' }}>Локація:</h1>
        <h1 className="font-bold leading-tight text-right" style={{ fontFamily: 'Unbounded, sans-serif' }}>космічний корабель</h1>
      </div>


      <div className="text-white mt-20 flex flex-col w-[50%] ml-auto mr-4">
        <h2 className={'italic text-[12px]'} style={{fontFamily: 'Montserrat, sans-serif'}}>Сцена 10</h2>
        <h1 className="font-bold leading-tight" style={{ fontFamily: 'Unbounded, sans-serif' }}>Локація:<br/> планета королеви</h1>

        <div className={"mr-2 text-[10px]"} style={{fontFamily: 'Montserrat, sans-serif'}}>
          <p>Таланти:</p>
          <p className={"mb-2"}>Вокально-хореографічна постановка ліплення кондитерського виробу:</p>
          <div className={"ml-3"}>
            <p className={"mb-2"}>
              Гра на баяні:<br/>
              Вахула Іван, ПМ-12, ІМФН</p>
            <p className={"mb-2"}>Бальний танець (танго з елементами пасадоблю):<br/>
              Коренчук Анастасія, ПМ-31, ІМФН;<br/>
              Стецюк Андрій МН-31 ІКТЕ</p>
            <p className={"mb-2"}>Художня гімнастика: Гопяк Христина, ВП-31, ІКНІ
            </p>
            <p className={"mb-2"}>Танцювальна постановка:<br/>
              Жирош Яна, СА-21, ІКНІ<br/>
              Хомицька Марта, СА-21, ІКНІ<br/>
              Каркульовська Ярина, ФЛ-26, ІКНІ<br/>
              Пенгрин Романа, ПТ-32, ІСТР<br/>
              Коренчук Анастасія, ПМ-31, ІМФН<br/>
              Зелінська Єлизавета, ОІ-32, ІКНІ<br/>
              Гопяк Христина, ВП-31, ІКНІ<br/>
              Данилець Анастасія, МІ-41, ІМФН<br/>
              Пасіщук Алла, РІ-22, ІКНІ<br/>
              Бариляк Ілона, ПМ-22, ІМФН</p>
            <p className={"mb-2"}>Постановщик:<br/>
              Алфавіцька Марта, ФЛ-43, ІКНІ</p>
          </div>
        </div>

      </div>

    </div>
    }

    <RunningRow
        text={" Команда Команда Команда Команда Команда Команда Команда Команда Команда Команда Команда Команда Команда Команда "}></RunningRow>
    <TeamList></TeamList>
    <BottomNav/>
  </div>
  );
};

export default PlanetsPage;