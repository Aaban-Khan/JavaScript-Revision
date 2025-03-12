
for (let i = 0; i < 10; i++) {
    const element = i;
    if (element==5){
        // console.log(`${5} is Special number`)
        break
    }
    // console.log(element)
}

for (let i = 10; i<20; i++){
    const element = i 
    if(element==16){
        // console.log(`${element} is a special number`) 
        continue
    } 
    // console.log(element)
}


let you = 0
while (you <= 7) {
    you++
    // console.log(you)
}


let arr = ["ironman", "hulk", "batman", "Spiderman"]

for (const val of arr) {
    // console.log(val)
}

let naam = "aaban khan"
for (const element of naam) {
    if (element==" "){
        continue
    }
    // console.log(element)
}

let map = new Map()
map.set("IN" , "India")
map.set("FR", "France")
map.set("PAK", "Pakistan")

// console.log(map)

for (const [key , val] of map) {
    // console.log(key, val)
}

let myobject = {
    name : "aaban",
    surname : "khan",
    age : 17,
    favcolor : "Pink"
}

for (const key in myobject) {
    // console.log(myobject[key])
}

let arr2 = ["ironman", "hulk", "batman", "Spiderman"]

for (const key in arr2) {
    // console.log(arr2[key]);
    
}


let arr3 = ["ironman", "hulk", "batman", "Spiderman"]
arr3.forEach( (item , index, array)=>{
    // console.log(item , index, array);
} )
// item , index, array ka naam kuch bhi ho sakta hai 

function sample(items){
    console.log(items);
}

arr3.forEach(sample)