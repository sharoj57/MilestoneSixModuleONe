const glass = {name : 'glass', color : 'Golden', price : 12, isCleaned : true};
console.log(glass);

// --all properties value--//
// const keys = Object.keys(glass);
// console.log(keys);

// const values = Object.values(glass)
// console.log(values);

// const entries = Object.entries(glass);
// console.log(entries);

// const {isCleaned,...shortGlass} = glass;
// console.log(shortGlass);


// ---Freeze---//
// Object.freeze(glass)
glass.source = 'Bangladesh'
console.log(glass);