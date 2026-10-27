console.log("2">1) //conversion is done
console.log("02">1)
// == operator does not convert null to number for comparison
// > < >= <= operator converts null to number (0)
console.log(null>0) //false
console.log(null>=0) //true
console.log(null==0) //false
// AVOID COMPARING DIFFERENT DATA TYPES IN JS
//but comparison of different data types is not always predictable. So, it is not recommended.
// equality operators (==, ===) works different from comparison operators
// == does conversion and then compare
// === does strict comparison (compares data type also)
console.log("2"==2)
console.log("2"===2)