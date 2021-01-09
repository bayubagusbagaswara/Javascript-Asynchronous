const worker = new Worker("./web-worker.js");

// communication web worker
worker.addEventListener("message", function (event) {
  console.og(`Receive message from web worker : ${event.data}`);
});

function buttonClick() {
  console.log("Start Log");
  worker.postMessage(20000);
  console.log("Finish Log");
}
