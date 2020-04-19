// question 1

const myFunctionExpression = function() {
    console.log("Jan Emil Gustafsson")
};

myFunctionExpression();

// question 2

const button = document.querySelector(".btn");

function callAfterButtonClick() {
    console.log("I was clicked");
};

button.addEventListener("click", callAfterButtonClick);

/*
jan-emil-gustafsson-js1-ma2.js:17 Uncaught TypeError: Cannot read property 'addEventListener' of null
    at jan-emil-gustafsson-js1-ma2.js:17 ??
*/

// question 3

const firstName = document.querySelector("firstName");

function callWhenAKeyIsPressed() {
    console.dir("event");
    console.log("A key was pressed");
};

firstName.addEventListener("keydown", callWhenAKeyIsPressed);

// question 4

const buttonTwo = document.getElementsByClassName(".btn");

document.getElementsByTagName("dog");


for (let i = 0; i < button.length; i++) {
    buttonTwo[i].addEventListener("mouseover", hover);
}

function handleActiveClass(event) {
 

// question 5

for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
}

event.target.classList.add("hover");
};

const dogButton = document.querySelector(".btn");

dogButton.addEventListener("mouseout");


// question 6

const animals = document.getElementsByTagName("goose, frog, elephant");

function animalLoop() {

for (let i = 0; i < animals.length; i++) {
    animals[i].addEventListener("mouseover");
    console.log(animalLoop(animals));
}

}

// question 7

const animal = "cow";

let arrayToLoopTrough;

switch (animal) {
    case "cat":
        console.log("Meow");
        break;

    case "cow":
        console.log("Moo");
        break;

    case "bird":
        console.log("Tweet");
        break;

    default:
        console.log("Harrumph");
}

// question 8

const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(sheepName) {
    console.log(sheepName);
});

// question 9

function logHello() {
    console.log("Hello");


if(counter === 5) {
    clearInterval(intervalId);
}
counter++;
}

let counter = 0;

const intervalId = setInterval(logHello, 500);

// question 10

const containerCounter = document.querySelector(".container");

function updateText() {
    containerCounter.innerHTML = "Text updated";

    if(container === 1) {
        clearInterval(intervalIdTwo);
    }

    container++;
}

let container = 0;

const intervalIdTwo = setInterval(updateText, 2000);

/* 
Uncaught Typerror: cannot set property 'innerHTML'
of null at updateText?
*/

/*
I tried using this to compare with question 10, but this code
recieves: Uncaught Typerror: cannot set property 'innerHTML'
of null at updateDiv?

const counterContainer = document.querySelector(".counter");

function updateDiv() {
    counterContainer.innerHTML = counter;
    
    // cancel the timer after the counter reaches 4
    if(counter === 4) {
        clearInterval(intervalId);
    }

    counter++;
}

let counter = 1;

const intervalId = setInterval(updateDiv, 1500);

*/