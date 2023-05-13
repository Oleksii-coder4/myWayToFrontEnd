// function () {
//     parsing data
//     return function () {
//         return zbagasinii text
//     }
// }
// csv parser
const csvParse = function(tableText) {
    // разбиваю текст через переход на новую строку, получаю массив данных городов
    const arrayOfCities = tableText.split('\n')
    console.log(arrayOfCities)


    // парсинг на массив вида [[kyiv,23,123],[Krop,123,123,123]]
    arrayOfCities.forEach(function(item, index, array) {
        let filterArray = item.split(',');
        arrayOfCities[index] = filterArray
    })
    

}

let a = csvParse(`48.30,32.16,Кропивницький,200000,
44.38,34.33,Алушта,31440,
49.46,30.17,Біла Церква,200131,
49.54,28.49,Бердичів,87575,#некоммент`)

