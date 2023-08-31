document.write('<script src="Load/Value.js"></script>');

document.write('<script src="Load/EventListener.js"></script>');
loadEventListener();

document.write('<script src="Load/Image.js"></script>');
loadImage();

document.write('<script src="Load/Audio.js"></script>');
loadAudio();

document.write('<script src="Load/runCode.js"></script>');

runCodeWithFPS();

function runCodeWithFPS () {
    let fps = 60;
    let now;
    let then = Date.now();
    let interval = 1000 / fps;
    let delta;

    let conter = 0;
    let savedTime = Date.now();
  
    function setFPS() {
        requestAnimationFrame(setFPS);
     
        now = Date.now();
        delta = now - then;
     
        if (delta > interval) {
            then  =  now  -  ( delta  %  interval ) ;

            runCode();
        }
    }
 
    setFPS();
}

        