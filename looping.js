// numbers = [2, 3, 4, 5, 6, 7];
// for(const number of numbers){
// console.log(number);
// }

// Nobab = 'Siraj Ud Doula';
// for (const character of Nobab){
//     console.log(character);
// }
const glass = {name : 'glass', color : 'Golden', price : 12, isCleaned : true};
// console.log(glass);

for (const key in glass){
    const value = glass[key];
 console.log(key,value);
}