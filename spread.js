const maxMath = Math.max (89, 90, 91, 92);
const number = [10,20,30,40,50,60,70,80,90,100];
const arrayMax = Math.max (...number);

//------- console.log (...number);----------
console.log (arrayMax)

console.log (maxMath);

// Use Spread Operators For Copy//

const friends = [1,2,3,4,5,6,7,8];
const bondhu = [...friends];

bondhu.push(12);
friends.push (100);
console.log (bondhu);
console.log (friends);

