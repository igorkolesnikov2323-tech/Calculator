let a = "";

const buttons = document.querySelectorAll(".grid__item");
const input = document.querySelector("#value");
const qual = ["="];
const backspace = ["<"];
const clear = ["AC"];
const procent = ["%"];
const operator = ["-", "+", "/", "*"];
const opposite = ["+/-"];
const his = document.querySelector(".history");
input.value = "0";

buttons.forEach((btn) => {
btn.addEventListener("click", function ddd(event) {
    let t = event.target.textContent;
    if (
    !qual.includes(t) &&
    !procent.includes(t) &&
    !opposite.includes(t) &&
    !backspace.includes(t)
    ) {
    input.value = a += t;
    }
    if (qual.includes(t)) {
      // Button =
    input.value = eval(a);
    a = eval(a);
    let hystoryElement = document.createElement("h1");
    hystoryElement.innerText = input.value;
    his.append(hystoryElement);
    hystoryElement.className = "history__item";
    }
    if (clear.includes(t)) {
      //Button AC
    input.value = "0";
    a = "";
    }
    /* if(procent.includes(t) && !operator.some(op => a.includes(op))){ //Button %
            a += '/100'
        } */
    if (procent.includes(t)) {
    try {
        let result = eval(a) / 100;
        a = result.toString();
        input.value = a;
    } catch {
        input.value = "Error";
        a = "";
    }
    }
    if(procent.includes(t) && !operator.some(op => a.includes(op))){
        a = -a;
        input.value = -input.value;
        }
        if (backspace.includes(t)) {
        a = a.slice(0, -1)
        input.value = a || '0'
    }
});
});

his.addEventListener("click", function (event) {
  let t = event.target;
  let tContent = event.target.textContent;
  if (t.classList.contains("history__item")) {
    input.value = tContent;
    a = tContent;
  }
});

//let tokens = a.match(/\d+|[+\-*/]/g)
