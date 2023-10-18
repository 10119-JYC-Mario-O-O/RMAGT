function renderPlayer() {
    PlayerAnimationFrame += Math.abs(PlayerMoveX) * 8 / 15 - 1;
    
    if (PlayerAnimationFrame <= 0) {
        PlayerAnimationFrame = 0;
    }

    let A = Math.floor(PlayerAnimationFrame / 100);
    loadedText[33] = A;
    
    let B = Math.floor(PlayerAnimationFrame / 10) - A * 10;
    loadedText[34] = B
    
    let C = Math.floor(PlayerAnimationFrame) - A * 100 - B * 10;
    loadedText[35] = C;

    drawImage(R, 0, 0, 256, 256, PlayerDrawX, PlayerDrawY, PlayerWidth, PlayerHeight);
}