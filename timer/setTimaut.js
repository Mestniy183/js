function pritNumbers(from, to) {
  let timerId = setInterval(() => {
    console.log(from);
    if (from === to) {
      clearInterval(timerId);
      console.log("конец");
    }
    from++;
  }, 1000);
}
pritNumbers(2, 7);

function pritNumbers(from, to) {
  setTimeout(function go() {
    console.log(from);
    if (from < to) {
      setTimeout(go, 1000);
    }
    from++;
  });
}
pritNumbers(2, 7);
