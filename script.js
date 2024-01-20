let arr = [
  { id: 1, name: "john", age: 18, profession: "developer" },
  { id: 2, name: "jack", age: 20, profession: "developer" },
  { id: 3, name: "karen", age: 19, profession: "admin" },
];
let arr2 = [
  { id: 1, name: "john", age: 18, profession: "developer" },
  { id: 2, name: "jack", age: 20, profession: "developer" },
  { id: 3, name: "karen", age: 19, profession: "admin" },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.
let fourthEmployee = [
  { id: 4, name: "susan", age: "20", profession: "intern" },
];
function PrintDeveloper() {
  arr.forEach((employees) => {
    if (employees.profession == "developer") {
      console.log(employees.name);
    }
  });
}

function addData() {
  arr = arr.concat(fourthEmployee);
  console.log(arr);
}

function removeAdmin() {
  arr = arr.filter((item) => item.profession !== "admin");

  console.log(arr);
}

function concatenateArray() {
  arr = arr.concat(arr2);
  console.log(arr);
}

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log("Consoling Array Variable", arr);
  // Over here I can directly access the variable.
}
