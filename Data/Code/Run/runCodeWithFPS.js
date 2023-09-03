<<<<<<< HEAD
document.write('<script src="Data/Code/Run/runCode.js"></script>');

=======
>>>>>>> 94529b0b4ca41d8dcde456b9f561826e91408deb
function runCodeWithFPS () {  
    requestAnimationFrame(runCodeWithFPS);
    
    now = Date.now();
    delta = now - then;
    
    if (delta > interval) {
        then  =  now  -  ( delta  %  interval ) ;

        runCode();
    }
}

runCodeWithFPS();