function showLog(total) {
  for (let i = 0; i < total; i++) {
    console.log(i);
  }
}

// communication web worker
addEventListener("message", function (event) {
  const total = event.data;
  showLog(total);
  postMessage("Done");
});
