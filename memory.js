//Stack memory-- it is for primitive data type...gives a copy of value so original is not changed
let myName="Nehu"
let yourName=myName
console.log(myName)
console.log(yourName)
yourName="Pihu"
console.log(myName)
console.log(yourName)     //original(myName)is not changed

//Heap memory--for non-primitive data type...gives original data
let user={
    name:"Priyanka",
    email:"priyanka@google.com"
}
let user2=user
console.log(user)
console.log(user2)
user2.email="priyanka123@yahoo.com"
console.log(user)
console.log(user2)    //original one(user) also gets changed
//Both are pointing(refering)to same data in non-primitive data types

