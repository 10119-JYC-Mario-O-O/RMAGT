function JumpInstruction () {
    if (j) {
        PlayerGravity = JumpGravity;
    } else {
        PlayerGravity = NormalGravity;
    }
    
    if (j && !isHaveJumped) {
        PlayerMoveY = -80;

        isHaveJumped = true;
        isOnGround = false;
    }

    if (PlayerMoveY + PlayerGravity <= 70) {
        PlayerMoveY += PlayerGravity;
    }
    
    PlayerY += PlayerMoveY / 16 * 8 * Mult_Pixel_Size;
}