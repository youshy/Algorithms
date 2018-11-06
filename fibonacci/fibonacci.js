// Variables

const draw = document.getElementById("draw");
const numberBox = document.getElementById('numberBox');
const controls = document.getElementById('controlBox');
const firstImplementation = document.getElementById('firstImplementation');
const secondImplementation = document.getElementById('secondImplementation');
const thirdImplementation = document.getElementById('thirdImplementation');
let fibonacciFirstArray = [];

// Clicker checker and also function

let firstImplementationClicked = 0;
let secondImplementationClicked = 0;
let thirdImplementationClicked = 0;

const clickHandler = (value) => {
    value = 1
    console.log(`I've been clicked! Value ${value}`);
}



// First implementation

const fibonacciFirst = (num) => {
    let a = 1, b = 0, temp;
    fibonacciFirstArray = [];
    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
        fibonacciFirstArray.push(temp);
    }
    return b;
}

// Second implementation - recursive - shows the element with given index

const fibonacciSecond = (num) => {
    if (num <= 1) return 1;
    let result = fibonacciSecond(num - 1) + fibonacciSecond(num - 2);
    return result;
}

// Third implementation - using memoization

const fibonacciThird = (num, memo) => {
    memo = memo || {};
    if (memo[num]) return memo[num];
    if (num <= 1) return 1;
    return memo[num] = fibonacciThird(num - 1, memo) + fibonacciThird(num - 2, memo);
}

// Fetch the value from input

const fetcher = () => {
    let numberBoxValue = numberBox.value;
    return numberBoxValue - 1;
}

// Erase from the screen

const eraser = () => {
    let childNode = document.getElementById('result');
    let timer = document.getElementById('timer');
    if (childNode !== null && timer !== null) {
        draw.removeChild(childNode);
        controlBox.removeChild(timer);
    };
}

// Draw on the screen

const drawer = () => {
    eraser();
    fibonacciFirst(fetcher());
    const container = document.createElement('div');
    container.id = 'result';
    draw.appendChild(container);
    let pTag = document.createElement('p');
    container.appendChild(pTag);
    let text = fibonacciFirstArray.toString().split(",").join(' ');
    let textValue = document.createTextNode(text);
    pTag.appendChild(textValue);
}

// Function runner with performance time

const runner = () => {
    let t0 = performance.now();
    drawer();
    let t1 = performance.now();
    let timerResult = document.createElement('p');
    timerResult.id = 'timer';
    let timerResultText = `This function took ${t1 - t0} miliseconds.`;
    let timerResultValue = document.createTextNode(timerResultText);
    timerResult.appendChild(timerResultValue);
    controlBox.appendChild(timerResult);
}