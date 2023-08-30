canvas = document.createElement(`canvas`);

document.body.appendChild(canvas);

canvas.width = screen.availWidth;
canvas.height = screen.availHeight;

const ctx = canvas.getContext(`2d`);

let w = false, a = false, s = false, d = false, j = false, k = false, l = false, enterKey = false, mouseClick = false;