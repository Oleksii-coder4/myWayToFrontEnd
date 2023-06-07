async function getData(config) {
    try{
        let url = config.apiUrl
        let response = await fetch(url)
        let data = await response.json()
        let users = Object.values(data.data)
        drawTable(config, users, data)
    }catch(err) {console.log(err)}
};
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
function drawTable(configData, users, dataWithKeys) {
    // копіювання данних щоб не було траблів
    const config = JSON.parse(JSON.stringify(configData))
    const userData = JSON.parse(JSON.stringify(users))
    const data = JSON.parse(JSON.stringify(dataWithKeys)) 
    // перевірка, чи є перент
    if (config.parent) {
        const parentElement = document.querySelector(config.parent)
        // перевірка, чи є колонки в переданному конфігу
        if(config.columns) {
            parentElement.innerHTML = 
            `<table>
                <thead>
                    <tr>
                        <th>Actions</th>
                        <th>№</th>
                    </tr>
                </thead>   
            </table>`;
            // дістаємо tr з перента
            let tr = document.querySelector(config.parent)
                .querySelector('table')
                .querySelector('thead')
                .querySelector('tr');
            // перебираємо колонки, робимо з них хтмл та наповнюємо tr
            config.columns.forEach(function(item,index,array) {
                let th = document.createElement('th')
                if(item.title.startsWith('https://')) {
                    th.innerHTML =`<img src="${item.title}"></img>`
                    let img = th.querySelector('img')
                    img.style.cssText = `
                    max-width: 125px;
                    max-height: 125px;`
                    tr.append(th)
                }else{
                    th.innerText = item.title
                    tr.append(th)
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
                    <thead>
                        <tr>
                            <th>Actions</th>
                            <th>№</th>
                        </tr>   
                    <thead>
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
            // перебираємо об єкт данних з ключиками
            Object.keys(data.data).forEach((key, index) => {
                    let item = data.data[key] // сам об'єкт данних
                    let tr = document.createElement('tr')
                tbody.append(tr)
                    // додаю нумерацію
                let numTd = document.createElement('td')
                numTd.style.cssText = 
                `padding: 10px;
                border: 1px solid rgb(182, 183, 193);
                text-align: center;`;
                numTd.innerHTML = `${index+1}`
                tr.prepend(numTd);
                    // додаю кнопку видалення
                let deleteButton = document.createElement('button')
                deleteButton.innerHTML = '-'
                deleteButton.classList.add('table__button-delete')
                let buttonTd = document.createElement('td')
                buttonTd.prepend(deleteButton)
                buttonTd.style.cssText =
                    `border: 1px solid #b6b7c1;
                    text-align: center;`;
                deleteButton.style.cssText = 
                    `width: 30px;
                    height: 30px;
                    background-color: #e53935;
                    border: none;
                    border-radius: 50%;
                    color: white;
                    font-size: 16px;
                    font-weight: bold;
                    cursor: pointer;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                    `;
                tr.prepend(buttonTd)
                    // додаю дата-айді до кнопки
                deleteButton.setAttribute('data-id', key)
                    // перебираємо обьект данних
                Object.keys(item).forEach(function(key, innerIndex, innerArray) {
                        let td = document.createElement('td')
                    td.style.cssText = 
                        `padding: 10px;
                        border: 1px solid rgb(182, 183, 193);
                        text-align: center;`; 
                    // перевірка на айді
                    if(key == 'id') {
                        tr.setAttribute(key, item[key])
                        td.innerText = item[key]
                        tr.append(td)
                    // перевірка на картинку
                    }else if(item[key].startsWith('https://')) {
                        td.innerHTML = `<img src="${item[key]}" alt="${item[key]}"></img>`
                        let img = td.querySelector('img')
                        img.style.cssText = 
                            `max-width: 125px;
                            max-height: 125px;
                            `
                        tr.append(td)
                    }else{
                        td.innerText = item[key]
                        tr.append(td)
                    }
                })
            })
            // робимо табличку гарною
            let table = parentElement.querySelector('table')
            table.style.cssText =  
                `max-width: 500px;
                text-shadow: black 1px 1px 0px;
                font-family: cursive;
                padding: 20px;
                font-style: italic;
                color: rgb(102, 102, 102);
                letter-spacing: 1px;
                background-color: gainsboro;
                border: 12px ridge #dcdcdc;`;
            let addDataButton = document.createElement('button')
            addDataButton.classList.add('addDataButton')
            let tdForDataButton = document.createElement('td')
            tdForDataButton.style = `text-align: center;`
            tdForDataButton.prepend(addDataButton)
            addDataButton.innerHTML = '+'
            addDataButton.style.cssText = 
                `
                min-width: 20px;
                min-height: 20px;
                border: 2px solid #000;
                border-radius: 50%;
                background-color: transparent;
                color: green;
                font-size: 20px;
                font-weight: bold;
                cursor: pointer;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                `
            let trForAddButton = document.createElement('tr')
            trForAddButton.append(tdForDataButton)
            tbody.prepend(trForAddButton) 
            function drawInputs(event) {
                // збираю ключі для майбутнього об єкта
                    let objectKeys = null
                Object.values(data.data).some((item) => {
                    if(item) {
                    objectKeys = Object.keys(item)
                        return true
                    }
                })
                // перебираю довжину масиву конфігу рядків, на один більше 
                // так як замінюю його на пустий td щоб все було гарненько 
                for(let i = 0; i < config.columns.length + 1; i++) {
                    let td = document.createElement('td')
                    // це для пустого тд на місці нумерації
                    if(i === 0) {
                        trForAddButton.append(td)
                    }else {
                        let input = document.createElement('input')
                        td.append(input)
                        input.style.cssText = 
                        `padding: 8px;
                        border: 1px solid #ccc;
                        border-radius: 5px;
                        font-size: 14px;`
                        trForAddButton.append(td)
                    }
                }
                addDataButton.innerHTML = '➣'
                // прибираю старий обробник, навішую новий на відправку
                addDataButton.removeEventListener('click', drawInputs)
                // другий клік по кнопці
                function postData() {
                     let tds = trForAddButton.querySelectorAll('td')
                     let successInputsValues = []
                     for(let i = 0; i < tds.length; i++) {
                        let input = tds[i].querySelector('input')
                        if(input && input.value !== '') {
                            // vse good successstyles додати зелену рамку!
                            input.style.cssText =`
                            padding: 8px;
                            border: 1px solid #ccc;
                            border-radius: 5px;
                            font-size: 14px;
                            border-color: #00ff00;`;
                            successInputsValues.push(input.value)
                        }else if (input){
                            input.style.cssText = `
                            padding: 8px;
                            border: 1px solid #ccc;
                            border-radius: 5px;
                            font-size: 14px;
                            border-color: #ff0000;`
                        }
                     }
                    //  якщо всі поля заповнені то постимо
                     if(successInputsValues.length == tds.length - 2) {
                        let objectToSend = objectKeys.reduce(function(prevValue, key, index) {
                            prevValue[key] = successInputsValues[index]
                            return prevValue
                        }, {})
                        {  //пост 
                            let url = config.apiUrl
                            let init = {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                  },
                                body: JSON.stringify(objectToSend)
                            }
                            async function post() {
                                try {
                                    await fetch(url, init)
                                    let response = await fetch(url)
                                    let data = await response.json()
                                    let users = Object.values(data.data)
                                    drawTable(config, users, data)
                                }catch(err) {console.log(err)}
                            }
                            post()
                            addDataButton.removeEventListener('click', postData)
                        }
                     }
                }
                // навішую слухач на пост запит
                addDataButton.addEventListener('click', postData)
            }
            // навішую слухач кліку на малювання інпутів
            addDataButton.addEventListener('click', drawInputs)
            // навішую слухач на кнопку при рендері таблички
            table.addEventListener('click', function(event) {
                if(event.target.closest('.table__button-delete')) {
                    let id = event.target.getAttribute('data-id')
                    let url = config.apiUrl
                    let init = {
                        method: 'DELETE',
                    }
                    async function del() {
                        try {
                            await fetch(url + '/' + id, init)
                            let response = await fetch(url)
                            let data = await response.json()
                            let users = Object.values(data.data)
                            drawTable(config, users, data)
                        }catch(err) {console.log(err)}      
                    }   
                    del()    
                }
            })
        }
    }else{console.log('Enter parent in your config')}
}
