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
  if (newKeys.length !== newExpectedKeys) {
    return false;
  }
  for (let i = 0; i < newKeys.length; i++) {
    if (newKeys[i] !== newExpectedKeys[i]) {
      return false;
    } 
  }
  return true;
}
  

console.log(validateKeys(objectB, expectedKeys));