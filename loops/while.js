"use strict"
const ps = require ("prompt-sync")
const prompt = ps()
// this should be strictly use if you want to use prompt in your code


let n = prompt("Enter the value of n : ")
n = Number.parseInt(n)

let i = 0;
while(i<n){
    console.log(i)
    i++;
}