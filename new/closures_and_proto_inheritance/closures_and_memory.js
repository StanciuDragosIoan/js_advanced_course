//closures are Memory Efficient
function heavyDuty(idx) {
  const bigArr = new Array(8000).fill(":)");
  console.log("created");
  return bigArr[idx];
}

heavyDuty(2);
heavyDuty(200);
heavyDuty(678);

function heavyDuty2() {
  const bigArr = new Array(8000).fill(":)");
  console.log("created again");
  return function () {
    return function (idx) {
      return bigArr[idx];
    };
  };
}

const getHeavyDuty = heavyDuty2();

getHeavyDuty(2);
getHeavyDuty(200);
getHeavyDuty(300);

//allow for encapsulation

const makeNuclearButton = () => {
  let timeWithoutDestuction = 0;
  const passTime = () => timeWithoutDestuction++;
  const totalPeaceTime = () => timeWithoutDestuction;
  const launch = () => {
    timeWithoutDestuction = -1;
    return "boom";
  };
  setInterval(passTime, 1000);

  return {
    launch,
    totalPeaceTime,
  };
};

const ohno = makeNuclearButton();

console.log(ohno.totalPeaceTime());
