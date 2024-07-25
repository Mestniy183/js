console.log('Я загадал число, от 1 до 10, попробуй отгодать');
const secretNumber =Math.floor(Math.random()*10)+1 ;
console.log(secretNumber);
let attempts = 3;

while (attempts > 0) {
    let number = Number(prompt('Введите число'));

    if (number < secretNumber) {
        console.log('Секретное число больше');
        attempts--
    } else if (number === secretNumber) {
        console.log('Угадали');
    } else {
        console.log('Число меньше');
        attempts--
    }
    console.log('Осталось попыток',attempts);
}

