document.write('<script src="Load/Value.js"></script>');
document.write('<script src="Load/EventListener.js"></script>');
document.write('<script src="Load/Image.js"></script>');
document.write('<script src="Load/Audio.js"></script>');
document.write('<script src="runCode.js"></script>');

function runCodeWithFPS () {  
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

runCodeWithFPS();