function JumpInstruction () {
    if (j) {
        PlayerGravity = JumpGravity;
    } else {
        PlayerGravity = NormalGravity;
    }
    
    if (j && !isHaveJumped) {
        PlayerMoveY = -75;

        isHaveJumped = true;
        isOnGround = false;
    }

    PlayerMoveY += PlayerGravity;

    if (PlayerMoveY >= 75) {
        PlayerMoveY = 75;
    }
    
    PlayerY += PlayerMoveY / 16 * 8;
}