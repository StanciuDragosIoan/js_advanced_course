/*

function weird() {
  height = 50;
  return height;
}

weird(); //global env creates height var for us
// if I use 'use strict' this does not happen anymore
*/

var heyhey = function doodle() {
  doodle(); // works here
  console.log("heyhey");
};

heyhey(); //works
doodle(); //throws error
