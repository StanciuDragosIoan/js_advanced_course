Date.prototype.lastYear = function () {
  return this.getFullYear() - 1;
};
console.log(new Date("1900-10-10").lastYear());

Array.prototype.map = function () {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(this[i] + "mapChar");
  }
  return arr;
};
console.log([1, 2, 3].map());
