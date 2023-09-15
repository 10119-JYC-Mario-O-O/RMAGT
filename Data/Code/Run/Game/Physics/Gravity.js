function JumpInstruction () {
    if (!(j || l) && isOnGround && !isBonked) {
        isHaveJumped = false;
    }
    
    if (j) {
        PlayerGravity = JumpGravity;
    } else if (l) {
        PlayerGravity = JumpGravity * 1.25;
    } else {
        PlayerGravity = NormalGravity;
    }
    
    if ((j || l) && !isHaveJumped) {
        PlayerMoveY = -75;

        isHaveJumped = true;
        isOnGround = false;
    }

    PlayerMoveY += PlayerGravity;

    if (PlayerMoveY >= 75) {
        PlayerMoveY = 75;
    }
}