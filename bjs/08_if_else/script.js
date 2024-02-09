let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));

isNaN(minValue || maxValue) ? (minValue=0, maxValue=100) : (minValue, maxValue);

minValue < -999 ? minValue=-999 : minValue;
maxValue > 999 ? maxValue=999 : maxValue;



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


numberText = {
    "0": "ноль",
    "00": "ноль",
    "1": "один",
    "2": "два",
    "3": "три",
    "4": "четыре",
    "5": "пять",
    "6": "шесть",
    "7": "семь",
    "8": "восемь",
    "9": "девять",
    "10": "десять",
    "11": "одиннадцать",
    "12": "двенадцать",
    "13": "тринадцать",
    "14": "четырнадцать",
    "15": "пятнадцать",
    "16": "шестнадцать",
    "17": "семнадцать",
    "18": "восемнадцать",
    "19": "девятнадцать",
    "20": "двадцать",
    "30": "тридцать",
    "40": "сорок",
    "50": "пятьдесят",
    "60": "шестьдесят",
    "70": "семьдесят",
    "80": "восемьдесят",
    "90": "девяносто",
    "100": "сто",
    "200": "двести",
    "300": "триста",
    "400": "четыреста",
    "500": "пятьсот",
    "600": "шестьсот",
    "700": "семьсот",
    "800": "восемьсот",
    "900": "девятьсот",
};


for (let key in numberText) {
    numberText["-" + key] = numberText[key];
}

function numberToText(answerNumber) {
  const originalN = answerNumber;
    let stringDigit = "";
    let nStr = answerNumber.toString();
    answerNumber = Math.abs(answerNumber);
    if (nStr.startsWith("-")) {
        stringDigit += (-answerNumber >= -999) ? "минус " : "";
        nStr = nStr.slice(1);
    }
    if (answerNumber >= 1 && answerNumber <= 19) { 
        stringDigit += numberText[answerNumber];
    } else if (answerNumber >= 20 && answerNumber <= 99) { 
        stringDigit += numberText[nStr[0] + "0"];
        
        if (!answerNumber.toString().endsWith("0")) {
            stringDigit += " " + numberText[answerNumber % 10];
        }
    } else if (answerNumber >= 100 && answerNumber <= 999) { 
        stringDigit += numberText[nStr[0] + "00"];
        let twoSignN = (answerNumber % 100).toString();
        if (twoSignN >= 1 && twoSignN <= 19) {
            stringDigit += " " + numberText[twoSignN];
        } else {
            stringDigit += " " + numberText[twoSignN[0] + "0"];
        }
        if (!nStr.endsWith("0") && (twoSignN >= 20 && twoSignN <= 99)) {
            stringDigit += " " + numberText[twoSignN[1]];
        }
    }
    stringDigit = stringDigit.replaceAll("  ", " ");
    stringDigit = stringDigit.trim();
    return stringDigit || originalN.toString();
}


orderNumberField.innerText = orderNumber;
answerField.innerText = resultRandom;
numberField.innerText = answerNumber;


document.getElementById('btnRetry').addEventListener('click', function () {
    alert('Попробуем еще раз!');
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    minValue < -999 ? minValue=-999 : minValue;
    maxValue > 999 ? maxValue=999 : maxValue;
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    answerField.innerText = resultRandom;
    numberField.innerText = numberToText(answerNumber);
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
            numberField.innerText = numberToText(answerNumber);
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
            maxValue = answerNumber - 1;
            answerNumber  = Math.ceil((maxValue + minValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = resultRandom;
            numberField.innerText = numberToText(answerNumber);
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


