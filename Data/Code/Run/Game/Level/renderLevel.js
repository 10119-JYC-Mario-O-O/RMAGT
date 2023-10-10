function renderLevel () {
    // Render Level
    for (let i = 0; i < loadedLevel_Height; i++) {
        for (let j = 0; j < loadedLevel_Width; j++) {
            if (loadedLevel[j + i * loadedLevel_Width] == 0x01) {
                drawImage(B, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
            }

            if (loadedLevel[j + i * loadedLevel_Width] == 0x02) {
                drawImage(P, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
            }

            if (loadedLevel[j + i * loadedLevel_Width] == 0x03) {
                drawImage(G, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
            }

            if (loadedLevel[j + i * loadedLevel_Width] == 0x04) {
                drawImage(Y, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
            }

            if (loadedLevel[j + i * loadedLevel_Width] == 0x05) {
                drawImage(O, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
            }
        }
    }

    // Render Text
    for (let i = 0; i < loadedLevel_Height; i++) {
        for (let j = 0; j < loadedLevel_Width; j++) {
            if (loadedText[j + i * loadedLevel_Width] == "A") {
                drawImage(Alpha_A, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
            }

            if (loadedText[j + i * loadedLevel_Width] == "B") {
                drawImage(Alpha_B, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
            }

            if (loadedText[j + i * loadedLevel_Width] == "C") {
                drawImage(Alpha_C, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
            }

            if (loadedText[j + i * loadedLevel_Width] == "D") {
                drawImage(Alpha_D, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
            }

            if (loadedText[j + i * loadedLevel_Width] == "E") {
                drawImage(Alpha_E, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
            }

            if (loadedText[j + i * loadedLevel_Width] == "F") {
                drawImage(Alpha_F, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
            }

            if (loadedText[j + i * loadedLevel_Width] == "G") {
                drawImage(Alpha_G, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
            }

            if (loadedText[j + i * loadedLevel_Width] == "H") {
                drawImage(Alpha_H, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
            }

            if (loadedText[j + i * loadedLevel_Width] == "I") {
                drawImage(Alpha_I, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
            }

            if (loadedText[j + i * loadedLevel_Width] == "J") {
                drawImage(Alpha_J, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
            }

            if (loadedText[j + i * loadedLevel_Width] == "K") {
                drawImage(Alpha_K, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
            }

            if (loadedText[j + i * loadedLevel_Width] == "L") {
                drawImage(Alpha_L, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
            }

            if (loadedText[j + i * loadedLevel_Width] == "M") {
                drawImage(Alpha_M, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
            }

            if (loadedText[j + i * loadedLevel_Width] == "N") {
                drawImage(Alpha_N, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
            }

            if (loadedText[j + i * loadedLevel_Width] == "O") {
                drawImage(Alpha_O, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
            }

            if (loadedText[j + i * loadedLevel_Width] == "P") {
                drawImage(Alpha_P, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
            }

            if (loadedText[j + i * loadedLevel_Width] == "Q") {
                drawImage(Alpha_Q, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
            }

            if (loadedText[j + i * loadedLevel_Width] == "R") {
                drawImage(Alpha_R, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
            }

            if (loadedText[j + i * loadedLevel_Width] == "S") {
                drawImage(Alpha_S, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
            }

            if (loadedText[j + i * loadedLevel_Width] == "T") {
                drawImage(Alpha_T, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
            }

            if (loadedText[j + i * loadedLevel_Width] == "U") {
                drawImage(Alpha_U, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
            }

            if (loadedText[j + i * loadedLevel_Width] == "V") {
                drawImage(Alpha_V, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
            }

            if (loadedText[j + i * loadedLevel_Width] == "W") {
                drawImage(Alpha_W, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
            }

            if (loadedText[j + i * loadedLevel_Width] == "X") {
                drawImage(Alpha_X, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
            }

            if (loadedText[j + i * loadedLevel_Width] == "Y") {
                drawImage(Alpha_Y, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
            }

            if (loadedText[j + i * loadedLevel_Width] == "Z") {
                drawImage(Alpha_Z, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
            }
        }
    }
}

function setScreenScroll () {
    if (PlayerRealX <= 0) {
        PlayerRealX = 0;
    } else if (PlayerRealX >= loadedLevel_Width * 80 - PlayerWidth) {
        PlayerRealX = loadedLevel_Width * 80 - PlayerWidth;
    }
    
    if (PlayerRealX < 1280 - PlayerWidth / 2) {
        PlayerDrawX = PlayerRealX;
    } else if (PlayerRealX > loadedLevel_Width * 80 - 1280 - PlayerWidth / 2) {
        PlayerDrawX = PlayerRealX - loadedLevel_Width * 80 + 2560;
    } else {
        PlayerDrawX = 1280 - PlayerWidth / 2;
    }

    if (PlayerRealY <= 0) {
        PlayerRealY = 0;
    } else if (PlayerRealY >= loadedLevel_Height * 80 - PlayerHeight) {
        PlayerRealY = loadedLevel_Width * 80 - PlayerWidth;
    }
    
    if (PlayerRealY < 720 - PlayerHeight / 2) {
        PlayerDrawY = PlayerRealY;
    } else if (PlayerRealY > loadedLevel_Height * 80 - 720 - PlayerHeight / 2) {
        PlayerDrawY = PlayerRealY - loadedLevel_Height * 80 + 1440;
    } else {
        PlayerDrawY = 720 - PlayerHeight / 2;
    }
}