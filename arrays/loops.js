// FOR LOOP

let num = [67,78,68,89,90]

for (let i=0;i<num.length;i++){
    console.log(num[i])
}

// FOR EACH LOOP

num.forEach((element) => {
    console.log(element*element)
})

// ARRAY.FROM
let name = "Naruto"
let arr = Array.from(name)
console.log(arr)

// for of loop

for (let i of num){
    console.log(i)
}

// for in loop

for(let i in num){
    console.log(i)
    console.log(num[i])
}








