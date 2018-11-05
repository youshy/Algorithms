// Variables

const draw = document.getElementById("draw");
const numberBox = document.getElementById('numberBox');
const controls = document.getElementById('controlBox');

// Functions

const pascalTriangle = (rowsNum) => {
    let pascalTriangle = [];
    for (let i=0; i<rowsNum; i++) {
        pascalTriangle[i] = new Array(i+1);
        for (let j=0; j<i+1; j++) {
            if (j === 0 || j === i) {
                pascalTriangle[i][j] = 1;
            } else {
                pascalTriangle[i][j] = pascalTriangle[i-1][j-1] + pascalTriangle[i-1][j];
            }
        }
    }
    return pascalTriangle;
}

// If I want to get the result in the table in the console

const drawTable = (number) => {
    console.table(pascalTriangle(number))
}

// Fetch the value from input

const fetcher = () => {
    let numberBoxValue = numberBox.value;
    return numberBoxValue;
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

// Draw result on the screen

const drawer = () => {
    eraser();
    const result = pascalTriangle(fetcher());
    const container = document.createElement('div');
    container.id = 'result';
    draw.appendChild(container);
    for (let i=0; i<result.length; i++) {
        let pTag = document.createElement('p');
        container.appendChild(pTag);
        pTag.id = `line${i}`;
        let text = `${result[i]}`.toString().split(",").join(' ');
        let textValue = document.createTextNode(text);
        pTag.appendChild(textValue);
    };
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
