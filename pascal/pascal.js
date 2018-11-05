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

const drawTable = (number) => {
    console.table(pascalTriangle(number))
}

// Draw on screen

const drawer = (number) => {
    const result = pascalTriangle(number);
    const draw = document.getElementById("draw");
    const container = document.createElement("div");
    draw.appendChild(container);
    for (let i=0; i<result.length; i++) {
        console.log(`line ${i}`);
        console.log(`${result[i]}`);
        console.log(result[i].length);
        let pTag = document.createElement("p");
        container.appendChild(pTag);
        pTag.id = `line${i}`;
        let text = `${result[i]}`;
        let textValue = document.createTextNode(text);
        pTag.appendChild(textValue);
    }
}