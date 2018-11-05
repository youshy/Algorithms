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
    const numberBox = document.getElementById('numberBox');
    let numberBoxValue = numberBox.value;
    return numberBoxValue;
}

// Erase from the screen

const eraser = () => {
    const draw = document.getElementById('draw');
    let childNode = document.getElementById('result');
    if (childNode !== null) {
        draw.removeChild(childNode);
    }
}

// Draw on the screen

const drawer = () => {
    eraser();
    const draw = document.getElementById("draw");
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
    }
}