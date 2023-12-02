
//Q:1 log m , cm from km

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let kilometer = ''; // Declare a global variable

// function updateGlobalVariable() {
//   rl.question('Enter a value for the global variable: ', (answer) => {
//     kilometer = answer; // Set the global variable's value
//     console.log(`Global variable updated to: ${kilometer}`);
//     rl.close(); // Close the interface
//   });
// }

// updateGlobalVariable();


let kilometer = 10; //prompt(message , default value);


function mCmConverter (distanceKM) {
    let meter = distanceKM*1000;
    let centimeter = distanceKM*(10**5);
    return {
        meter ,
        centimeter
    };
}

let result1 = mCmConverter(kilometer);
console.log(`meter: ${result1.meter} and centimeter: ${result1.centimeter}`);

//Q:2 input radius and log circle's area

let area = (radius) => {
  return Math.PI * (radius**2);
}

let radius = 3;
console.log(area(radius));

//Q:3 input 2 numbers and log arithmetic's on these;

let arithmetic = (x , y) => {
   sum = x+y;
   diff = 0; 
   if ( x>y) {
    diff = x-y;
   } else {
    diff = y-x;
   }
   divide = x/y;
   multiply = x*y;
   reminder = x%y;


  return {
    sum ,
    diff ,
    divide ,
    multiply ,
    reminder
  }
}

let result3 = arithmetic( 3 , 5);
console.log(`sum:${result3.sum} and diff:${result3.diff} and divide:${result3.divide} and multiply:${result3.multiply} and reminder:${result3.reminder}`);


//Q: 4 cal total marks in 2 subject and percentage 

function marksPercentageCalc( sub1 , sub2 ) {
  console.log(`totalMarks = ${sub1 + sub2}`);
  console.log(`percentage = ${(sub1+sub2)*100/200}`);

}

let result4 = marksPercentageCalc( 23 , 35);

//Q:5 

