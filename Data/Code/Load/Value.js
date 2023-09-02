canvas = document.createElement(`canvas`);  //  \
                                            //  |
document.body.appendChild(canvas);          //  |
                                            // /
canvas.width = screen.availWidth;           // \  Set Canvas
canvas.height = screen.availHeight;         //  |
                                            //  |
const ctx = canvas.getContext(`2d`);        // /

let w = false, a = false, s = false, d = false, //  \
    j = false, k = false, l = false,            //  } Check Butten Inputs
    enterKey = false, mouseClick = false;       // /

let fps = 60, interval = 1000 / fps,                //  \
    now, then = Date.now(), savedTime = Date.now(); //  } FPS Checker
    delta, conter = 0;                              // /

