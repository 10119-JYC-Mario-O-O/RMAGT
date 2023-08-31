canvas = document.createElement(`canvas`);

document.body.appendChild(canvas);

canvas.width = screen.availWidth;
canvas.height = screen.availHeight;

const ctx = canvas.getContext(`2d`);

let w = false, a = false, s = false, d = false, j = false, k = false, l = false, enterKey = false, mouseClick = false;

let fps = 60, interval = 1000 / fps;
let delta, conter = 0;
let now, then = Date.now(), savedTime = Date.now();