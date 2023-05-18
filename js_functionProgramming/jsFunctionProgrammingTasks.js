// function () {
//     parsing data
//     return function () {
//         return zbagasinii text
//     }
// }
// csv parser
const csvParse = function(tableText) {
    // разбиваю текст через переход на новую строку, получаю массив данных городов на вид [[kyiv,23,234 - но это как один рядок, а не разные значения]]
    let arrayOfCities = tableText.split(/\n|--_--/)
    // парсинг на массив вида [[kyiv,23,123],[Krop,123,123,123]]
    arrayOfCities.forEach(function(item, index, array) {
        let filterArray = item.split(',');
        arrayOfCities[index] = filterArray
    });
    //фильтрация невалидных элементов массива через filter
    arrayOfCities.forEach(function(item,index,array) {
        // перебор внутреннего элемента (с 4 параметрами - координаты, название города и кол жителей), 
        item.forEach(function(junItem, junIndex, junArray) {
            // filter не видит пустых рядков, по этому он их игнорирует и отдельной проверки на это не нужно
            arrayOfCities[index] = item.filter(function(junItem, junIndex, junArray) { 
                if(junItem[0] !== '#') {
                    return junItem
                }
            })
        })
    });
    let invalidItems = []   //переменная для хранения невалидныъ строк
    // филтрация невалидных элементов, их удаление
    arrayOfCities = arrayOfCities.filter(function(item, index, array) {
        if(item.length == 4) {
            return arrayOfCities[index]
        }else{
            invalidItems.push(item)
        }
    });
    // создание асоциативный массив (было сказано через map но мне показался этот способ более простым)
    arrayOfCities.forEach(function(item,index,array) {
        let objOfData = {
            x: item[0],
            y: item[1],
            name: item[2],
            population: item[3],
        }    
        arrayOfCities[index] = objOfData
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
    // функция которую вернет основная
    return function(str) {
        // вывод невалидных рядов
        alert(`${invalidItems} - ці значення були записани невалідно`);
        // перебор обьекта с городами, создание массива названий городов
        let arrayOfCitiesNames = Object.keys(objectOfCities).map(function(key, index) {
            return objectOfCities[key].name
        });
        let Str = prompt(`Введіть текст, з використанням перерахованих міст ${arrayOfCitiesNames}`);
        // создание регулярного выражения на подобии Krop|Kyiv
        let regexNamesOfCities = new RegExp(arrayOfCitiesNames.join('|'), 'gi' )
        // поиск совпадающих названий городов, создание массива на основе совпадений
        let namesOfCitiesInStr = Str.match(regexNamesOfCities)
        // замена слов в строке, перебираю массив ИЗ названий городов в переданной строке, в этом цикле перебираю сам обьект городов с инфой,
        // сравниваю название города из массива с названием города из обьекта, если совпадает то создаю 1 регулярныое выражение, что бы потом с помощью реплейс подставить вместо названия города инфу про него
        namesOfCitiesInStr.forEach(function(item,index,array) {
            Object.keys(objectOfCities).forEach(function(key, junIndex) {
                if(namesOfCitiesInStr[index] == objectOfCities[key].name) {
                    let regexOfSearchingValue = new RegExp(namesOfCitiesInStr[index])
                    Str = Str.replace(regexOfSearchingValue, JSON.stringify(objectOfCities[key])) // json.stingify превращает обьект в формат джейсон, тогда он нормально отображается в строке, а не вот это [object Object]
                    console.log(Str)
                    return Str
                }
            })
        });
        alert(Str)
        console.log(Str)
    }
};
let dataOfCities = prompt(`Введіть скопійовані дані населених пунктів, або при вводі тексту в цьому полі дотримуйтесь правил:
        1) Значення записуйте через кому (1 - корд х, 2 - корд у, 3 - назва населеного пункту, 4 - кількість населення)
        2) Пілся введення інформації про населений пункт напишіть --_--, та почніть записувати данні
        3) Не пишіть # перед значенням, це привиде до помилки`)

let a = csvParse(dataOfCities)
a()

