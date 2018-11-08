// Variables

const draw = document.getElementById("draw");
const numberBox = document.getElementById("numberBox");
const controls = document.getElementById("controlBox");
const firstImplementation = document.getElementById("firstImplementation");
const firstImplementationArray = document.getElementById(
  "firstImplementationArray"
);
const secondImplementation = document.getElementById("secondImplementation");
const thirdImplementation = document.getElementById("thirdImplementation");
let fibonacciFirstArray = [];

// Clicker checker and also functions

let firstImplementationClicked = false;
let secondImplementationClicked = false;
let thirdImplementationClicked = false;

const clickHandlerForFirst = () => {
  firstImplementationClicked = true;
};

const clickHandlerForSecond = () => {
  secondImplementationClicked = true;
};

const clickHandlerForThird = () => {
  thirdImplementationClicked = true;
};

// First implementation

const fibonacciFirst = num => {
  let a = 1,
    b = 0,
    temp;
  fibonacciFirstArray = [];
  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
    fibonacciFirstArray.push(temp);
  }
  return b;
};

// Second implementation - recursive - shows the element with given index

const fibonacciSecond = num => {
  if (num <= 1) return 1;
  let result = fibonacciSecond(num - 1) + fibonacciSecond(num - 2);
  return result;
};

// Third implementation - using memoization

const fibonacciThird = (num, memo) => {
  memo = memo || {};
  if (memo[num]) return memo[num];
  if (num <= 1) return 1;
  return (memo[num] =
    fibonacciThird(num - 1, memo) + fibonacciThird(num - 2, memo));
};

// Fetch the value from input

const fetcher = () => {
  let numberBoxValue = numberBox.value;
  return numberBoxValue - 1;
};

// Erase from the screen

const eraser = () => {
  while (draw.firstChild) {
    draw.removeChild(draw.firstChild);
  }
};

// Checks which button has been clicked

const letMeCheck = () => {
  if (firstImplementationClicked === true) {
    let returnValue = fibonacciFirst(fetcher());
    firstImplementationClicked = false;
    return returnValue;
  } else if (secondImplementationClicked === true) {
    let returnValue = fibonacciSecond(fetcher());
    secondImplementationClicked = false;
    return returnValue;
  } else if (thirdImplementationClicked === true) {
    let returnValue = fibonacciThird(fetcher());
    thirdImplementationClicked = false;
    return returnValue;
  } else {
    console.log(`well, something went bad...`);
  }
};

// Append element on the screen

const elementDrawer = whatToDraw => {
  const container = document.createElement("div");
  container.id = "result";
  draw.appendChild(container);
  const pTag = document.createElement("p");
  container.appendChild(pTag);
  const textValue = document.createTextNode(whatToDraw);
  pTag.appendChild(textValue);
};

// Draw the array from the first implementation

const arrayDrawer = () => {
  eraser();
  fibonacciFirst(fetcher());
  let text = fibonacciFirstArray
    .toString()
    .split(",")
    .join(" ");
  elementDrawer(text);
};

// Draw on the screen

const implementationDrawer = () => {
  eraser();
  let text = letMeCheck();
  elementDrawer(text);
};

// Function runner with performance time

const runner = () => {
  eraser();
  let t0 = performance.now();
  implementationDrawer();
  let t1 = performance.now();
  let timerResult = document.createElement("p");
  timerResult.id = "timer";
  let timerResultText = `This function took ${t1 - t0} miliseconds.`;
  let timerResultValue = document.createTextNode(timerResultText);
  timerResult.appendChild(timerResultValue);
  draw.appendChild(timerResult);
};

// Let's handle all the stuff!

firstImplementation.addEventListener("click", () => {
  clickHandlerForFirst();
  runner();
});

secondImplementation.addEventListener("click", () => {
  clickHandlerForSecond();
  runner();
});

thirdImplementation.addEventListener("click", () => {
  clickHandlerForThird();
  runner();
});

firstImplementationArray.addEventListener("click", () => {
  arrayDrawer();
});
