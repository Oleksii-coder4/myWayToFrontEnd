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
    }, {})

    // alert(invalidItems, 'Ці рядки були введені невалідно')
    // функция которую вернет основная
    return function(str) {
        let arrayOfCitiesNames = Object.keys(objectOfCities).map(function(key, index) {
            return objectOfCities[key].name
        })
        // alert(arrayOfCitiesNames)
        console.log(arrayOfCitiesNames)
        let nameOfCity = 'Кропивницький'  //prompt('Введіть назву міста про яку хочете отримати інформацію серед перерахованих')
        nameOfCity.replace(nameOfCity, objectOfCities.nameOfCity)
        console.log(nameOfCity)
    }
}
// let dataOfCities = prompt(`Введіть дані населених пунктів 
//         1) Значення записуйте через кому (1 - корд х, 2 - корд у, 3 - назва населеного пункту, 4 - кількість населення)
//         2) Пілся введення інформації про населений пункт перейдіть на новий рядок (шифт + ентер), та почніть записувати данні
//         3) Не пишіть # перед значенням, це привиде до помилки`)
let a = csvParse(`48.30,32.16,Кропивницький,1234,
44.38,34.33,Алушта,1234,
49.46,30.17,#Біла Церква,200131,
49.54,28.49,Бердичів,87575,#некоммент
46.49,36.58,Бердянськ,121692,
49.15,28.41,Вінниця,356665,
45.40,34.29,Джанкой,43343,`)

console.log(a())
