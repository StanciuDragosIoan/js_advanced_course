
function a() {

}
// DO NOT INITIALIZE FUNCTION IN LOOP (we onjly call it)
for (let i = 0; i <5 ; i ++) {
    // function a() {

    // }
    a();
}

//default params
function a(param = 2) {
    return param;
}