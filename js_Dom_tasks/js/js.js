

// const block = document.querySelectorAll('#block');
// const button = document.querySelectorAll('#button')
// const secondButton = document.querySelectorAll('#second_button')
// const thirdButton = document.querySelectorAll('#third_button')
// button[0].addEventListener('click', function(event) {
//     block.classList.toggle('hidden')
//     if(block.classList.contains('hidden')) {
//         console.log('hidden')
//         block.style.display = 'none'
//     }else {
//         console.log('visible')
//         block.style.display = 'inline-block'
//     }
// })

// secondButton[0].addEventListener('click', function(event) {
//     block.classList.toggle('hidden')
//     if(block.classList.contains('hidden')) {
//         console.log('hidden')
//         block.remove()
//     }
// })

// thirdButton[0].addEventListener('click', function(event) {
//   block[0].classList.toggle('main__block-hidden')
// })

// task with 5 blocks
// const mainHeader = document.querySelectorAll('#header');
// console.dir(mainHeader[0]);

// const button = document.querySelectorAll('#button');

// button[0].addEventListener('click', function(event) {
//       for(let i = 0; i < block.length; i++) {
//         block[i].classList.toggle('hidden')

//         if(block[i].classList.contains('hidden')) {
//             block[i].style.display = 'none'
//             console.log('hidden')
//         }else {
//             block[i].style.display = 'inline-block'
//             console.log('visible')
//         }
//       }
// })


// task 4

// const block = document.querySelector('#block');
// const input = document.querySelector('.main__input')
// const button = document.querySelector('#button')
// const body = document.querySelector('body')

// button.addEventListener('click', function(event) {
//   let selector = input.value;
//   let objects = document.querySelectorAll(selector)
//   console.log(objects)
//   for(let i = 0; i < objects.length; i++) {
//     objects[i].classList.toggle('hide')
//   }
// })

// task 5 - 7

// const mainBlock = document.querySelector('.main__block-yellow')
// console.log(mainBlock)

// function hello() {
//   alert('hello')
//   mainBlock.removeEventListener('click', hello)
//   mainBlock.addEventListener('click', function(event){
//     mainBlock.style.display = 'none'
//   })
// }

// mainBlock.addEventListener('click', hello)


// const button = document.querySelector('.main__button')
// const mainBlockRed = document.querySelector('.main__block-red')

// button.addEventListener('mouseover', function(event) {
//   mainBlockRed.classList.remove('hide')
// })

// button.addEventListener('mouseout', function(event) {
//   mainBlockRed.classList.add('hide')
// })


// const mainInputChangable = document.getElementsByClassName('.main__input')
// const mainInput = document.querySelector('.main__input')
// const mainBlockGreen = document.querySelector('.main__block-green')
// mainInput.addEventListener('focus', function(event) {
//   mainBlockGreen.classList.remove('hide')
//   console.log(mainInput.value)
  
// })

// mainInput.addEventListener('input', function(event) {
//   mainBlockGreen.classList.add('hide')
// })



// mainInput.addEventListener('keyup', function(event) {
//   if(!!mainInput.value == true) {
//     mainBlockGreen.classList.add('hide')
//   }
// })

// mainInput.addEventListener('keydown', function(event) {
//   if(!!mainInput.value == true) {
//     mainBlockGreen.classList.add('hide')
//   }
// })

// task 8

// const input = document.querySelector('.main__input')
// const button = document.querySelector('.main__button')

// const img = document.createElement('img')
// input.before(img)

// button.addEventListener('click', function(event) {
//   const link = input.value
//   img.setAttribute('src', link)
// })

// task 9

// const button = document.querySelector('.main__button')
// const texteare = document.getElementById('text')


// button.addEventListener('click', function(event) {
  
//   const links = texteare.value

//   const arr = links.split('\n')
  
//   for(let i = 0; i < arr.length; i ++) {
//     const img = document.createElement('img')
//     button.before(img)
//     img.setAttribute('src', arr[i])
//   }


// })

// task 10 - 11
// const main = document.querySelector('#main')
// const section = document.querySelector('.main__header')
// const positionCursor = document.querySelector('.main__position-cursor')

// main.addEventListener('mousemove', function(event) {
//   positionCursor.innerHTML = `X-pos : ${event.clientX} \n Y-pos ${event.clientY}`

// })

// const userLang = document.querySelector('.main__user-Lang')

// const userLangInfo = navigator.language || navigator.userLanguage
// console.log(userLangInfo)

// userLang.innerHTML = userLangInfo


// task 12

// if (navigator.geolocation) {
//   console.log('sdfdsfsdfdsfsd')
//   navigator.geolocation.getCurrentPosition( function(position) {
//     console.log("Ш: " + position.coords.latitude)
//     console.log("Д: " + position.coords.longitude)
//   }, console.log('error'))

