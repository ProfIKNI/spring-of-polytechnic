import React from 'react';
import useMobile from '../hooks/useMobile.tsx';

const characterData = [
  {
    name: 'Капітан Смоук',
    actor: 'Мартиняк Ярослав, КН-406, ІКНІ'
  },
  {
    name: 'Помічник Дейв',
    actor: 'Мінтус Станіслав, ПЗ-33, ІКНІ'
  },
  {
    name: 'Бортовий комп’ютер',
    actor: 'Пойта Анна, ПП-25, ІКНІ'
  },
  {
    name: 'Містер Зло',
    actor: 'Лесяк Роман, ПМ-22, ІМФН'
  },
  {
    name: 'Дімка-Дімка (помічник містера Зло)',
    actor: 'Кріслатий Дмитро, ПМ-43, ІМФН'
  },
  {
    name: 'Торт',
    actor: 'Коломійчук Данило, КНСП-11, ІКНІ'
  },
  {
    name: 'Королева',
    actor: 'Куриляк Анна, УП-11, ІКНІ'
  },
  {
    name: 'Хранителька “Крутого пожирача планет”',
    actor: 'Жанна, акторка Національного драматичного театру імені Марії Заньковецької'
  },
  {
    name: 'Хранитель кристалу',
    actor: 'Коломійчук Данило, КНСП-11, ІКНІ'
  },
  {
    name: 'Хранитель зарядного пристрою для зброї',
    actor: 'озвучив Раян Гослінг.'
  }
];

const CharacterList: React.FC = () => {
  const mid = Math.ceil(characterData.length / 2);
  const firstColumn = characterData.slice(0, mid);
    const secondColumn = characterData.slice(mid);
    const isMobile = useMobile();

  return (
    <div className="character-list text-white px-6 py-10">
  <div className={`grid text-sm leading-relaxed ${!isMobile ? "text-[24px] mx-[120px] grid-cols-1 md:grid-cols-2 gap-x-40" : "text-[16px] m-[30px] text-center"}`}>
    { [firstColumn, secondColumn].map((column, colIndex) => (
      <div key={colIndex} className="flex flex-col justify-between">
        {column.map((item, index) => (
          <div key={index} className="mb-2">
            <span className="font-[700]">{item.name}</span> – <span className="font-[400]">{item.actor}</span>
          </div>
        ))}
      </div>
    ))}
  </div>
</div>

  );
};

export default CharacterList;
