function LoadLevel (Theme, Level_Number) {
    if (Theme == "Main") {
        if (Level_Number == 1) {
            loadedLevel_Width = Main_1_Width;
            loadedLevel_Height = Main_1_Height;

            loadedLevel = [...Main_1];
        }

        if (Level_Number == 2) {
            loadedLevel_Width = Main_2_Width;
            loadedLevel_Height = Main_2_Height;

            loadedLevel = [...Main_2];
        }
    }
}