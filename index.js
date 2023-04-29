//initialize the count as 0
let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
  count += 1;
  countEl.textContent = count;
}

// create a function, save(), which logs out the count when it's called
function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}
