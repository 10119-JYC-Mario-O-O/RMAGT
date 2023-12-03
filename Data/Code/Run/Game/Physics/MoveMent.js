function MoveInstruction () {
    if (w) {
        if (PlayerSizeState < 200) {
            PlayerSizeState += 1;
        }
    } else if (s) {
        if (PlayerSizeState > 0) {
            PlayerSizeState -= 1;
        }
    } else {
        if (PlayerSizeState < 100) {
            PlayerSizeState += 1;
        } else if (PlayerSizeState > 100) {
            PlayerSizeState -= 1;
        }
    }

    loadedText[2] = `${PlayerSizeState - Math.floor(PlayerSizeState / 10 - Math.floor(PlayerSizeState / 100) / 10) * 10 - Math.floor(PlayerSizeState / 100) * 100}`;
    loadedText[1] = `${Math.floor(PlayerSizeState / 10 - Math.floor(PlayerSizeState / 100) / 10)}`;
    loadedText[0] = `${Math.floor(PlayerSizeState / 100)}`;

    if (PlayerSizeState == 0) {
        PlayerHeight = 48;
        PlayerWidth = 48;
    } else if (PlayerSizeState == 100) {
        PlayerHeight = 64;
        PlayerWidth = 64;
    } else {
        PlayerHeight = 80;
        PlayerWidth = 80;
    }

    if (d) {
        if (PlayerAnimationFrame < 0) {
            PlayerAnimationFrame = 0;
        }

        PlayerMoveX += PlayerMovingSpeed;
        
        PlayerFacingRight = true;

        // if (s) {
            // if (PlayerMoveX >= PlayerMaxSpeed * 0.5) {
                // PlayerMoveX = PlayerMaxSpeed * 0.5;
            // }
        /* } else */if (k) {
            if (PlayerMoveX >= PlayerMaxSpeed * 1.5) {
                PlayerMoveX = PlayerMaxSpeed * 1.5;
            }
        } else {
            if (PlayerMoveX >= PlayerMaxSpeed) {
                PlayerMoveX = PlayerMaxSpeed;
            }
        }
    } else if (a) {
        if (PlayerAnimationFrame < 0) {
            PlayerAnimationFrame = 0;
        }
        
        PlayerMoveX -= PlayerMovingSpeed;

        PlayerFacingRight = false;

        // if (s) {
            // if (PlayerMoveX <= -PlayerMaxSpeed * 0.5) {
                // PlayerMoveX = -PlayerMaxSpeed * 0.5;
            // }
        /* } else */if (k) {
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