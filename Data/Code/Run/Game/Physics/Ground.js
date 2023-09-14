//PBG = PlayerBackGround
function GroundDetection () {                                      
    let PBGX = Math.floor(PlayerRealX / 80), PBGY = Math.floor(PlayerRealY / 80),
        PBGSideX = Math.floor((PlayerRealX + PlayerWidth) / 80), PBGSideY = Math.floor((PlayerRealY + PlayerHeight) / 80);

    if (DebugMod) {
        drawImage(TestSpr, 0, 0, 1440, 1440, PBGX * 80, PBGY * 80, 80, 80);
        drawImage(TestSpr, 0, 0, 1440, 1440, PBGSideX * 80, PBGY * 80, 80, 80);
    }
    
    // Left Wall
    if (Left_Wall.includes(loadedLevel[PBGX + PBGSideY * loadedLevel_Width]) || 
        Left_Wall.includes(loadedLevel[PBGSideX + PBGSideY * loadedLevel_Width])) {
        PlayerMoveX = 0;
        isOnGround = true;
    }

    // Right Wall
    if (Right_Wall.includes(loadedLevel[PBGX + PBGSideY * loadedLevel_Width]) || 
        Right_Wall.includes(loadedLevel[PBGSideX + PBGSideY * loadedLevel_Width])) {
        isOnGround = true;

        PlayerRealY = (PBGSideY * 80 - 80) + (80 - PlayerHeight);
    }

    // Bonkable_Ceiling
    if ((Bonkable_Ceiling.includes(loadedLevel[PBGX + PBGY * loadedLevel_Width]) || 
        Bonkable_Ceiling.includes(loadedLevel[PBGSideX + PBGY * loadedLevel_Width])) && 
        PlayerMoveY < 0) {
        PlayerRealY = PBGSideY * 80;
        isBonked = true;
    }

    // Standable Ground
    if ((Standable_Ground.includes(loadedLevel[PBGX + PBGSideY * loadedLevel_Width]) || 
        Standable_Ground.includes(loadedLevel[PBGSideX + PBGSideY * loadedLevel_Width]) && 
        PlayerMoveY > 0)) {
        isOnGround = true;

        isBonked = false;

        PlayerRealY = (PBGSideY * 80 - 80) + (80 - PlayerHeight);
    }
}