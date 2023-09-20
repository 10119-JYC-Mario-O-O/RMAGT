function renderLevel () {
    for (let i = 0; i < loadedLevel_Height; i++) {
        for (let j = 0; j < loadedLevel_Width; j++) {
            if (loadedLevel[j + i * loadedLevel_Width] == 0x01) {
                drawImage(TestGround, 0, 0, 1440, 1440, PlayerDrawX - PlayerRealX + j * 80, i * 80 - PlayerDrawY + PlayerRealY, 80, 80);
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
        PlayerDrawY = loadedLevel_Height * 80 - PlayerRealY + 720;
    } else {
        PlayerDrawY = 720 - PlayerHeight / 2;
    }
}