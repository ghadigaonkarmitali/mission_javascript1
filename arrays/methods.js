// 1. toString()

let number = [1,2,3,4,5,6,7]
console.log(number.toString());

// 2. join ()
 let a = number.join("_")
 console.log(a)

// 3.pop()

let b = number.pop()
console.log(b);
console.log(number);
let r = number.pop()
console.log(number,r) // pop return pan karu shakto popped element la


// 4.push()
let c = number.push(8)
console.log(number);

// 5. shift() and unshift()

let d = number.shift()
console.log(d)

let e = number.unshift(9)
console.log(e,number)// only "console.log(e)" returns array length

//6. delete operator

let num = [9,8,7,6,5,4]
delete num[0]
console.log(num) // delete operator use kelyavr array chi length change hot nahi

// 7. concat()
let numbers = [11,22,33,44,55,66,77]
let new_array = num.concat(numbers)
console.log(new_array)
 let navin_array = num.concat(number,numbers)
console.log(navin_array)

//8. sort() => original array la modify karto
// let unorder_array = [3,6,5,8,4,9,1,2,7]
// console.log(unorder_array.sort())


// 2 nd way of sorting

let compare = (a,b) =>{ // descending order madhe arrange karnyasathi use kela jata
    return b-a
}
let unorder_array = [3,6,5,8,4,9,1,2,7]
console.log(unorder_array.sort(compare))

//9.reverse()
unorder_array.reverse()
console.log(unorder_array)

//10. splice

let new_num = [1,2,3,4,5,6,7,8,9]
new_num.splice(2,3,27,10)
console.log(new_num)

//11. slice()

let numb = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// let newNumb = numb.slice(2)
let newNumb = numb.slice(2,7)
console.log(newNumb)








