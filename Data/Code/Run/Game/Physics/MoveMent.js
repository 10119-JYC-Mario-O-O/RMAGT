function MoveInstruction () {
    if (w) {
        PlayerHeight = 80;
    } else if (s) {
        PlayerHeight = 48;
    } else {
        PlayerHeight = 64;
    }

    if (d) {
        PlayerMoveX += PlayerMovingSpeed;

        if (s) {
            if (PlayerMoveX >= PlayerMaxSpeed * 0.5) {
                PlayerMoveX = PlayerMaxSpeed * 0.5;
            }
        } else if (k) {
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

        if (s) {
            if (PlayerMoveX <= -PlayerMaxSpeed * 0.5) {
                PlayerMoveX = -PlayerMaxSpeed * 0.5;
            }
        } else if (k) {
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

    for (let i = 0; i < 100; i++) {
        PlayerRealX += PlayerMoveX / 100;
        
        if (WallDetection()) {
            break;
        }
    }
}