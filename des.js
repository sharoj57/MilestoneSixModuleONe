
//-----Object Destructure------//
const actor = {
    name : 'Atif Aslam',
    age : 30,
    PhoneNumber: '01575457669',
    tahapoysharMalik : 859843789432897023478
}

const {PhoneNumber : GenzNumber} = actor;
console.log (GenzNumber);

const number = actor.PhoneNumber;
console.log (number);