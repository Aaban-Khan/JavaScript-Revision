// let user = {
//     username : "aaban",
//     age: 17,

//     welcomeMessage : function (){
//         console.log(`${this.username} , welcome to the website`);   
//         console.log(this)
//     }
// }

// user.welcomeMessage()
// user.username = "Mohid"
// user.welcomeMessage()

// console.log(this);

// immediatly invoke function 


// simple function 
(function sample() {
    console.log(`Db connected`)
})();

// arrow function 
( () => {
    console.log(`DB connected two`)
}) ();

// simple function with para and arguments
(function sampledata(naam){
    console.log(`this is sample name ${naam}`);
}) ("aaban");

// simple function with para and arguments

((surname)=>{
    console.log(`this is my surname "${surname}"`)
}) ("Khan");



(function() {
    let secret = "IIFE secret";
    console.log(secret);
})();
