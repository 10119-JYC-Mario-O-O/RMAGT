// set PlayerMoveY as -80 before this instruction happens

function setPlayerGravity () {
    if (j) {
        PlayerGravity = JumpGravity;
    } else {
        PlayerGravity = NormalGravity;
    }
}

function JumpInstruction () {
    if (PlayerMoveY + PlayerGravity <= 70) {
        PlayerMoveY += PlayerGravity;
    }

    PlayerY += PlayerMoveY / 16 * 8 * Mult_Pixel_Size;
}