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
                th.innerHTML = item.title
                theadTr.append(th)
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
                let tbody = document.createElement('tbody') //цей тбоді видно тільки в елсе, за межами його нема
                parentElement.querySelector('table').append(tbody)
            };
            // дістаємо тбоді
            let tbody = document.querySelector(config.parent)
                .querySelector('table')
                .querySelector('tbody')
            // перебираємо массив данних 
            userData.forEach(function(item,index,array) {
                // робимо під кожен об'єкт данних tr, та додаємо в Тбоді
                let tr = document.createElement('tr')
                tbody.append(tr)
                // додаю першим значенням н, щоб потім замінити його на номер
                item = {n: ' nubmer ', ...item}
                // перебираємо обьект данних
                Object.keys(item).forEach(function(key, innerIndex, innerArray) {
                    let td = document.createElement('td')
                    td.style = 'padding: 10px;'
                    // замінюю мої додані н 
                    if(innerIndex == 0) {
                        td.innerHTML = index + 1
                        tr.append(td)
                    }else if(key == 'id') {
                        tr.setAttribute(key, item[key])
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

const config1 = {
parent: '#usersTable2',
columns: [
    {title: 'Ім’я', value: 'name'},
    {title: 'Прізвище', value: 'surname'},
    {title: 'Вік', value: 'age'},
]
};
const config2 = {
    parent: '#usersTable',
    columns: [
        {title: 'Ім’я', value: 'name'},
        {title: 'Прізвище', value: 'surname'},
        {title: 'Вік', value: 'age'},
    ]
};
const config3 = {
    parent: '#usersTable3',
    columns: [
        {title: 'Ім’я', value: 'name'},
        {title: 'Прізвище', value: 'surname'},
        {title: 'Вік', value: 'age'},
    ]
};

const users = [
{id: 30050, name: 'Вася', surname: 'Петров', age: 12},
{id: 30051, name: 'Вася', surname: 'Васечкін', age: 15},
{id: 30050, name: 'Вася', surname: 'Петров', age: 12},
{id: 30051, name: 'Вася', surname: 'Васечкін', age: 15},
{id: 30050, name: 'Вася', surname: 'Петров', age: 12},
{id: 30051, name: 'Вася', surname: 'Васечкін', age: 15},
];
DataTable(config2, users)
DataTable(config3, users)
DataTable(config1, users);
 