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

        if (PlayerAnimationState < 2 || PlayerAnimationState >= PlayerSpriteSheetLeftX) {
            PlayerAnimationState = 2;
        }
    }

    if (Math.floor(PlayerWidth / 16) != PlayerWidth / 16) {
        PlayerAnimationState = PlayerSpriteSheetLeftX * 2;
    }

    drawImage(PlayerImage, 
              PlayerAnimationState * 80 + PlayerAnimationState * 8 + 88 * PlayerSpriteSheetLeftX * (!PlayerFacingRight), PowerUpState * 88 * 3 + 88 - 88 * (s && !w) + 88* (w), 
              PlayerWidth * (Math.floor(PlayerWidth / 16) == PlayerWidth / 16) + 80 * (Math.floor(PlayerWidth / 16) != PlayerWidth / 16), 
              PlayerHeight * (Math.floor(PlayerHeight / 16) == PlayerHeight / 16) + 80 * (Math.floor(PlayerHeight / 16) != PlayerHeight / 16), 
              PlayerDrawX,PlayerDrawY, 
              PlayerWidth, PlayerHeight);
}