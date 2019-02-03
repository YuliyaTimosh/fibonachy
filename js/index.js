//variant 1:

const userNumber = parseFloat(prompt('Enter the number'));

let fib = [];
fib[0] = 1;
fib[1] = 1;

for (let i = 2; i < userNumber; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
}


alert(fib[userNumber - 1]);

//variant 2:

let previous = 1;
let beforePrevious = 1;
let resultFib;

for (let i = 2; i < userNumber; i++) {
    resultFib = previous + beforePrevious;
    beforePrevious = previous;
    previous = resultFib;
}

console.log('result=' + resultFib);
