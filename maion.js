/*
-  Створити функцію конструктор для об'єкту який описує теги
Властивості
-назва тегу
- опис його дій
- масив з атрибутами (2-3 атрибути максимум)
Кожен атрибут описати як окремий який буде містити
-назву атрибуту
-опис дії атрибуту
інформацію брати з htmlbook.ru
-  Створити класс  для об'єкту який описує теги
Властивості
 -назва тегу
 - опис його дій
 - масив з атрибутами (2-3 атрибути максимум)
 Кожен атрибут описати як окремий який буде містити
 -назву атрибуту
 -опис дії атрибуту
Таким чином описати теги
-a
-div
-h1
-span
-input
-form
-option
-select*/
/*function TagA (titleofTag,action,attribyts){
    this.titleofTag = titleofTag || 'No Tittle';
    this.action = action || 'No Action';
    this.attribyts = attribyts || [];
}
let title = '<a>';
let action = `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`;
let attribyts = [
    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
    {titleOfAttr: 'coords\n', actionOfAttr: 'Устанавливает координаты активной области'},
    {titleOfAttr: 'download\n', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
];
let a = new TagA (title,action,attribyts);
console.log(a);

class TagDiv{
    constructor(titleofTag,action,attribyts) {
        this.titleofTag = titleofTag || 'No Tittle';
        this.action = action || 'No Action';
        this.attribyts = attribyts || [];
    }
}
let Tdiv = new TagDiv('<div>',
    'Элемент <div> является блочным элементом и предназначен для выделения ' +
    'фрагмента документа с целью изменения вида содержимого','align\n -Задает выравнивание содержимого тега <div>.')
console.log(Tdiv);
class ThOne extends TagDiv{
    constructor(titleofTag,action,attribyts,sintaks) {
        super(titleofTag,action,attribyts);
        this.sintaks = sintaks;
    }
}
let tH1 = new ThOne('<h1>','тег <h1> представляет собой наиболее важный заголовок первого уровня',
    'align\n' +
    'Определяет выравнивание заголовка.\n','Закрывающий тег\n' +
    'Обязателен.');
console.log(tH1);
class TagSpan extends ThOne{
    constructor(titleofTag,action,attribyts,sintaks) {
        super(titleofTag,action,attribyts,sintaks);
    }
}
let tspan = new TagSpan(' <span>','Тег <span> предназначен для определения строчных элементов документа',
    'Для этого тега доступны универсальные атрибуты и события.','Закрывающий тег\n' +
    'Обязателен.')
console.log(tspan);
class TagInput extends TagSpan{
    constructor(titleofTag,action,attribyts,sintaks) {
        super(titleofTag,action,attribyts,sintaks);
    }
}
let tInput = new TagInput('<input>','Тег <input> является одним из разносторонних ' +
    'элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
    'accept\n - Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.',
    '\n' +
    'HTML\t\n' +
    '<input >\n' +
    'XHTML\t\n' +
    '<input />');
console.log(tInput);
class TagForm extends TagInput{
    constructor(titleofTag,action,attribyts,sintaks) {
        super(titleofTag,action,attribyts,sintaks);
    }
}
let tForm = new TagForm('<form>','Связывает поле с формой по её идентификатору. ' +
    'Такая связь необходима в случае, когда поле располагается за пределами <form>, ' +
    'например, при создании её программно или по соображениям дизайна.',
    ['Идентификатор формы (значение атрибута id тега <form>).'],
    '<input type="<тип>" form="<идентификатор>">\n' +
    '<form id="<идентификатор>">...</form>');
console.log(tForm);
class TagOption extends TagForm{
    constructor(titleofTag,action,attribyts,sintaks) {
        super(titleofTag,action,attribyts,sintaks);
    }
}
let tOption = new TagOption('<option>','Тег <option> определяет отдельные пункты списка,' +
    ' создаваемого с помощью контейнера <select>',['\n' +
    'disabled\n' +
    'Заблокировать для доступа элемент списка.'],'<select>\n' +
    '  <option>Пункт 1</option>\n' +
    '  <option>Пункт 2</option>\n' +
    '</select>');
console.log(tOption);

class TagSelect extends TagOption{
    constructor(titleofTag,action,attribyts,sintaks) {
        super(titleofTag,action,attribyts,sintaks);
    }
}
let tSelect = new TagSelect('<select>',
    'Тег <select> \позволяет создать элемент интерфейса в виде раскрывающегося списка, ' +
    'а также список с одним или множественным выбором, как показано далее',
    ['accesskey\n' +
    'Позволяет перейти к списку с помощью некоторого сочетания клавиш.\n' +
    'autofocus\n' +
    'Устанавливает, что список получает фокус после загрузки страницы.'],
    '<select>\n' +
    '  <option>Пункт 1</option>\n' +
    '  <option>Пункт 2</option>\n' +
    '</select>');
console.log(tSelect);*/
/*
 Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, ' +
'об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
-- info () - яка виводить всю інформацію про автомобіль
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car*/
/*
function Car (model,production,year,maxSpeed,engineVolume){
    this.model= model;
    this.production= production;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume= engineVolume;
}
let model = 'Ford Fusion';
let production = 'USA Ford Motors';
let year = '2015';
let maxSpeed = '240 km/h';
let engineVolume = '1.6l';
let info = new Car (model,production,year,maxSpeed,engineVolume);
console.log(info);
class CarNewValue  {
    constructor(model,production,year,maxSpeed,engineVolume,driver){
    this.model= model;
    this.production= production;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume= engineVolume;
    this.driver = driver;
    }
    driverS(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    infoCar(){
        console.log(`${this.model} ${this.production} ${this.year} ${ this.engineVolume} `)
    }
    increaseMaxSpeed (newSpeed){
        this.maxSpeed = newSpeed;
    }
    changeYear (newValue){
        this.year = newValue;
    }
    addDriver (newDriver){
        this.driver = newDriver;
    }
}
let red = new CarNewValue('Audio','Germany','2002','120','2.5')
red.infoCar();
red.increaseMaxSpeed(220);
red.changeYear(3.5);
red.addDriver('водій');
red.driverS();
console.log(red);
*/

