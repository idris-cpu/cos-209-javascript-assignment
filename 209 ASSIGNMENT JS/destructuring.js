//for array destructuring
const colors= ["black", "yellow", "blue"];
const [first, second,...rest]= colors;

console.log(first);//black
console.log(second);//yellow
console.log(rest);//yellow