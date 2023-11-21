function MoveInstruction () {
    if (w) {
        if (PlayerWidth < 80) {
            PlayerWidth += 2;
            PlayerRealX -= 1;
        }

        if (PlayerHeight < 80) {
            PlayerHeight += 2;
            PlayerRealY += 2;
        }
    } else if (s) {
        if (PlayerWidth > 48) {
            PlayerWidth -= 2;
            PlayerRealX += 1;
        }
        
        if (PlayerHeight > 48) {
            PlayerHeight -= 2;
            PlayerRealY -= 2;
        }
    } else {
        if (PlayerWidth > 64) {
            PlayerWidth -= 2;
            PlayerRealX += 1;
        } else  if (PlayerWidth < 64) {
            PlayerWidth += 2;
            PlayerRealX -= 1;
        }
        
        if (PlayerHeight > 64) {
            PlayerHeight -= 2;
            PlayerRealY += 2;
        } else  if (PlayerHeight < 64) {
            PlayerHeight += 2;
            PlayerRealY -= 2;
        }
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