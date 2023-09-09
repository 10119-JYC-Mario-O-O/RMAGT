function MoveInstruction () {
    if (s) {
        isCrouching = true;
    } else {
        isCrouching = false;
    }

    if (k) {
        isRunning = true;
    } else {
        isRunning = false;
    }
    
    if (d) {
        PlayerMoveX += PlayerMovingSpeed;

        if (isCrouching) {
            PlayerMoveX -= PlayerMovingSpeed / 2;
        }

        if (isRunning) {
            PlayerMoveX += PlayerMovingSpeed / 2;
        }
    } else if (a) {
        PlayerMoveX -= PlayerMovingSpeed;

        if (isCrouching) {
            PlayerMoveX += PlayerMovingSpeed / 2;
        }

        if (isRunning) {
            PlayerMoveX -= PlayerMovingSpeed / 2;
        }
    } else if (PlayerMoveX != 0) {
        PlayerMoveX > 0 ? PlayerMoveX -= PlayerReInertia : PlayerMoveX += PlayerReInertia;
    }

    PlayerX += PlayerMoveX;
}