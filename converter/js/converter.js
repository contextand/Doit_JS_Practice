let sUnit = document.querySelector("#s-unit");
let tUnit = document.querySelector("#t-unit");
let cToF = true;

let source = document.querySelector("#s-value");
let target = document.querySelector("#t-value");

function exUnit() {
  source.value = "";
  target.value = "";

  if (cToF) {
    cToF = false;
    sUnit.innerHTML = "화씨";
    tUnit.innerHTML = "도씨";
  } else {
    cToF = true;
    sUnit.innerHTML = "도씨";
    tUnit.innerHTML = "화씨";
  }
}

function converter() {
  console.log(122342);
  if (cToF) {
    target.value = (source.value * 1.8 + 32).toFixed(2);
  } else {
    target.value = ((source.value - 32) / 1.8).toFixed(2);
  }
}
