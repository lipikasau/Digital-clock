const myTime = document.getElementById('clock')
// setInterval(() => {
    
// }, 1000);
// let mydate = new Date()
// console.log(mydate.toLocaleTimeString());

setInterval(() => {
    let mydate = new Date()
// console.log(mydate.toLocaleTimeString());
myTime.innerHTML = mydate.toLocaleTimeString()
}, 1000);