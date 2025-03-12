let arr = ["ironman", "hulk", "batman", "Spiderman"]

let arr2 = [ 1,3,5,6,3,7,4, 1,2,5,3]
let filt = arr2.filter( (filt) => filt > 4 )
// console.log(`i am ${filt} one`)


// let newfilt = []
// arr2.forEach( (num) => {
//     if(num>4){
//         newfilt.push(num)
//     }
// })
// console.log(`i am ${newfilt} two`);


let newfilt = []
arr2.forEach( (num) =>{
    if(num>4){
        newfilt.push(num)
    }
})
// console.log(newfilt);

let filt3 = arr2.filter( (num) => num > 4)
// console.log(filt3);

let mynums = [1,2,3,4,5,6,7,8,9,10]
let newmynums = mynums.map( (num) => num + 10)
// console.log(newmynums)

const n = [1,8,7,11]
let sum = n.reduce((acc, num) => acc + num ,0)
console.log(sum)

let naam = "aaban"
let naam2 = Array.from(naam)
console.log(naam2);
