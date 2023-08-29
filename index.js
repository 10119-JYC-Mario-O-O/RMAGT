canvas = document.createElement(`canvas`);

document.body.appendChild(canvas);

canvas.width = 2545;
canvas.height = 1425;

const ctx = canvas.getContext(`2d`);

let w = false, a = false, s = false, d = false, j = false, k = false, m = false, mouseClick = false;

function loadPlayerImage() {
    Test = new Image();
    Test.src = 'Test.png';
}

function setKeyboardListener() {
    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 87) {
        
        }
    });
    document.addEventListener('keyup', function (event) {
        if (event.keyCode == 87) {
            
        }
    });
}

loadPlayerImage();

function main () {
    ctx.drawImage(Test, 0, 0, 2, 4, 10, 10, 8, 8);

    requestAnimationFrame(main);
}

main();