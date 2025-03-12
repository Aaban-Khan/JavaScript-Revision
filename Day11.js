let promiseOne = new Promise(function(resolve,reject){
    setTimeout(()=>{
        // console.log("async one");
        resolve()
    },1000)
})

promiseOne.then(function(){
    // console.log("async one complete");
    
})

new Promise(function(resolve,reject){
    setTimeout(()=>{
        // console.log("async two");
        resolve()
    },1000)
}).then(()=>{
    // console.log("async two complete");
    
})

let promiseThree = new Promise(function(resolve, reject){
    setTimeout(()=>{
        // console.log("async Three");
        resolve({userName: "aaban", email:"aabank750@gamil.com"})
    },1000)
})

promiseThree.then(function(user){
    // console.log(user)
})


let promiseFour = new Promise(function(resolve,reject){
    let error = false
    setTimeout(()=>{
        if(!error){
            resolve({userName: "aaban", email:"aabank750@gamil.com"})
            // console.log("async 4");
            
        }
        else{
            reject("ERROR: something went wrong")
        }
    },1000)
    
})

promiseFour.then(function(user){
    // console.log(user);
    return user.userName
    
}).then(function(userKaNaam){
    // console.log(userKaNaam );
    
}).catch(function(err){
    // console.log(err)
}).finally(function(){
    // console.log("the promise is either resolved or rejected")
})

// ye second method hai promise me then aur catch execute karane ki !!! hum chahe to then>catch>finally use kare ya fir async function me try & catch block ka use kre ye hamare user depend karta hai

let promiseFive = new Promise(function(resolve,reject){

    let error = true
    setTimeout(()=>{
        if(!error){
            resolve({username:"aaban", passward:123})
            console.log("promise 5");
            
        }
        else{
            reject("ERROR: something went wrong")
        }
    },1000)
})

                                 // yha par only then block execute hota hai !!! catch ke liye koi jagah nhi hai
async function completePromiseFive(){
    let responce = await promiseFive
    // console.log(responce);
    
}
completePromiseFive()

                                // yha par then aur catch dono execute hote hai
async function completePromiseFive(){
    try {
        let responce = await promiseFive
        // console.log(responce);
    } catch (error) {
        // console.log(error);
           
    }
}
completePromiseFive()


                            // using fetch get data through api's for the first time
async function callFunction(){
    try {
        let responce = await fetch("https://jsonplaceholder.typicode.com/users")
        let finalData = await responce.json()
        console.log(finalData);
    } catch (error) {
        console.log(`Error ${error}`);
           
    }
    
}
// callFunction()

fetch("https://jsonplaceholder.typicode.com/users")
.then((resolve)=>{
    return resolve.json()
}).then((data)=>{
    // console.log(data);
    
}).catch((error)=>{
    // console.log(`E: ${error}`);

    
})


async function Weather() {
    try {
        let responce = await fetch("https://jsonplaceholder.typicode.com/albums");
            let data = await responce.json()
            // console.log(data);
            
    } catch (error) {
        // console.log(error);
        
    }
}

// Weather()

fetch("https://jsonplaceholder.typicode.com/albums")
.then((data)=>{
    let json = data.json()
    return json
    
}).then((res)=>{
    // console.log(res);
    
}).catch((error)=>{
    // console.log(error);
    
}).finally(()=>{
    // console.log("either resolve or reject");
    
})

let promiseSix = new Promise((resolve,reject)=>{
    let data = false
    if(!data){
        resolve({username:"aaban", password:1234})
    } else{
        reject("something went wrong")
    }
})

promiseSix.then((res)=>{
    console.log(res);
    return res.username
}).then((data)=>{
    console.log(data);
    
}).catch((error)=>{
    console.log(error);
    
}).finally(()=>{
    console.log("either resolve or reject");
    
})