// } else {
//   console.log("Geolocation is not supported by this browser.");
// }

// task 13


// const divInput = document.querySelector('#inputFirst')
// console.log(divInput.innerHTML)
// divInput.addEventListener('input', function(event) {
//   console.log(divInput.innerHTML)
//   localStorage.setItem('inputContent', JSON.stringify(divInput.innerHTML))
// })
// divInput.innerHTML = JSON.parse(localStorage.getItem('inputContent')) 



// const divInputSecond = document.querySelector('#inputSecond')
// console.log(divInputSecond)



// divInputSecond.addEventListener('input', function(event) {
//   console.log(document.cookie)
//   document.cookie = `inp = ${JSON.stringify(divInputSecond.innerHTML)}`
// })
// divInputSecond.innerHTML = document.cookie

// const divInputThird = document.querySelector('#inputThird')

// divInputThird.addEventListener('input', function(event) {
//   sessionStorage.setItem('thirdInputContent', JSON.stringify(divInputThird.innerHTML))
// })

// divInputThird.innerHTML = JSON.parse(sessionStorage.getItem('thirdInputContent'))

// task 14

// const button = document.querySelector('.main__button')

// window.addEventListener('scroll', function(event) {
//   console.log(scrollY)
//   if(scrollY > 150) {
//     button.style.display = 'inline-block' 
//   }else{
//     button.style.display = 'none'
//   }
// })

// button.addEventListener('click', function(event) {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
//   });
// })

// task 15


// const mainButton = document.querySelector('.main__block')
// console.log(mainButton)
// const innerButton = document.querySelector('.main__block--inner')

// mainButton.addEventListener('click', function(event) {
//   alert('Hello, thx')
// })

// innerButton.addEventListener('click', function(event) {
//   event.stopPropagation()
//   alert('Oh< thx')
// })

// task 16

// const button = document.querySelector('.main__button')
// const cover = document.createElement('div')

// button.addEventListener('click', function(event) {
//   console.log('asadasdas')
//   cover.style.cssText = `
//     height: 98vh;
//     width: 98vw;
//     background-color: black;
//     opacity: 70%;
//     position: absolute;
//   `
//   document.body.style.overflow = 'hidden'
//   button.before(cover)
// })

// cover.addEventListener('click', function(event) {
//   console.log('sdfsdf')
//   cover.classList.add('hide')
//   document.body.style.overflow = 'auto'
// })

// task 17

// const form = document.querySelector('.main__form')
// console.log(form)
// form.addEventListener('submit', function(event) {
//   event.preventDefault()
// })

// task 18

// const inputFile = document.querySelector('.main__input-file-ob')

// inputFile.addEventListener('dragover', function(event) {
//   event.preventDefault()
//   inputFile.innerHTML = '<p>В процессе </p>'
// })

// inputFile.addEventListener('dragleave', function(event) {
//   inputFile.innerHTML = '<p>Вы убрали обьект</p>'
// })

// inputFile.addEventListener('drop', function(event) {
//   event.preventDefault()
//   console.dir(`data ${event.dataTransfer.files[0].name}`)
//   inputFile.innerHTML = '<p>Обьект внутри</p>'
// })

// task 18.2

// input
const uploadButton = document.querySelector('#upload-button')
// block
const container = document.querySelector('.container')
// frequaet error
const error = document.querySelector('#error')
// there will appeard images
const imageDisplay = document.querySelector('#image-display')



// magic
const fileHandler = (file, name, type) => {
    // understandable all expect type
    if(type.split('/')[0] !== 'image') {
        error.innerHTML = '<p>The type of file is not successful</p>'
        return false
    }


    error.innerHTML = '';
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = () => {
        console.log(reader.result)
        const imageContainer = document.createElement('figure')
        const image = document.createElement('img')
        image.src = reader.result
        imageContainer.appendChild(image);
        imageContainer.innerHTML += `<figcaption>${name}</figcaption>`
        imageDisplay.append(imageContainer)
    }
}

uploadButton.addEventListener('change', (event) => {
    // uploadButton - input
    Array.from(uploadButton.files).forEach( (file) => {
        console.log(uploadButton.file)
        fileHandler(file, file.name, file.type)
    })
})

container.addEventListener('dragover', (event) => {
    event.preventDefault()
    container.classList.add('active')
})
container.addEventListener('dragleave', (event) => {
    event.preventDefault()
    container.classList.remove('active')
})

container.addEventListener('drop', (event) => {
    event.preventDefault()
    container.classList.remove('active')
    const data = event.dataTransfer
    Array.from(data.files).forEach((file) => {
        fileHandler(file, file.name, file.type)
    })

})