// Exercize 1.

// make a function that takes para arr, a and b.
// function should put not modify the array.
// declare empty array.
// make a loop that loops through the numbers.
// loop pushes numbers between 1 and 4 into empty array.

function filterRange(arr, a, b) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= i && arr[i] <= 4) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert(filtered); // 3,1 (matching values) (It says between? not between and? fixed it none the less.)

alert(arr); // 5,3,8,1 (not modified)

// i feel like because of exersize 2 this should be done different...

function filterRange(arr, a, b) {
  return arr.filter((x) => a <= x && x <= b);
}

// i looked this up on stackoverflow but i do not understand where x comes from.

// Exersise 2

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map((x) => x.name);

alert(names); // John, Pete, Mary

// Exercise 3.

function getAverageAge(users) {
  return users.reduce((x, y) => x + y.age, 0) / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

alert(getAverageAge(arr));

// Quite honestly, again, stackoverflow, i think i start to understand now tho.
// x and y are interchangable, i can make them what i want.
// so in this case, x stands for the previous user and y stands for current user.
// so here im asuming, previous users age?
// so that + current users age. i dont get the 0 tho.
// i do get the / user.length.
// user.length = 3, so all those numbers added up (25, 30, 29) / 3.
// Now i feel like this is all incredibly hard :D
