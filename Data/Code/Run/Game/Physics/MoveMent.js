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

        if (PlayerMoveX >= PlayerMaxSpeed) {
            PlayerMoveX = PlayerMaxSpeed;
        }

        if (isCrouching) {
            PlayerMoveX -= PlayerMovingSpeed * Math.abs(PlayerMoveX) / 5;
        } else if (isRunning) {
            PlayerMoveX += PlayerMovingSpeed * Math.abs(PlayerMoveX);
        }
    } else if (a) {
        PlayerMoveX -= PlayerMovingSpeed;

        if (PlayerMoveX <= -PlayerMaxSpeed) {
            PlayerMoveX = -PlayerMaxSpeed;
        }
        
        if (isCrouching) {
            PlayerMoveX += PlayerMovingSpeed * Math.abs(PlayerMoveX) / 5;
        } else if (isRunning) {
            PlayerMoveX -= PlayerMovingSpeed * Math.abs(PlayerMoveX);
        }
    } else if (PlayerMoveX != 0) {
        PlayerMoveX /= PlayerReInertia;
    }

    for (let i = 0; i < 10; i++) {
        PlayerRealX += PlayerMoveX / 10;
        
        if (WallDetection()) {
            console.log(true);
            break;
        }

        console.log(false);
    }
}