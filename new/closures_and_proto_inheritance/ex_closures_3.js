const array = [1, 2, 3, 4];

for (var i = 0; i < array.length; i++) {
  console.log(i);
  let t = i;
  setTimeout(() => {
    console.log("I am at indes" + t);
  }, 1);
}

// let logs the good value (as it is block lvl scope)
for (let i = 0; i < array.length; i++) {
  setTimeout(() => {
    console.log("I am at indes" + i);
  }, 1);
}

for (let i = 0; i < array.length; i++) {
  (function (i) {
    setTimeout(() => {
      console.log("I am at indes" + i);
    }, 1);
  });
}
