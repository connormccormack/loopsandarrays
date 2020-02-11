'use strict';


// Max Function
const max = (numbers) => {
  let i = 0;
  let maximum = 0;
  while (i < numbers.length) {

    // check to see if number is greater than maximum's current value
    if (numbers[i] > maximum) {
      maximum = numbers[i];
    }
    
    i++;
  }

  return maximum;
}

console.log(max([1, 5, 7, 22, 8]));

// Min Function

const min = (numbers) => {
  let i = 0;
  let minimum = 0;
  while (i < numbers.length) {

    // check to see if number is greater than minimum's current value
    if (numbers[i] > minimum) {
     minimum = numbers[i];
    }
    
    i++;
  }

  return minimum;
}


function average(numbers) {
  // make a sum variable
  let sum = 0;
  // add each value to sum
  numbers.forEach(number => sum += number)
  // divide sum by numbers.length
  return (sum/numbers.length);
}
const myArray = [1,3,15,4000];
console.log(average(myArray));
  

