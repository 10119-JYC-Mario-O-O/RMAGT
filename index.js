canvas = document.createElement(`canvas`);

document.body.appendChild(canvas);

canvas.width = 2545;
canvas.height = 1425;

let ctx = canvas.getContext(`2d`);

let w = false, a = false, s = false, d = false, j = false, k = false, m = false, mouseClick = false;

let keysDown = {};
function setKeyboardListener() {
    document.addEventListener('keydown', function (event) {
        keysDown[event.keyCode] = true;

        if (event.keyCode == 87) {
        
        }
        if (event.keyCode == 83) {
            // PlayerY += 64;
            isCarrying = !isCarrying;
        }
    });
    document.addEventListener('keyup', function (event) {
        delete keysDown[event.keyCode];
        
        if (event.keyCode == 87) {
            // PlayerY -= 64;
            isYoshi = !isYoshi;
        }
        if (event.keyCode == 83) {
            // PlayerY += 64;
            isCarrying = !isCarrying;
        }
    });
}
