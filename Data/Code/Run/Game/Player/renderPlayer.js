function renderPlayer() {
    PlayerAnimationFrame += Math.abs(PlayerMoveX) * 2 - 1;
    
    if (PlayerAnimationFrame <= 0) {
        PlayerAnimationFrame = 0;
    }

    let A = Math.floor(PlayerAnimationFrame / 100);
    loadedText[33] = A;
    
    let B = Math.floor(PlayerAnimationFrame / 10) - A * 10;3
    loadedText[34] = B;
    
    let C = Math.floor(PlayerAnimationFrame) - A * 100 - B * 10;
    loadedText[35] = C;



    drawImage(PlayerImage, 
              PlayerAnimationState * 80 + PlayerAnimationState * 8, PowerUpState * 88 * 3 + 88 - 88 * (s && !w) + 88* (w), 
              PlayerWidth * (Math.floor(PlayerWidth / 16) == PlayerWidth / 16) + 80 * (Math.floor(PlayerWidth / 16) != PlayerWidth / 16) + 80 * PlayerSpriteSheetLeftX * (!PlayerFacingRight), 
              PlayerHeight * (Math.floor(PlayerHeight / 16) == PlayerHeight / 16) + 80 * (Math.floor(PlayerHeight / 16) != PlayerHeight / 16), 
              PlayerDrawX,PlayerDrawY, 
              PlayerWidth, PlayerHeight);
}