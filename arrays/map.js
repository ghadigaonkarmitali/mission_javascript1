let arr = [45,65,75]
let a = arr.map((value) =>{
    console.log(value)
    return value+1
})
console.log(a)

// output
/* 45
65
75
[ 46, 66, 76 ]
 */




let array = [45,65,75]
let b = array.map((value,index)=>{
    console.log(value,index)
    return value+1
})
console.log(b)

/* output
 45 0
65 1
75 2
[ 46, 66, 76 ] 
 */


let array1 = [78,76,89]
let c = array1.map((value,index,array) =>{
    console.log(value,index,array)
    return value+1
})
console.log(c)

