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
    
    PlayerY += PlayerMoveY / 16 * 8;
}

function MoveInstruction () {
    if (a) {
        // move to the left
    }

    if (s) {
        isCrouching = true;
    } else {
        isCrouching = false;
    }

    if (d) {
        // move to the right
    }
}