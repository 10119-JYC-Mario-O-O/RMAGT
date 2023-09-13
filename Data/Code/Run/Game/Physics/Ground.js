let AllBlockedGround = [0x01];

//PBG = PlayerBackGround
function GroundDetection () {                                      
    let PBGX = Math.floor(PlayerRealX / 80), PBGY = Math.floor(PlayerRealY / 80),
        PBGSideX = Math.floor(PBGX + PlayerWidth / 80), PBGSideY = Math.floor(PBGY + PlayerHeight / 80);

        // drawImage(TestGround, 0, 0, 1440, 1440, Math.PBGX * 80, Math.PBGY * 80, 80, 80);
        // drawImage(TestGround, 0, 0, 1440, 1440, Math.PBGSideX * 80, Math.PBGSideY * 80, 80, 80);

        drawImage(TestSpr, 0, 0, 1440, 1440, Math.PBGX * 80, Math.PBGSideY * 80, 80, 80);
        drawImage(TestSpr, 0, 0, 1440, 1440, Math.PBGSideX * 80, Math.PBGSideY * 80, 80, 80);
    
    if (AllBlockedGround.includes(loadedLevel[Math.PBGX + Math.PBGSideY * loadedLevel_Width]) || 
        AllBlockedGround.includes(loadedLevel[Math.PBGSideX + Math.PBGSideY * loadedLevel_Width])) {
        isOnGround = true;

        PlayerRealY = Math.PBGSideY * 80 - 80;
    }
}