/*
-створити класс попелюшка з полями ім'я, вік, розмір ноги
--Створити 10 попелюшок , покласти їх в масив
--Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
-- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
*/
/*class Female {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
}
class Cinderella extends Female{
    constructor(name,age,size) {
    super(name,age);
    this.size = size;}
}
class Prince extends Female{
    constructor(name,age,sizeFoot) {
        super(name,age);
        this.sizeFoot= sizeFoot;}
}
let PrinceT = new Prince('rem',23,34);
let allCinderls =[
    new Cinderella('Tasya',23,39),
    new Cinderella('Tanya',19,35),
    new Cinderella('Ayka',25,34),
    new Cinderella('Umi',22,42),
    new Cinderella('Lasya',23,39),
    new Cinderella('Kaya',20,38),
    new Cinderella('Fasya',18,37),
    new Cinderella('Rusya',26,40),
    new Cinderella('Masya',19,41),
    new Cinderella('Asya',22,36),
]
console.log(PrinceT);
for (const Cinderella of allCinderls) {
    if (Cinderella.size === PrinceT.sizeFoot){
        console.log(Cinderella);
    }
}*/
/*
-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
--Створити 10 попелюшок , покласти їх в масив
--Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов,
та функцію "пошук попелюшки"
-- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить*/
function Cinder (name,age,size){
    this.name=name;
    this.age = age;
    this.size= size;
}
class Prince extends Cinder {
    constructor(name, age, sizeLost) {
        super(name, age);
        this.sizeLost = sizeLost;
    }
    findCinder(array) {
        for (const Cinder of array) {
            if (Cinder.size === PrinceR.sizeLost){
                console.log(Cinder)
            }
        }
    }
}
let PrinceR= new Prince('rem',23,34);
const allCinderls =[
    new Cinder('Tasya',23,39),
    new Cinder('Tanya',19,35),
    new Cinder('Ayka',25,34),
    new Cinder('Umi',22,42),
    new Cinder('Lasya',23,39),
    new Cinder('Kaya',20,38),
    new Cinder('Fasya',18,37),
    new Cinder('Rusya',26,40),
    new Cinder('Masya',19,41),
    new Cinder('Asya',22,36),
]
PrinceR.findCinder(allCinderls);



