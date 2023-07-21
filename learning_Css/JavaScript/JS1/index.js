// // alert("Hello")
// console.log("hello this is from script")
// let firstName = "Aadarsh"; 
// let num = 1234; //old
// console.log(num)
// num = 5678 // old
// console.log(num)
// num = 123456789 //latest
// const ID_NUM = 123;
// console.log('ID_NUM',ID_NUM)
// // ID_NUM = 43;
// // console.log('ID_NUM',ID_NUM)
// // PascalCase

// // camelCase

// // snake_case

// // kebab-case

// // CONSTANT_CASE
// // console.log('2'===2) 

// var nameX = "Mango" //ES5
// let nameX1 = "Adarsh" //ES6
// const nameX2 = "Adarsh" //ES6
// key: value
// nameX: "Mango"

// let n;
// n  = 2;
// console.log(n)

// {
//     let q= 12
//     console.log(q) // 12
//    {
//     let z = 23
//      q=q+q;
//      console.log(q)//24
//      {
//         let a= 25
//         console.log(a)
//         {
//             var x = 123
//         }
//         console.log(a)
//     }
//     console.log(q)
//     }
//     console.log(q)//24
// }
// console.log(n)

// Function in Javascript
// var a=12;
var b=13;
// function func1(a,b){
//     console.log((a*b)*(100/8+5));
//     console.log("the value of a is:",a );
//     console.log("the value of b is:",b );

// }

// func1(12,14);
// func1(1,4);
// func1(100,8);

function greet(){
    console.log("Welcome to javascript!")
}
greet()

function greetWithName(name){
    console.log("Welcome",name,"sir!");
}
var xyz = "Suraj"
greetWithName(xyz)


var x = 1;
function changeValue(a){
    a= a+5;
    return a;
} 

let funcVar = changeValue(x);

// operators in javascript

// + add
// - subs
// * multiply
// ** expo
//  % mod
// / divide
// ++ increment
// -- decrement

// arrow functions

let i = () =>{
    return "hello javascript"
} 

let af = 2

console.log(12+12, "+")
console.log(12*12, "*")
console.log(12/9, "/")
console.log(12%9, "%")
console.log(2**3, "**")
console.log(++af, "++")
console.log(af--, "--")

// number --  7 7.8 
// String "asasas" 'saas' `asas` 
// Boolean true false
// undefined 
// null 


// Refrence Type Variables

let arr = [12, 34,56,70,52]
let arr1 = [12,"car","ship"]
// array === index
arr[4] = 1000
console.log(arr)
console.log(arr[4])

let ob1 = {key:"value"}
let ob2 = {name:"Aadarsh",phoneNumber:12345}

let arOb= [
{name:"a",age:28,gender:'M'},
{name:"b",age:38,gender:'F'},
{name:"c",age:48,gender:'M'}
]
console.log(arr.length)
console.log(arr)
console.log(arr.push())
console.log(arr.slice(0,4))
// console.log(arr.pop())
// console.log(arr)
let arr2 = [[124,234,343,121,23,[1213,23243,7000]],[1212,1232],[2334,123]]

console.log(arr2[0][5][2])
let obOb= {val1:{name:"a",age:28,gender:'M'},
    val2:{name:"b",age:38,gender:'F'},
    val3:{name:"c",age:48,gender:'M'}
}

console.log(obOb.val3.gender)
 let obArr = {
    key1:[12,23,34,21],
    key2:[1223,34,1234],
    key3:[121,23,34]
 }

 console.log(obArr.key3[2])