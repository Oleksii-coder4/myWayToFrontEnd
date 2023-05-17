// function () {
//     parsing data
//     return function () {
//         return zbagasinii text
//     }
// }
// csv parser
const csvParse = function(tableText) {
    // разбиваю текст через переход на новую строку, получаю массив данных городов
    let arrayOfCities = tableText.split('\n');
    // парсинг на массив вида [[kyiv,23,123],[Krop,123,123,123]]
    arrayOfCities.forEach(function(item, index, array) {
        let filterArray = item.split(',');
        arrayOfCities[index] = filterArray
    });
    //фильтрация невалидных элементов массива через filter
    arrayOfCities.forEach(function(item,index,array) {
        // перебор внутреннего элемента (с 4 параметрами - координаты, название города и кол жителей), 
        item.forEach(function(junItem, junIndex, junArray) {
            arrayOfCities[index] = item.filter(function(junItem, junIndex, junArray) {
                if(junItem[0] !== '#') {
                    return junItem
                }
            })
        })
    });
    let invalidItems = []   //переменная для хранения невалидныъ строк
    // филтрация невалидных элементов, их удаление
    arrayOfCities = arrayOfCities.filter(function(junItem, junIndex, junArray) {
        if(junItem.length == 4) {
            return arrayOfCities[junIndex]
        }else{
            invalidItems.push(junItem)
        }
    });
    // создание асоциативный массив (было сказано через map но мне показался этот способ более простым)
    arrayOfCities.forEach(function(item,index,array) {
        let a = {
            x: item[0],
            y: item[1],
            name: item[2],
            population: item[3],
        }    
        arrayOfCities[index] = a
    });
    // сортировка элементов, от меньшего к большему
    arrayOfCities.sort(function(secondElem,firstElem) {
        return secondElem.population - firstElem.population
    });
    // переварачиваю массив от большего к меньшему
    arrayOfCities.reverse();
    // добавление нового свойства top
    arrayOfCities.forEach(function(item, index) {
        item.top = index + 1
    });
    // обрезание массива топ 10 по населению
    arrayOfCities = arrayOfCities.slice(0, 11);
    // делаю один обьект из массива обьектов
    let objectOfCities = arrayOfCities.reduce(function(previosValue, item, index, array) {
        previosValue[item.name] = item
        return previosValue
    }, {});
    console.log(objectOfCities)
    // alert(invalidItems, 'Ці рядки були введені невалідно')
    // функция которую вернет основная
    return function(str) {
        // перебор обьекта с городами, создание массива названий городов
        let arrayOfCitiesNames = Object.keys(objectOfCities).map(function(key, index) {
            return objectOfCities[key].name
        })
        // alert(arrayOfCitiesNames)
        console.log(arrayOfCitiesNames)
        // создание регулярного выражения на подобии Krop|Kyiv
        let regexNamesOfCities = new RegExp(arrayOfCitiesNames.join('|'), 'gi' )
        // тестовая строка, потом будет str, а вообще будет через prompt
        let Str = 'Кропивницький - супер місто, Алушта, Джанкой'
        // поиск совпадающих названий городов, создание массива на основе совпадений
        let namesOfCitiesInStr = Str.match(regexNamesOfCities)
        // замена слов в строке, перебираю массив ИЗ названий городов в переданной строке, в этом цикле перебираю сам обьект городов с инфой,
        // сравниваю название города из массива с названием города из обьекта, если совпадает то создаю 1 регулярныое выражение, что бы потом с помощью реплейс подставить вместо названия города инфу про него
        namesOfCitiesInStr.forEach(function(item,index,array) {
            Object.keys(objectOfCities).forEach(function(key, junIndex) {
                if(namesOfCitiesInStr[index] == objectOfCities[key].name) {
                    let regexOfSearchingValue = new RegExp(namesOfCitiesInStr[index])
                    let finalStr = Str.replace(regexOfSearchingValue, JSON.stringify(objectOfCities[key])) // json.stingify превращает обьект в формат джейсон, тогда он нормально отображается в строке, а не вот это [object Object]
                    console.log(finalStr)
                }
            })
        });
    }
};
// let dataOfCities = prompt(`Введіть дані населених пунктів 
//         1) Значення записуйте через кому (1 - корд х, 2 - корд у, 3 - назва населеного пункту, 4 - кількість населення)
//         2) Пілся введення інформації про населений пункт перейдіть на новий рядок (шифт + ентер), та почніть записувати данні
//         3) Не пишіть # перед значенням, це привиде до помилки`)
let mus = {a:12312, b:12321312, c:12312312321312, d:1231244124124, g:21432412421, fg:21321321, gt:32423432432, ju:123123213213}

let a = csvParse(`48.30,32.16,Кропивницький,1234,
44.38,34.33,Алушта,1234,
49.46,30.17,#Біла Церква,200131,
49.54,28.49,Бердичів,87575,#некоммент
46.49,36.58,Бердянськ,121692,
49.15,28.41,Вінниця,356665,
45.40,34.29,Джанкой,43343,`)

console.log(a())
