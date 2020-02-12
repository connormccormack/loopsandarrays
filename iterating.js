'use strict';

// Make Student Report:

function makeStudentReport(data) {
  const stringArray = [];
  
  // for each object in data, add string (based on key/value pairs) to final array
  for (let i = 0; i < data.length; i++) {
    stringArray[i] = `${data[i].name}: ${data[i].grade}`;
  }  
  // return array of strings
  return stringArray;
}

const students = [
  {name: 'Johnny Robot', grade: 'C'},
  {name: 'CM', grade: 'B'},
  {name: 'AD', grade: 'A'},
  {name: 'Some rando', grade: 'F'}
];
// console.log(makeStudentReport(students));


// Enroll In Summer School:

const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];

function enrollInSummerSchool(students) {
  return students.map(student => {
    return {
      name: student.name,
      status: 'In summer school',
      course: student.course
    };
  });
}
// console.log(enrollInSummerSchool(studentData));
// console.log(studentData);


// Find by ID:

const scratchData = [
  { id: 22, foo: 'bar' },
  { id: 28, foo: 'bizz' },
  { id: 19, foo: 'bazz' },
];

function findById(items, idNum) {
  // check each element of the array against id number
  const theItem = items.filter(item => item.id === idNum);

  // if element matches id number, return element (which is an object)
  return theItem[0];

}
// console.log(findById(scratchData, 28));


// Validate Object Keys:

// running the function with `objectA` and `expectedKeys`
// should return `true`
const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};

// running the function with `objectB` and `expectedKeys`
// should return `false`
const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};

const expectedKeys = ['id', 'name', 'age', 'city'];

function validateKeys(object, expectedKeys) {
  // get keys from object and store in an array
  const newKeys = Object.keys(object);
  // compare that array to the expectedKeys array
  const newExpectedKeys = [...expectedKeys];
  newKeys.sort();
  newExpectedKeys.sort();
  // let equalKeys = true;
  if (newKeys.length !== newExpectedKeys.length) {
    return false;
  }
  for (let i = 0; i < newKeys.length; i++) {
    if (newKeys[i] !== newExpectedKeys[i]) {
      return false;
    } 
  }
  return true;
} 
// console.log(validateKeys(objectB, expectedKeys));


// 1. Object Initializers and Methods:
const loaf = {
  flour: 300, 
  water: 210, 
  hydration() {
    return this.water / this.flour * 100;
  }
};
// console.log(loaf.flour, loaf.water);
// console.log(loaf.hydration());


// 2. Iterating Over an Object's Properties:

const myObj = {
  foo: 'Manchu',
  bar: 'stool',
  fum: 56,
  quux: 'What the',
  spam: 'musubi'
};

for (const property in myObj) {
  // console.log(`${property}: ${myObj[property]}`);
}


// 3. Arrays in Objects:

const hobbitLifestyles = {
  meal: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

// console.log(hobbitLifestyles.meal[3]);


// 4. Array of Objects:

// const tom = {name: 'Tom', jobTitle: 'Nurse'};
// const steve = {name: 'Steve', jobTitle: 'School Teacher'};
// const jenna = {name: 'Jenna', jobTitle: 'Fireman'};
// const gemma = {name: 'Gemma', jobTitle: 'Cook'};

// const workers = [];
// workers.push(tom);
// workers.push(steve);
// workers.push(jenna);
// workers.push(gemma);

// console.log(workers);

// function printWorkers(workerArr) {
//   workerArr.forEach(worker => console.log((`${worker.name}: ${worker.jobTitle}`)));
// }

// printWorkers(workers);

// 5. Properties that aren't there:

const tom = {name: 'Tom', jobTitle: 'Owner'};
const steve = {name: 'Steve', jobTitle: 'School Teacher'};
const jenna = {name: 'Jenna', jobTitle: 'Fireman'};
const gemma = {name: 'Gemma', jobTitle: 'Cook'};

const workers = [];
workers.push(tom);
workers.push(steve);
workers.push(jenna);
workers.push(gemma);

// console.log(workers);

function printWorkers(workerArr) {
  workerArr.forEach(worker => {
    if(worker.boss) {
      console.log((`${worker.jobTitle} ${worker.name} reports to ${worker.boss}`));
    } else {
      console.log((`${worker.jobTitle} ${worker.name} doesn't report to anybody.`));
    }
  });
}

// Problems
// 1. add a boss key to everyone but tom
function addBoss(workerArr) {
  const bossGuy = workerArr.find(worker => worker.jobTitle === 'Owner');
  // console.log(bossGuy);
  
  workerArr.forEach(worker => {
    if(worker.jobTitle !== 'Owner') {
      worker.boss = bossGuy.name;
    }
  });
}

addBoss(workers);
printWorkers(workers);

