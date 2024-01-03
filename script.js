// !Task 1

const firstNumber = 10;
const secondNumber = 20;

const task1Container = document.getElementById('task1');
for (let i = firstNumber; i <= secondNumber; i++){
    task1Container.innerText += i+', ';
}

// !Task 2

const task2Container = document.getElementById('task2');
for (let i = firstNumber; i <= secondNumber; i++){
    task2Container.innerText += i*i+', ';
}

// !Task 3

const sevenNumber = 7;

const task3Container = document.getElementById('task3');
for (let i = 1; i <= 10; i++ ){
    const row = document.createElement('p');
    row.innerText = `${sevenNumber} * ${i} = ${sevenNumber * i}`
    task3Container.appendChild(row);
}

// !Task 4

const number1 = 1;
const number2 = 15;
let summ = 0;

const task4Container = document.getElementById('task4');
for (let i = number1; i <= number2; i++){
    summ += i;
    task4Container.innerText = `${number1} + ${number2} + ${summ}`;
}

// !Task 5

const number3 = 35;
let productNumber = 1;

for (let i = number2; i <= number3; i++){
    productNumber *= i;
}
const task5Container = document.getElementById('task5').innerText = `${productNumber}`;

// !Task 6

let nuberOne = 0;
let nuberFiveHundred = 0;

for(let i = 1; i <= 500; i++){
    nuberOne += i;
    nuberFiveHundred++;
}
const arithmeticNumber = nuberOne / nuberFiveHundred;
const task6Container = document.getElementById('task6').innerText = `${arithmeticNumber}`;

// !Task 7

let doubleNumber = 0;

for(let i = 30; i <= 80; i++){
    if(i % 2 === 0){
        doubleNumber += i;
        const task7Container = document.getElementById('task7').innerText = doubleNumber;
    }
}

// !Task 8

for(let i = 100; i <= 200; i++){
    if(i % 3 === 0){
        task8Number = i;
        console.log(task8Number);
    }
}

// !Task 9, 10, 11

function divisorOfNumber(number) {
    if (number <= 0 || !Number.isInteger(number)) {
      prompt('Enter a natural number');
      return;
    }

    let dividersNumber = [];
    let pairsNumber = 0;
    let summOfPairNumber = 0;

    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        dividersNumber.push(i);

        if (i % 2 === 0) {
            pairsNumber++;
            summOfPairNumber += i;
        }
      }
    }

    document.getElementById('task9').innerText = `You wrote number ${number}: ${dividersNumber.join(', ')}`;
    document.getElementById('task10').innerText = `Number of divisors: ${pairsNumber}`; 
    document.getElementById('task11').innerText = `The sum of divisors: ${summOfPairNumber}`;
  }

  divisorOfNumber(12);


// !Task 12

const task12Container = document.getElementById('task12');

for (let i = 1; i <= 10; i++) {
    task12Container.innerText += `${i}:\n`;

  for (let j = 1; j <= 10; j++) {
    task12Container.innerText += `${i} * ${j} = ${i * j}\n`;
  }
}






