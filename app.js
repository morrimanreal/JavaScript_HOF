console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// const plus = (number) => {
//   return (plusNumber) => plusNumber + number;
// }


function plus(number) {
  return function (plusNumber) {
    return plusNumber + number;  
    ;
  }
}

const plus15 = plus(15);
console.log(plus15(10));


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

const printNames = (users) => {
  console.log(users.name)
}

// function printNames(users) {
//   console.log(users.name)
// }

users.forEach(printNames);

// Exercise 3 Section
console.log("EXERCISE  3:\n==========\n");

// const newArr = users.map(function (name) {
//   // return `${name.name} is learning about HOF`;
//   return [name.name , name.score];
// })

// const mappedUsers = users.map((element) => {
//   //we tell the map method how to transfrom each item, by giving this callback function a return
//   return {
//     name: element.name, 
//     score: element.score
//   };
// });

// console.log(mappedUsers)

console.log("RETRY:\n==========\n");
//RETRY 
//return a new array containing values within an object {names: value, score: value} using the map method.
// function listInfo(value) {
//   return {
//     name: value.name,
//     score: value.score
//   }
// }

const mappedAray = users.map((value) => {
  return {
    name: value.name,
    score: value.score
  }
});

console.log(mappedAray);




// Exercise 4 Section
console.log("EXERCISE  4:\n==========\n");

// function checkActive(user) {
//   return !user.isActive;
// }

// const result = users.filter(checkActive);
// console.log(result);

console.log("RETRY:\n==========\n");
//RETRY

const isActive = users.filter((checkActive) => {
  return checkActive.isActive
})

console.log(isActive)


// Exercise 5 Section
console.log("EXERCISE  5:\n==========\n");

// function compareFn(a, b) {
//   return b.score - a.score;
// }

// const scoreOrder = users.sort(compareFn);
// console.log(scoreOrder);

console.log("RETRY:\n==========\n");
//RETRY
//sort users in descending order by score.

// function checkScore(a, b) {
//   return b.score - a.score;
// }

// const scoreOrder = users.sort(checkScore);


const scoreOrder = users.sort((a,b) => {
  return b.score - a.score;
});

// const scoreOrder = users.sort(function checkScore(a, b) {
//   return b.score - a.score;
// }
// );

console.log(scoreOrder);


// Exercise 6 Section
console.log("EXERCISE  6:\n==========\n");

//use reduce method to add all of users scores
//average the total score of the users.  total/number of users

// const array1 = [1, 2, 3, 4];

// const totalSum = array1.reduce((a, b) => a + b) 

// let userScores = 0;
// users.forEach(item => {
//   userScores += item.score
// })

let userScores = users.reduce((total, item) => {
  // console.log(total)
  // console.log(b)
  return total + item.score;
  },0)
//initialize the array === important!

console.log(userScores);