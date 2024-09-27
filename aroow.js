
// --Function Declaration--Method One--//

// function add (a,b){
//     const result = a+b;
//     return result;
// }
// const sum = add(50,60);
// console.log (sum);


// --Function Declaration--Method Two--//

// function add (a,b,c,d){
//     return a+b+c+d;
// }
// const result = add(5,5,5,5)
// console.log(result);


// --Function Express--//
// const add2 = function (a,b) {
//     return a + b;
// }

// const final = add2(6,6);
// console.log(final);

// // ---Arrow Function---Multiple Parameter//
// const difference = (x,y) => x-y;
// const result = difference (6,70);
// console.log (result);

// const sum = (x,y,z,a) => x+y+z+a;
// const sumOfNumber = sum(5,6,10,90);
// console.log (sumOfNumber);

//--Arrow Function Single Parameter--//
// const getAge = (person) => person.age;
// const student = { name: 'Shahadat', age: 70};
// const age = getAge(student);
// console.log(age);

// const getAge = (person) => person.age;
// const student = {name : 'Shahadat', age: 80};
// const age = getAge(student);
// console.log(age); 

// const getThird = (number) => number [4];
// const third = getThird ([65,83,94,23,67,874]);
// console.log (third);

// ---- No Parameter----//
const getPi = () => Math.PI;
console.log(getPi());