function simpleFunction() {
  //code here
  document.getElementById("changeTxt").innerHTML = "dont change this paragraph";
}

simpleFunction();

function simpleFunctiontwo() {
  document.querySelector("body").innerHTML +=
    "This function does not take parameters.";
}
simpleFunctiontwo();

function sayHelloWorld() {
  console.log("Hello, World");
}

sayHelloWorld();

//Started using parameters

function sayFavoriteBand(bandName) {
  document.getElementById("favBand").innerHTML += bandName + "<br/>";
}

sayFavoriteBand("Three Days Grace");
sayFavoriteBand("Maroon 5");

function sayMyName(myName) {
  console.log(myName);
}

sayMyName("say my name");
sayMyName("say my name");
sayMyName("If no one is around you");

//Functions that do calculations

function calcRectPerimeter(height, width) {
  const perimeter = 2 * height + 2 * width;
  document.querySelector("#panswer").innerHTML += perimeter;
}

calcRectPerimeter(2, 4);

function calcArea() {
  const height = document.getElementById("height").value;
  const width = document.getElementById("width").value;
  console.log("height", height);
  console.log("width", width);
  document.querySelector("#answer").innerHTML +=
    "Area: " + height * width + "<br/>";
}

function calcRectAreaAndPeri(height, width) {
  const perimeter = 2 * (parseInt(height) + parseInt(width));
  const area = height * width;

  document.getElementById("multiAnswer").innerHTML += `
    height: ${height} <br />
    width: ${width} <br />
    perimeter: ${perimeter} <br />
    Area: ${area} <br />
  `;
}

calcRectAreaAndPeri(5, 4);
calcRectAreaAndPeri(2, 8);

function myFunction() {
  alert("Who goes there?");
}

function wizard(name, occupation) {
  confirm("Welcome " + name + ", the " + occupation);
  document.getElementById(
    "future"
  ).innerHTML += `Welcome ${name}, the ${occupation}!`;
}

function addItem() {
  const newItem = prompt("Add Item");
  console.log(newItem);
}

function returnValue(color) {
  return color;
}

alert(returnValue("blue"));

function calcCircleArea(radius) {
  return Math.PI * radius * radius; // Area formula: πr^2
}

document.getElementById("useOne").innerHTML += calcCircleArea(2);
document.getElementById("useTwo").innerHTML += calcCircleArea(3); // Changed radius to 3 for demonstration
