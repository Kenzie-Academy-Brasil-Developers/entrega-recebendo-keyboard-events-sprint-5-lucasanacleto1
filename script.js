"use strict";
let boxTop = 200;
let boxLeft = 200;

document.addEventListener("keydown", (event) => {
    const keyName = event.key;
    // alert("keydown event\n\n" + "key: " + keyName);
    document.querySelector("#box").style.transitionDuration = "0.5s";
    if (keyName === 'ArrowDown') {
        boxTop += 10
        document.querySelector("#box").style.top = boxTop + "px";
    } else if (keyName === 'ArrowUp') {
        boxTop -= 10
        document.querySelector("#box").style.top = boxTop + "px";
    } else if (keyName === 'ArrowLeft') {
        boxLeft -= 10
        document.querySelector("#box").style.left = boxLeft + "px";
    } else if (keyName === 'ArrowRight') {
        boxLeft += 10
        document.querySelector("#box").style.left = boxLeft + "px";
    }
});