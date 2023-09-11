function renderLevel () {
    for (let i = 0; i < loadedLevel_Height; i++) {
        for (let j = 0; j < loadedLevel_Width; j++) {
            if (loadedLevel[j + i * loadedLevel_Width] == 0x01) {
                drawImage(TestGround, 0, 0, 1440, 1440, j * 80, i * 80, 80, 80);
            }
        }
    }
}

function setScreenScroll () {
    if (PlayerRealX < 2560 - PlayerWidth / 2) {
        PlayerDrawX = PlayerRealX;
    } else if (PlayerRealX > loadedLevel_Width - 2560 + PlayerWidth / 2) {
        PlayerDrawX = PlayerRealX - loadedLevel_Width + 2560 - PlayerWidth / 2;
    } else {
        PlayerDrawX = 2560 - PlayerWidth / 2;
    }
}