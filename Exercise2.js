// Day 2.

// Exersize 1:

const checkAge = (age) => {
  return age > 18
    ? true
    : confirm("Do you have your parents permission to access this page?");
};

// Exersize 2:
// I'm not very good with maths, so to be honest this to me is hard to understand even without javascript.

// Exersize 3:

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);

// Copy over text from exersize, change function() to () =>

// Exersize 4:
// I do not fully understand objects.

// Exersize 5:

function minOfTwo(a, b) {
  return a < b ? a : b;
}
