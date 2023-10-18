function renderPlayer() {
    PlayerAnimationFrame += Math.abs(PlayerMoveX) * 8 / 15 - 1;
    
    if (PlayerAnimationFrame <= 0) {
        PlayerAnimationFrame = 0;
    }
    
    loadedText[33] = Math.floor(PlayerAnimationFrame / 100);
    loadedText[34] = Math.floor(PlayerAnimationFrame / 10) - A * 10;
    loadedText[35] = PlayerAnimationFrame - A * 100 - B * 10;

    drawImage(R, 0, 0, 256, 256, PlayerDrawX, PlayerDrawY, PlayerWidth, PlayerHeight);
}