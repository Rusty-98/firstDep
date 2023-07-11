let hourHand = document.querySelector("#hour");
let minuteHand = document.querySelector("#minute");
let secondHand = document.querySelector("#second");

setInterval(() => {
    
let date = new Date();
let hourr = date.getHours()*30;
let minutee = date.getMinutes()*6;
let secondd = date.getSeconds()*6;

hourHand.style.transform = `rotateZ(${hourr+minutee/12}deg)`;
minuteHand.style.transform = `rotateZ(${minutee}deg)`;
secondHand.style.transform = `rotateZ(${secondd}deg)`;

}, 500);