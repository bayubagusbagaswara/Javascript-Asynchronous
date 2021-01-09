const worker = new Worker("web-worker.js");

function showLog(total) {
  for (let i = 0; i < total; i++) {
    console.log(i);
  }
}
function buttonClick() {
  console.log("Start Log");
  showLog(20000); // button akan freeze sebelum 20000 selesai
  console.log("Finish Log");
}
