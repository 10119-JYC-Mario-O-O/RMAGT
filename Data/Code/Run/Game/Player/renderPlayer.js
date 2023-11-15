function renderPlayer() {
    PlayerAnimationFrame += Math.abs(PlayerMoveX) * 2 - 1;
    
    if (Math.abs(PlayerMoveX) * 2 - 1 < 0) {
        PlayerAnimationState = 0;
    }

    let A = Math.floor(PlayerAnimationFrame / 100);
    loadedText[33] = A;
    
    let B = Math.floor(PlayerAnimationFrame / 10) - A * 10;
    loadedText[34] = B;
    
    let C = Math.floor(PlayerAnimationFrame) - A * 100 - B * 10;
    loadedText[35] = C;

    if (PlayerAnimationFrame >= 60) {
        PlayerAnimationState++;

        PlayerAnimationFrame = 0;

        if (PlayerAnimationState < 2 || PlayerAnimationState >= PlayerSpriteSheetLeftX) {
            PlayerAnimationState = 2;
        }
    }

    drawImage(PlayerImage, 
              PlayerAnimationState * 80 + PlayerAnimationState * 8 + 88 * PlayerSpriteSheetLeftX * (!PlayerFacingRight), PowerUpState * 88 * 3 + 88 - 88 * (s && !w) + 88* (w), 
              PlayerWidth * (Math.floor(PlayerWidth / 16) == PlayerWidth / 16) + 80 * (Math.floor(PlayerWidth / 16) != PlayerWidth / 16), 
              PlayerHeight * (Math.floor(PlayerHeight / 16) == PlayerHeight / 16) + 80 * (Math.floor(PlayerHeight / 16) != PlayerHeight / 16), 
              PlayerDrawX,PlayerDrawY, 
              PlayerWidth, PlayerHeight);
}