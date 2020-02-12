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
//  add a boss key to everyone but tom
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

// 6. Cracking the Code

// const decode = (word) => {
//   let secret = '';
//   if (word[0] === 'a') {
//     secret += word[1];
//   } else if (word[0] === 'b') {
//     secret += word[2];
//   } else if (word[0] === 'c') {
//     secret += word[3];
//   } else if (word[0] === 'd') {
//     secret += word[4];
//   }
//   return secret;
// };
// console.log(decode('craft'));

const cipher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5
}

function decode(word) {
  // take first letter of word and see if it has a match in key values of cipher
  if (cipher[word[0]]) {
    return word[cipher[word[0]]-1]
  } else {
    return ' ';
  }
  // if no match, return space
}

function decodeWords(string) {
  // initialize string variable called decodedMessage
  let decodedMessage = '';
  // split string into an array of words
  const words = string.split(' ');
  // pass each word into decode function
  words.forEach(word => {
    decodedMessage += decode(word);
  })
    // add each return value of decode function to decodedMessage

  // return decodedMessage
  return decodedMessage
}


console.log(decodeWords('craft block argon meter bells brown croon droop'));

// 7 Factory Functions with LOTR

const createCharacter = (name, nickname, race, origin, attack, defense ) => {
  return { 
    name, 
    nickname, 
    race, 
    origin, 
    attack, 
    defense,
    describe: function() {
      return (`"${this.name} is a ${this.race} from ${origin}"`);
    evaluateFight: function(character) {
      return `"Your opponent takes ${this.attack - character.defense} damage and you recieve ${this.defense - character.attack}"`;
    }
  };
};


let characters = [createCharacter('Gandalf the White', 'gandalf', 'wizard', 'middle earth', 10, 6), createCharacter('Bilbo baggins', 'bilbo', 'hobbit', 'the shire', 2, 1), createCharacter('Frodo baggins', 'frodo', 'hobbit', 'the shire', 3, 2),createCharacter('Aragorn son of Arathorn', 'aragorn', 'man', 'dunnedain', 6, 8), createCharacter('Legolas', 'legolas', 'elf', 'woodlan realm', 8, 5), createCharacter('Arwen Undomiel', 'Arwen', 'Half-elf', 'rivendell', 2, 1)];

console.log(characters);

const badAss = characters.find(({nickName}) => nickName === 'aragorn');
console.log(badAss);

console.log(badAss.describe());

const newArr = characters.filter(({race}) => race === 'hobbit');
console.log(newArr);

const newArr2 = characters.filter(({attack}) => attack > 5);
console.log(newArr2);