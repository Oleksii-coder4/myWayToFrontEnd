let startButton = document.querySelector('.timer__button-start');
let inputBlock = document.querySelector('.timer__input-block');
let outputBlock = document.querySelector('.timer__output-block');
let input = document.querySelector('.timer__input');
let title = document.querySelector('.title');
let placeToOutput = outputBlock.querySelector('h1');
let minusButton = document.querySelector('.timer__button-min');
let plusButton = document.querySelector('.timer__button-plus');

plusButton.addEventListener('click', function () {
     input.value = +input.value + 1;
});
minusButton.addEventListener('click', function () {
    if (input.value != 0) {
        input.value = +input.value - 1;
    }
});
startButton.addEventListener('click', function (event) {
    if (input.value && input.value > 0 && parseInt (+input.value) == +input.value) {
        inputBlock.classList.add('display-none');
        outputBlock.classList.remove('display-none');
        let minutesQuantity = +input.value;
        for (let index = 0; index < minutesQuantity; index++) {
            let residualAmountOfMinutes = minutesQuantity - 1;
            let minute = 60;
            const interval = setInterval(function () {
                if (minute !== 0) {
                    title.innerText = `${residualAmountOfMinutes}:${minute}`;
                    placeToOutput.innerText = `${residualAmountOfMinutes}:${minute}`;
                } else {
                    placeToOutput.innerText = 'Time';
                    title.innerText = 'Timer';
                    clearInterval(interval);
                    inputBlock.classList.remove('display-none');
                    outputBlock.classList.add('display-none');
                }
                minute -= 1;
            }, 1000);
        }
    }
});
