let AllBlockedGround = [0x01];

//PBG = PlayerBackGround
function GroundDetection () {                                      
    let PBGX = PlayerRealX / 80, PBGY = PlayerRealY / 80
        PBGSideX = PBGX + PlayerWidth / 80, PBGSideY = PBGY + PlayerHeight / 80;

    drawImage(TestGround, 0, 0, 1440, 1440, Math.floor(PBGX) * 80, Math.floor(PBGY) * 80, 80, 80);
    drawImage(TestGround, 0, 0, 1440, 1440, Math.floor(PBGSideX) * 80, Math.floor(PBGSideY) * 80, 80, 80);
    
    if (AllBlockedGround.includes(loadedLevel[Math.floor(PBGX) + Math.floor(PBGSideY) * 80 + 80]) || 
        AllBlockedGround.includes(loadedLevel[Math.floor(PBGSideX) + Math.floor(PBGSideY) * 80 + 80])) {
        isOnGround = true;
        Debug();
    }
}