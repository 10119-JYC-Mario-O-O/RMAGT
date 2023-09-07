function Title_Screen () {
    if (Title_UI_Code_Num == 0) {
        Fade_Out(0, 0);
    } else if (Title_UI_Code_Num == 1) {
        Fade_In();
    } else if (Title_UI_Code_Num == 2) {
        Start_Title();
    } else if (Title_UI_Code_Num == 3) {
        Game_SETTINGS();
    } else if (Title_UI_Code_Num == 4) {
        Selet_A_Theme();
    } else if (Title_UI_Code_Num == 5) {
        DELET_Game_Files();
    } else if (Title_UI_Code_Num == 6) {
        Start_The_Game();
    }
}

function Fade_Out (x, y) {
    ctx.drawImage(Test, 0, 0, 2560, 1440, x + X_SDP, y + Y_SDP, Mult_MPS(2560), Mult_MPS(1440));

    JumpInstruction();

    if (PlayerY >= canvas.height -  Y_SDP - Mult_MPS(PlayerHeight)) {
        PlayerY = canvas.height - Y_SDP - Mult_MPS(PlayerHeight);
        
        isOnGround = true;

        if (!j) {
            isHaveJumped = false;
        }
    }

    ctx.drawImage(TestSpr, 0, 0, 1440, 1440, X_SDP, Y_SDP + PlayerY, Mult_MPS(PlayerWidth), Mult_MPS(PlayerHeight));
}

function Debug () {
    console.log("Debug");
}

function Mult_MPS (num) {
    return num * Mult_Pixel_Size;
}