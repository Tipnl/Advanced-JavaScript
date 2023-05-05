// Exercise 1

// let user = {
//   name: "John",
//   years: 30,
// };

// let { name, years: age, isAdmin = false } = user;

// Exercise 2

// const earth;
// const currentVisitor; // But i would probably call it currVis

// Exercise 3

Output = "Hello, John";
// Why. phrase is in the global scope, so it can access the function, user is in the scope above the function. so the function can access it too. then we use backticks so we can use variables instead of having to concactinate them in "".

// Exercise 4

// 1
let user = {};
// 2
user.name = "John";
// 3
user.surname = "Smith";
// 4
user.name = "Pete";
// 5
delete user.name / delete user["age"];

// Exercise 5
// You can change the key values of objects that are assigned with const, you just change change the variable, so if const var = an object, you cant say const var = now an array. to do that you use let.

// Exercise 6

let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130,
};

let { Fred, Ted, Ghaith } = salaries;
console.log(`${Fred + Ted + Ghaith}`);

// Exercise 7

let result = a + b < 4 ? "Below" : "Over";

// Exercise 8

let message = (login) =>
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";
