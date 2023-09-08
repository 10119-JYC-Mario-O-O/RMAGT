function JumpInstruction () {
    if (j) {
        PlayerGravity = JumpGravity;
    } else {
        PlayerGravity = NormalGravity;
    }
    
    if (j && !isHaveJumped) {
        PlayerMoveY = -70;

        isHaveJumped = true;
        isOnGround = false;
    }

    PlayerMoveY += PlayerGravity;

    if (PlayerMoveY >= 70) {
        PlayerMoveY = 70;
    }
    
    PlayerY += Mult_MPS(PlayerMoveY / 16 * 8);
}