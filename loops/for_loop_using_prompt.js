"use strict";

const ps = require("prompt-sync");
const prompt = ps();


// RUN "npm install prompt-sync" in terminal

// ABOVE STEPS ARE COMPULSORY TO USE PROMPT IN VS CODE (NODE.JS)

/*let name = prompt("enter your name:");
console.log(`${name}`);*/

// write a program to add first n natural numbers
let sum = 0
let n = prompt("Enter the value of n")
n = Number.parseInt(n)      
for( let i = 0;i<n; i++){
    sum +=(i+1)
}
console.log("sum of first " +n+ " natural number is" + sum)

/* sum=0
n=suppose takli 4
n la number madhe convert kela
i = 0, sum = sum + (0 + 1) = 0 + 1 = 1
i = 1, sum = sum + (1 + 1) = 1 + 2 = 3
i = 2, sum = sum + (2 + 1) = 3 + 3 = 6
i = 3, sum = sum + (3 + 1) = 6 + 4 = 10
i = 4, sum = sum + (4 + 1) = 10 + 5 = 15
Output: sum of first 5 natural number is 15*/

// wap to finr the factorial of n numbers

let fact =1
let a = prompt(" enter the number:")
a = Number.parseInt(a)
for( let i=1;i<=a;i++){
    fact*=i
}
console.log("factorial of " +a+ "is" +fact)