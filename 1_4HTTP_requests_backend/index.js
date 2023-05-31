async function getData(config) {
    let url = config.apiUrl
    let response = await fetch(url)
    let data = await response.json()
    let users = Object.values(data.data)
    DataTable(config, users)
}
let config = {
    parent: '#usersTable',
    columns: [
        {title: 'Ім’я', value: 'name'},
        {title: 'Прізвище', value: 'surname'},
        {title: 'img', value: 'img'},
        {title: 'birthday', value: 'date'},
    ],
    apiUrl: 'https://mock-api.shpp.me/OleksiiBokii/users'
};
getData(config)
// функція яка малює таблички
function DataTable(configData, data) {
    // копіювання данних щоб не було траблів
    const config = JSON.parse(JSON.stringify(configData))
    const userData = JSON.parse(JSON.stringify(data))
    // перевірка, чи є перент
    if (config.parent) {
        const parentElement = document.querySelector(config.parent)
        // перевірка, чи є колонки в переданному конфігу
        if(config.columns) {
            parentElement.innerHTML = 
            `<table>
                <thead>
                    <tr>
                        <th>№</th>
                    </tr>
                </thead>   
            </table>`;
            // дістаємо tr з перента
            let theadTr = document.querySelector(config.parent)
                .querySelector('table')
                .querySelector('thead')
                .querySelector('tr');
            // перебираємо колонки, робимо з них хтмл та наповнюємо tr
            config.columns.forEach(function(item,index,array) {
                let th = document.createElement('th')
                if(item.title.startsWith('https://')) {
                    th.innerHTML =`<img src="${item.title}"></img>`
                    theadTr.append(th)
                }else{
                    th.innerHTML = item.title
                    theadTr.append(th)
                }
                
            });
        }
        // перевіряємо чи є данні
        if(userData) {
            // перевіряємо чи є колонки, якщо нема пишемо table та наповнюємо
            // якщо є, то наповнюємо table з tbody
            if(!config.columns) {
                parentElement.innerHTML = 
                `<table>
                    <tbody>
                    
                    </tbody> 
                </table>`;
            }else {
                let tbody = document.createElement('tbody') //цей тбоді видно тільки в елсi, за межами його нема
                parentElement.querySelector('table').append(tbody)
            };
            // дістаємо тбоді
            let tbody = parentElement.querySelector('table')
                .querySelector('tbody')
            // перебираємо массив данних 
            userData.forEach(function(item,index,array) {
                // робимо під кожен об'єкт данних tr, та додаємо в Тбоді
                let tr = document.createElement('tr')
                tbody.append(tr)
                // додаю першим значенням number, щоб потім замінити його на номер
                let numTd = document.createElement('td')
                numTd.style = 'padding: 10px;'
                numTd.innerHTML = `${index+1}`
                tr.append(numTd)
                let button = document.createElement('button')
                button.innerHTML = `delete`
                // перебираємо обьект данних
                Object.keys(item).forEach(function(key, innerIndex, innerArray) {
                    let td = document.createElement('td')
                    td.style = 'padding: 10px;'
                    // замінюю мої додані н 
                    if(key == 'id') {
                        tr.setAttribute(key, item[key])
                    // перевірка на картинку
                    }else if(item[key].startsWith('https://')) {
                        td.innerHTML = `<img src="${item[key]}"></img>`
                        tr.append(td)
                    }else{
                        td.innerHTML = item[key]
                        tr.append(td)
                    }
                    
                    
                })
            })
            let table = parentElement.querySelector('table')
            table.style.cssText =  
                `text-shadow: black 1px 1px 0px;
                font-family: cursive;
                padding: 20px;
                font-style: italic;
                color: rgb(102, 102, 102);
                letter-spacing: 1px;
                background-color: gainsboro;
                border: 12px ridge;`;
        }
    }else{console.log('Enter parent in your config')}
    
}
