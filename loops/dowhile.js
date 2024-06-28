"use strict"

const ps = require("prompt-sync")
const prompt = ps()


let n = prompt ("Enter the value of n : ")
n = Number.parseInt(n)
let i = 0;
do {
    console.log(i);
    i++;
}
while(i<n)