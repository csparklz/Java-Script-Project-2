document.write("JavaScript works!");
console.log("Hello console!");
console.warn("This is only a test!");
let MyName = "Sarah";
let workFromHome = "True";
let side = "15";
let radius = "10";

console.log(MyName);
console.log(workFromHome)
console.log(side);
console.log(radius);

//output to the page    
document.write(`<p>My name is ${MyName}</p>`);
document.write(`<p>I work from home: ${workFromHome}</p>`);
document.write(`<p>The length of each side of the square is ${side}</p>`);
document.write(`<p>The radius of the circle is ${radius}</p>`);

let squareArea = side * side; 
let squarePerimeter = 4 * side;
let circleArea = Math.PI * radius * radius; 
let circlePerimeter= 2 * Math.PI * radius;

console.log("The square area is " + squareArea + " and the perimeter is " + squarePerimeter);
console.log("The circle area is " + circleArea + " and the perimeter is " + circlePerimeter);


let travelOptions = ["foot", "bike", "car", "airplane"];
console.log("The travel options are:");
console.log(`1) ${travelOptions[0]}`);
console.log(`2) ${travelOptions[1]}`);
console.log(`3) ${travelOptions[2]}`);
console.log(`4) ${travelOptions[3]}`);

let distance = 100;
let time = 0;
let cost = 0;

var travelType = prompt ("How would you like to travel?");
if (travelType === "foot") {
    console.log("Walking is free! Speed is 3mph.");
    cost = 0;
    time = distance / 3;
} else if (travelType === "bike") {
    let rentBike = prompt("Do you need to rent the bike? (yes or no)")
    if (rentBike === "yes") {
        console.log("Bike rental is $45! Speed is 10mph.");
        cost = 45;
    } else {
    console.log("Biking is free! Speed is 10mph.");
    cost = 0;
    }
    time = distance / 10;
  } else if (travelType === "car") {
    console.log("Driving is $.25/mi! Speed is 60mph.");
    cost = 0.25 * distance;
    time = distance / 60;
  } else if (travelType === "airplane") {
    console.log("Flying is $.10/mi per passenger!! Speed is 400mph.");
    let passengers = parseInt(prompt("How many passengers?") );
    cost = .1 * distance * passengers; 
    time = distance / 400;
  } else {
    console.log(`Sorry. ${travelType} is an invalid option.`);
  }
  console.log(`Traveling ${distance} miles by ${travelType} took ${time} hours and cost $${cost}!`);
  
  let costBar = "Cost: ";
  for (let i = 0; i <cost; i++) {
    costBar += "$";
  }
  console.log(costBar); // "Cost: $$$$$"

  let timeLength = "Time: ";
  for (let i = 0; i <time; i++) {
    timeLength += "/";
  }
  console.log(timeLength); // "Cost: /////"    