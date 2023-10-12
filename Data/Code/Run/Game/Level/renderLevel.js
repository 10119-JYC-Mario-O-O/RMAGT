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
            renderText(loadedText[j + i * loadedLevel_Width]);
        }
    }
}

function setScreenScroll () {
    if (PlayerRealX <= 0) {
        PlayerRealX = 0;
    } else if (PlayerRealX >= loadedLevel_Width * 80 - PlayerWidth) {
        PlayerRealX = loadedLevel_Width * 80 - PlayerWidth;5
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

function renderText(Text) {
    if (Text == "A") {
        drawImage(TextFont, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
    }

    if (Text == "B") {
        drawImage(TextFont, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
    }

    if (Text == "C") {
        drawImage(TextFont, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
    }

    if (Text == "D") {
        drawImage(TextFont, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
    }

    if (Text == "E") {
        drawImage(TextFont, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
    }

    if (Text == "F") {
        drawImage(TextFont, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
    }

    if (Text == "G") {
        drawImage(TextFont, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
    }

    if (Text == "H") {
        drawImage(TextFont, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
    }

    if (Text == "I") {
        drawImage(TextFont, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
    }

    if (Text == "J") {
        drawImage(TextFont, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
    }

    if (Text == "K") {
        drawImage(TextFont, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
    }

    if (Text == "L") {
        drawImage(TextFont, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
    }

    if (Text == "M") {
        drawImage(TextFont, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
    }

    if (Text == "N") {
        drawImage(TextFont, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
    }

    if (Text == "O") {
        drawImage(TextFont, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
    }

    if (Text == "P") {
        drawImage(TextFont, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
    }

    if (Text == "Q") {
        drawImage(TextFont, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
    }

    if (Text == "R") {
        drawImage(TextFont, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
    }

    if (Text == "S") {
        drawImage(TextFont, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
    }

    if (Text == "T") {
        drawImage(TextFont, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
    }

    if (Text == "U") {
        drawImage(TextFont, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
    }

    if (Text == "V") {
        drawImage(TextFont, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
    }

    if (Text == "W") {
        drawImage(TextFont, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
    }

    if (Text == "X") {
        drawImage(TextFont, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
    }

    if (Text == "Y") {
        drawImage(TextFont, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
    }

    if (Text == "Z") {
        drawImage(TextFont, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 + PlayerDrawY - PlayerRealY, 80, 80);
    }
}