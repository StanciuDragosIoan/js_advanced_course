//fix this code

//fill array with 60000 elements
const list = new Array(60000).join("1.1").split(".");

function removeItemsFromList() {
  var item = list.pop();

  if (item) {
    removeItemsFromList();
  }
}

removeItemsFromList();

//sollution 1

// function removeItemsFromList() {
//   while (list.length > 0) {
//     list.pop();
//   }
//   console.log("test123");
// }

// removeItemsFromList();

// sollution 2

// const list = new Array(60000).join("1.1").split(".");

// function removeItemsFromList() {
//   if (list.length > 0) {
//     list.pop();
//   }
// }

// removeItemsFromList();
