let str1="1"
let str2="2"
let str3=str1+str2
//type conversion of number to string for concatenation
console.log(str3)
console.log(str3+1)
console.log(str3+"1") 
console.log(1+2+"2") //32 //string at last
console.log("1"+2+2) //122 //string before

//increment operations
let num1=2
let num2=num1++
let num3=++num1
console.log(num1) //output is the value got after all increment operations and not the original one
console.log(num2) //output is value before increment as it is postfix 
console.log(num3) //output is value after increment as it is prefix

//some arithmetic operations
console.log(2/3)
console.log(2%3) //if division is not possible- dividend number is returned