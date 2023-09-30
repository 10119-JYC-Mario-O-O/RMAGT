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
            if (PlayerMoveX >= PlayerMaxSpeed * 0.5) {
                PlayerMoveX = PlayerMaxSpeed * 0.5;
            }
        } else if (isRunning) {
            if (PlayerMoveX >= PlayerMaxSpeed * 1.5) {
                PlayerMoveX = PlayerMaxSpeed * 1.5;
            }
        } else {
            if (PlayerMoveX >= PlayerMaxSpeed) {
                PlayerMoveX = PlayerMaxSpeed;
            }
        }
    } else if (a) {
        PlayerMoveX -= PlayerMovingSpeed;

        if (isCrouching) {
            if (PlayerMoveX <= -PlayerMaxSpeed * 0.5) {
                PlayerMoveX = -PlayerMaxSpeed * 0.5;
            }
        } else if (isRunning) {
            if (PlayerMoveX <= -PlayerMaxSpeed * 1.5) {
                PlayerMoveX = -PlayerMaxSpeed * 1.5;
            }
        } else {
            if (PlayerMoveX <= -PlayerMaxSpeed) {
                PlayerMoveX = -PlayerMaxSpeed;
            }
        }
    } else if (PlayerMoveX != 0) {
        PlayerMoveX /= PlayerReInertia;
    }

    for (let i = 0; i < 10; i++) {
        PlayerRealX += PlayerMoveX / 10;
        
        if (WallDetection()) {
            break;
        }
    }
}