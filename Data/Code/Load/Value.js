canvas = document.getElementById(`canvas`); //  /
                                            //  |
canvas.width = screen.width;                // /
canvas.height = screen.height;              // \  Set Canvas
                                            //  |
const ctx = canvas.getContext(`2d`);        //  \

const Mult_Pixel_Size = canvas.width - (canvas.height / 1440) * 2560 >= 0 ?
                     canvas.height / 1440 : canvas.width / 2560;
                    // height is standard : width is standard

// SDP = Start Drawing Position
const X_SDP = (canvas.width - Mult_Pixel_Size * 2560) / 2, 
      Y_SDP = (canvas.height - Mult_Pixel_Size * 1440) / 2;

let w = false, a = false, s = false, d = false, // /
    j = false, k = false, l = false,            // | Check Butten Inputs
    enterKey = false, mouseClick = false;       // \

let fps = 60, interval = 1000 / fps,                // /
    now, then = Date.now(), savedTime = Date.now(), // | FPS Checker
    delta, conter = 0;                              // \

let Title_UI_Code_Num = 0;   // 0 = Fade Out, 1 = Fade In, 2 = Title etc

let Seleted_Game_Theme = -1;    // -1 >= ERROR, 0 = Main, 1 = 3D etc