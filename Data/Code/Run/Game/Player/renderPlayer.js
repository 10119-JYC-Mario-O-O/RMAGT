function renderPlayer() {
    PlayerAnimationFrame += Math.abs(PlayerMoveX) * 2 - 1;
    
    if (Math.abs(PlayerMoveX) * 2 - 1 < 0) {
        if (PlayerAnimationFrame <= PlayerRNG * -60) {
            PlayerAnimationState = 1;

            if (PlayerRNG * -60 - 60 > PlayerAnimationFrame) {
                PlayerAnimationFrame = 0;
                PlayerRNG = Math.random() * (60 - 30) + 30;
            }
        } else {
            PlayerAnimationState = 0;
        }
    }

    if (PlayerAnimationFrame >= 60) {
        PlayerAnimationState++;

        PlayerAnimationFrame = 0;

        if (PlayerAnimationState <= PlayerAnimationSpriteX[1] || PlayerAnimationState >= PlayerAnimationSpriteX[2]) {
            PlayerAnimationState = PlayerAnimationSpriteX[1];
        }
    }

    if (Math.floor(PlayerWidth / 16) != PlayerWidth / 16) {
        PlayerAnimationState = PlayerAnimationSpriteX[2];
    }

    drawImage(PlayerImage, 
              PlayerAnimationState * 88 + 88 * PlayerAnimationSpriteX[3] * (!PlayerFacingRight), PowerUpState * 88 * 3 + 88 - 88 * (s && !w) + 88* (w), 
              PlayerWidth * (Math.floor(PlayerWidth / 16) == PlayerWidth / 16) + 80 * (Math.floor(PlayerWidth / 16) != PlayerWidth / 16), 
              PlayerHeight * (Math.floor(PlayerHeight / 16) == PlayerHeight / 16) + 80 * (Math.floor(PlayerHeight / 16) != PlayerHeight / 16), 
              PlayerDrawX,PlayerDrawY, 
              PlayerWidth, PlayerHeight);
}