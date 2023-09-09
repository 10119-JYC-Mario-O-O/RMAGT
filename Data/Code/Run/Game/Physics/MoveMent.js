function MoveInstruction () {
    if (a) {
        PlyaerMoveX++;
    }

    if (s) {
        isCrouching = true;
    } else {
        isCrouching = false;
    }

    if (d) {
        // move to the right
    }

    PlayerX += PlayerMoveX;
}