conter++;
            
if (conter >= 60) {
    console.log(Date.now() - savedTime);

    savedTime = Date.now();

    conter = 0;
}