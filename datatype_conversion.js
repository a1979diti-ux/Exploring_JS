let str1= "";  // empty string= false 
let str2= " "; //anything inside string will result in true
console.log(typeof str1);
console.log(typeof str2);
//Use uppercase of starting letter when converting ex-Boolean, Number
let convertedStr1= Boolean(str1); 
let convertedStr2= Boolean(str2);
console.log(typeof convertedStr1);
console.log(typeof convertedStr2);
console.log(convertedStr1);
console.log(convertedStr2);

let name1= null
let name2=undefined
console.log(typeof name1); // type of null= object
console.log(typeof name2); //type of undefined= undefined
let convertedName1= Number(name1);
let convertedName2= Number(name2);
console.log(typeof convertedName1);
console.log(typeof convertedName2);
console.log(convertedName1); // null when converted to number gives 0
console.log(convertedName2); // undefined when converted to number gives NaN
