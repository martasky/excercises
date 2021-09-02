"use strict";

let maxNumberOfIterations;
let iterator;
initLoop();

function initLoop() {
  maxNumberOfIterations = 11;
  iterator = 0;
  loop();
}

function loop() {
  console.log("loop", iterator);
  iterator++;
  if (iterator < maxNumberOfIterations) {
    setTimeout(loop, 500);
  }
}
