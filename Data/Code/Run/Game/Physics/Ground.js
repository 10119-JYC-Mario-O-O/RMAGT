let AllBlockedGround = [0x01];

//PBG = PlayerBackGround
function GroundDetection () {                                      
    let PBGX = Math.floor(PlayerRealX / 80), PBGY = Math.floor(PlayerRealY / 80),
        PBGSideX = Math.floor((PlayerRealX + PlayerWidth) / 80), PBGSideY = Math.floor((PlayerRealY + PlayerHeight) / 80);

        // drawImage(TestGround, 0, 0, 1440, 1440, PBGX * 80, PBGY * 80, 80, 80);
        // drawImage(TestGround, 0, 0, 1440, 1440, PBGSideX * 80, PBGSideY * 80, 80, 80);
        if (DebugMod) {
            drawImage(TestSpr, 0, 0, 1440, 1440, PBGX * 80, PBGSideY * 80, 80, 80);
            drawImage(TestSpr, 0, 0, 1440, 1440, PBGSideX * 80, PBGSideY * 80, 80, 80);
        }
    
    if (AllBlockedGround.includes(loadedLevel[PBGX + PBGSideY * loadedLevel_Width]) || 
        AllBlockedGround.includes(loadedLevel[PBGSideX + PBGSideY * loadedLevel_Width])) {
        isOnGround = true;

        PlayerRealY = (PBGSideY * 80 - 80) + (80 - PlayerHeight);
    }
}