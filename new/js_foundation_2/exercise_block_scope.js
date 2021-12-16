function loop() {
    //global var
    // for(var i =0; i<5; i++){
    //     console.log(i);
    // }
    // console.log('final', i); //works

    //block lvl let
    for(let i =0; i<5; i++){
        console.log(i);
        // return i;
    }
    console.log('final', i); //throws err
}

loop();