function hello() {
    console.log("hello from the other side!");
}
setTimeout(hello, 5000);

for(let i = 0; i<5; i++){
    setTimeout(function(){
        console.log(i);
    }, i*1000);
}

let timerId;
let count = 0;
document.getElementById("start").addEventListener("click", () => {
    if (!timerId) {
        timerId = setInterval(() => {
            count++;
            document.getElementById("counter").textContent = count;
        }, 1000);
    }  
})
document.getElementById("stop").addEventListener("click", () =>{
    if (timerId){
        timerId = clearInterval(() => {
            count;
            document.getElementById("counter").textContent = count;
        },100);
    }
})
document.getElementById("reset").addEventListener("click", () =>{

})