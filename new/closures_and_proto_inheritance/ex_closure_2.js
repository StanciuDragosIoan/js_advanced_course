let view;

function init() {
  let called = 0;

  return function () {
    if (called > 0) {
      view = "awesome view here";
      called += 1;
      console.log("view has been set");
      return;
    }
    return view;
  };
}

const getView = init();
getView();
getView();
getView();

console.log(view);
