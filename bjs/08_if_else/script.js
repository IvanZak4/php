let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const resultPhrase =
[
    'Вы загадали число',
    'Я уверен, что это число',
    'Это было легко! Это число',
];
const resultRandom = resultPhrase[Math.floor(Math.random() * resultPhrase.length)];

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
const numberField = document.getElementById('numberField');

orderNumberField.innerText = orderNumber;
answerField.innerText = resultRandom;
numberField.innerText = answerNumber;


document.getElementById('btnRetry').addEventListener('click', function () {
    alert('Попробуем еще раз!');
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    answerField.innerText = resultRandom;
    numberField.innerText = answerNumber;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const answerPhrase1 =
            [
                'Вы загадали неправильное число!\n\u{1F914}',
                'Мне кажется, вы врете...',
                'Я сдаюсь..\n\u{1F92F}',
            ];
            const phraseRandom1 = answerPhrase1[Math.floor(Math.random() * answerPhrase1.length)];
            answerField.innerText = phraseRandom1;
            numberField.innerText = '';
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = resultRandom;
            numberField.innerText = answerNumber;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const answerPhrase =
            [
                'Вы загадали неправильное число!\n\u{1F914}',
                'Попробйте еще раз! Я вас удивлю!',
                'Я сдаюсь..\n\u{1F92F}',
            ];
            const phraseRandom = answerPhrase[Math.floor(Math.random() * answerPhrase.length)];
            answerField.innerText = phraseRandom;
            numberField.innerText = '';
            gameRun = false;
        } else {
            maxValue = answerNumber  + 1;
            answerNumber  = Math.ceil((maxValue + minValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = resultRandom;
            numberField.innerText = answerNumber;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const answerPhrase2 = 
        [
            `Я всегда угадываю\n\u{1F60E}`,
            'Мне нет равных!',
            'Я экстрасенс!',
        ];
        const phraseRandom2 = answerPhrase2[Math.floor(Math.random() * answerPhrase2.length)];
        answerField.innerText = phraseRandom2;
        numberField.innerText = '';
        gameRun = false;
    }
})

