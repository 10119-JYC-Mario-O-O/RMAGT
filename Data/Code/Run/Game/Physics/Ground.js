//PBG = PlayerBackGround
function WallDetection () {
    let PBGX = Math.floor((PlayerRealX) / 80), 
        PBGY = Math.floor((PlayerRealY) / 80),
        PBGSideX = Math.floor((PlayerRealX + PlayerWidth) / 80), 
        PBGSideY = Math.floor((PlayerRealY + PlayerHeight) / 80);

    let hasTouchedWall = false;

    if (DebugMod) {
        drawImage(R, 0, 0, 1440, 1440, Math.floor((PlayerRealX) / 80) * 80, Math.floor((PlayerRealY) / 80) * 80, 80, 80);
        drawImage(O, 0, 0, 1440, 1440, Math.floor((PlayerRealX + PlayerWidth) / 80) * 80, Math.floor((PlayerRealY) / 80) * 80, 80, 80);
        drawImage(Y, 0, 0, 1440, 1440, Math.floor((PlayerRealX) / 80) * 80, Math.floor((PlayerRealY + PlayerHeight) / 80) * 80, 80, 80);
        drawImage(G, 0, 0, 1440, 1440, Math.floor((PlayerRealX + PlayerWidth) / 80) * 80, Math.floor((PlayerRealY + PlayerHeight) / 80) * 80, 80, 80);
    }

    // set isBonked
    // if ((Bonkable_Ceiling.includes(loadedLevel[PBGX + PBGY * loadedLevel_Width]) || 
    //     Bonkable_Ceiling.includes(loadedLevel[PBGSideX + PBGY * loadedLevel_Width])) && 
    //     PlayerMoveY <= 0) {
        
    //     isBonked = true;
    // }

    if (!isBonked) {
        // Left Wall : Right Wall
        if (Left_Wall.includes(loadedLevel[PBGX + PBGY * loadedLevel_Width]) && !d) {
            PlayerRealX = PBGX * 80 + 80;
            PlayerMoveX = 0;
            hasTouchedWall = true;
        } else if (Left_Wall.includes(loadedLevel[PBGSideX + PBGY * loadedLevel_Width]) && !a) {
            PlayerRealX = (PBGSideX * 80 - 80) + (80 - PlayerWidth) - 1;
            PlayerMoveX = 0;
            hasTouchedWall = true;
        }
    }

    return hasTouchedWall;
}

function GroundDetection () {
    let PBGX = Math.floor((PlayerRealX) / 80), 
        PBGY = Math.floor((PlayerRealY) / 80), 
        PBGSideX = Math.floor((PlayerRealX + PlayerWidth) / 80), 
        PBGSideY = Math.floor((PlayerRealY + PlayerHeight) / 80);

    // Bonkable_Ceiling : Standable Ground
    if ((Bonkable_Ceiling.includes(loadedLevel[PBGX + PBGY * loadedLevel_Width]) || 
        Bonkable_Ceiling.includes(loadedLevel[PBGSideX + PBGY * loadedLevel_Width])) && 
        PlayerMoveY <= 0) {
        
        PlayerRealY = PBGSideY * 80;
        PlayerMoveY = 0;
        
        isBonked = true;
    } else if ((Standable_Ground.includes(loadedLevel[PBGX + PBGSideY * loadedLevel_Width]) || 
        Standable_Ground.includes(loadedLevel[PBGSideX + PBGSideY * loadedLevel_Width])) && 
        PlayerMoveY >= 0) {
        
        isOnGround = true;
        PlayerMoveY = 0;
        
        isBonked = false;

        PlayerRealY = (PBGSideY * 80 - 80) + (80 - PlayerHeight);
    }
}