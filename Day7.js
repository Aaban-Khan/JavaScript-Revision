// a.childNodes[1]
// console.log(a)



setInterval(() => {
    (() =>{
        document.querySelectorAll(".box").forEach( (e) => {
            e.style.backgroundColor = "yellow"
        })
    }) ();

}, 4000);

let a = document.querySelector(".container").childNodes

// a[7].matches("#box4")

