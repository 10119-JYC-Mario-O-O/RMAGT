function MoveInstruction () {
    if (w) {
        if (PlayerWidth < 80) {
            PlayerWidth += 4;
            PlayerRealX -= 4;
        }

        if (PlayerHeight < 80) {
            PlayerHeight += 4;
            PlayerRealY -= 4;
        }
    } else if (s) {
        if (PlayerWidth > 48) {
            PlayerWidth -= 4;
            PlayerRealX += 4;
        }
        
        if (PlayerHeight > 48) {
            PlayerHeight -= 4;
            PlayerRealY += 4;
        }
    } else {
        if (PlayerWidth > 64) {
            PlayerWidth -= 4;
            PlayerRealX += 4;
        } else  if (PlayerWidth < 64) {
            PlayerWidth += 4;
            PlayerRealX -= 4;
        }
        
        if (PlayerHeight > 64) {
            PlayerHeight -= 4;
            PlayerRealY += 4;
        } else  if (PlayerHeight < 64) {
            PlayerHeight += 4;
            PlayerRealY -= 4;
        }
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