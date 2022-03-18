let star = document.getElementById(`star`);
let moon = document.getElementById(`moon`);
let mountain3 = document.getElementById(`mountains3`);
let mountains4 = document.getElementById(`mountains4`);
let river = document.getElementById(`river`);
let boat = document.getElementById(`boat`);
let mountains7 = document.getElementById(`mountains7`);
let mazin = document.querySelector(`.mazin`);

window.onscroll = function() {
    let value = scrollY;
    star.style.left = value + `px`;
    moon.style.top = value * 2.8 + `px`;
    mountain3.style.top = value * 1.5 + `px`;
    mountains4.style.top = value * 1.2 + `px`;
    river.style.top = value + `px`;
    boat.style.top = value + `px`;
    boat.style.left = value * 2.5 + `px`;
    mazin.style.fontSize = value + `px`;
    if (scrollY >= 70) {
        mazin.style.fontSize = 70 + `px`;
        mazin.style.position = `fixed`;
        if (scrollY >= 423) {
            mazin.style.display = `none`;
        } else {
            mazin.style.display = `block`;
        }
        if (scrollY >= 174) {
            document.querySelector(`.main`).style.background = `linear-gradient(#376281,#10001f)`
        } else {
            document.querySelector(`.main`).style.background = `linear-gradient(#200016,#10001f)`

        }
    }
}