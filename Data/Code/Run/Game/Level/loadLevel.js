function LoadLevel (Theme, Level_Number) {
    if (Theme == "Main") {
        if (Level_Number == 1) {
            loadedLevel_Width = Main_1_Width;
            loadedLevel_Height = Main_1_Height;

            loadedLevel = [...Main_1];
            loadedLevel = [...Main_1_Text];
        }

        if (Level_Number == 2) {
            loadedLevel_Width = Main_2_Width;
            loadedLevel_Height = Main_2_Height;

            loadedLevel = [...Main_2];
            loadedLevel = [...Main_2_Text];
        }
    }
}