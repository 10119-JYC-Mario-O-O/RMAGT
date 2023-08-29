canvas = document.createElement(`canvas`);

document.body.appendChild(canvas);

canvas.width = screen.availWidth;
canvas.height = screen.availHeight;

const ctx = canvas.getContext(`2d`);

let w = false, a = false, s = false, d = false, j = false, k = false, l = false, enterKey = false, mouseClick = false;

loadImage();

loadEventListener();

main();

function main () {
    ctx.drawImage(Test, 0, 0, 1024, 1024, 10, 10, 1024, 1024);

    requestAnimationFrame(main);
}