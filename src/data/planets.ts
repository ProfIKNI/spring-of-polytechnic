import glorbus from "../assets/glorbus-78.png"
import syntulia from "../assets/syntulia.png"
import pekolia from "../assets/pekolia-5r.png"
import zeleptus from "../assets/zeleptus-7.png"
import fiolentara from "../assets/fiolentara.png"
import hrylmar from "../assets/hrylmar.png"
import syrotonia from "../assets/syrotonia.png"
import bulbulonia from "../assets/bulbulonia.png"
import karuselta from "../assets/karuselta.png"
import orilat from "../assets/orilat.png"
import hlaris from "../assets/hlaris.png"
import rubela from "../assets/rubela.png"
import solara from "../assets/solara.png"
import ivorel from "../assets/ivorel.png"
import hargon from "../assets/hargon.png"

export interface Planet {
    name: string;
    description: string;
    img: string;
    align: string;
}

export const planets: Planet[] = [
    {
        name: 'Глорбус-78',
        description: 'Місце, де захід сонця супроводжується аплодисментами хмар.',
        img: glorbus,
        align: 'left'
    },
    {
        name: 'Синтулія',
        description: 'Планета, де все працює на звукових хвилях: двері відкриваються сміхом, а транспорт запускається, коли хтось наспіває пісню з 2000-х.',
        img: syntulia,
        align: 'right'
    },
    {
        name: 'Пеколя-5R',
        description: 'Гаряча, як чайник на максимумі. Тут навіть каміння пітніє, а туристам видають вогнетривкі капці.',
        img: pekolia,
        align: 'left'
    },
    {
        name: 'Зелептус-7',
        description: 'Місцеві мешканці — химерні зелені істоти на антигравітаційних роликах.',
        img: zeleptus,
        align: 'right'
    },
    {
        name: 'Фіолентара',
        description: 'За легендою, планета має власний настрій: якщо їй не сподобався твій корабель, вона може ввімкнути "фіолетовий шторм".',
        img: fiolentara,
        align: 'left'
    },
    {
        name: 'Грильмар',
        description: 'Грильмар — планета, на якій пекло взяло відпустку. Ідеальне місце, щоб трохи підгоріти, але не згоріти дотла.',
        img: hrylmar,
        align: 'right'
    },
    {
        name: 'Сиротонія',
        description: 'Гравітація тут настільки делікатна, що будь-який предмет повільно підстрибує, як швейцарський сир на батуті.',
        img: syrotonia,
        align: 'left'
    },
    {
        name: 'Бульбульонія',
        description: 'Найніжніша планета у відомому всесвіті, вкрита пухирчастими рожевими хвилями та ароматом малинового зефіру.',
        img: bulbulonia,
        align: 'right'
    },
    {
        name: 'Карусельта',
        description: 'Тут немає різких форм — лише плавні лінії, що повільно змінюють свій візерунок, як ніби сам космос малює аквареллю.',
        img: karuselta,
        align: 'left'
    },
    {
        name: 'Орілат',
        description: 'Вважається ідеальним орієнтиром для мандрівників: її орбіта світиться в туманних секторах галактики й слугує як природний навігатор.',
        img: orilat,
        align: 'right'
    },
    {
        name: 'Гларіс',
        description: 'Мандрівники часто називають її «планетою думки», бо саме тут виникають відповіді, про які не питав уголос.',
        img: hlaris,
        align: 'left'
    },
    {
        name: 'Рубела',
        description: 'Тут панує хаос у найкращому сенсі слова — хвилі магми застигли в чудернацьких візерунках, як сліди невидимого танцю.',
        img: rubela,
        align: 'right'
    },
    {
        name: 'Солара',
        description: 'Тут атмосфера містить частинки радості — саме тому кораблі, що пролітають повз, завжди стають трохи легшими.',
        img: solara,
        align: 'left'
    },
    {
        name: 'Іворель',
        description: 'Кажуть, що її атмосфера зберігає давні спогади — але лише ті, які гріють. Іворель не кличе, вона приймає, коли ти готовий.',
        img: ivorel,
        align: 'right'
    },
    {
        name: 'Харгон',
        description: 'Тут не світять яскраві вогні й не лунає музика, але саме так виглядає спокій після бурі. Харгон — форпост для тих, хто вміє мовчати.',
        img: hargon,
        align: 'left'
    },
];
