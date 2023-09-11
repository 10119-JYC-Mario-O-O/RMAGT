function renderLevel () {
    for (let i = 0; i < Main_1_Height; i++) {
        for (let j = 0; j < Main_1_Width; j++) {
            if (Main_1[j + i * Main_1_Width] == 0x01) {
                drawImage(TestGround, 0, 0, 1440, 1440, j * 40, i * 40, 40, 40);
            }
        }
    }
}

function setScreenScroll () {
    if (PlayerRealX < 2560 - PlayerWidth / 2) {
        PlayerDrawX = PlayerRealX;
    } else if (PlayerRealX > )
}