function hello() {
    console.log("hello from the other side!");
}
setTimeout(hello, 5000);

for(let i = 0; i<5; i++){
    setTimeout(function(){
        console.log(i);
    }, i*1000);
}

let timerId = null;
let count = 0;

const counterEl = document.getElementById("counter");

document.getElementById("start").addEventListener("click", () => {
    if (!timerId) {
        timerId = setInterval(() => {
            count++;
            counterEl.textContent = count;
        }, 1000);
    }
});

document.getElementById("stop").addEventListener("click", () => {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
    }
});

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(timerId);
    timerId = null;
    count = 0;
    counterEl.textContent = count;
});