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
    drawImage(Test, 0, 0, 2560, 1440, x, y, 2560, 1440);

    setScreenScroll();
    renderLevel();
    MoveInstruction();
    JumpInstruction();

    if (PlayerRealY >= 1440 - PlayerHeight - 40) {
        PlayerRealY = 1440 - PlayerHeight - 40;
        
        isOnGround = true;

        
    }

    drawImage(TestSpr, 0, 0, 1440, 1440, PlayerRealX, PlayerRealY, PlayerWidth, PlayerHeight);
    drawImage(TestSpr, 0, 0, 1440, 1440, PlayerDrawX, PlayerDrawY, PlayerWidth, PlayerHeight);
}

function Debug () {
    console.log("Debug");
}

function Mult_MPS (num) {
    return num * Mult_Pixel_Size;
}

function drawImage (img, ix, iy, iw, ih, cx, cy, cw, ch) {
    ctx.drawImage(img, ix, iy, iw, ih, Mult_MPS(cx) + X_SDP, Mult_MPS(cy) + Y_SDP, Mult_MPS(cw), Mult_MPS(ch));
}