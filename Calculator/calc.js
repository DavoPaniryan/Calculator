let a = ""; // first number
let b = ""; // second number;
let sign = ""; // *
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "X", "/", "%", "+/-"];

const out = document.querySelector(".calc-screen");

function clear() {
  a = "";
  b = "";
  sign = "";
  finish = false;
  out.textContent = 0;
}

document.querySelector(".ac").onclick = clear;

document.querySelector(".buttons"),
  (onclick = (event) => {
    if (!event.target.classList.contains("btn")) return;

    if (event.target.classList.contains("ac")) return;

    out.textContent = "";

    const key = event.target.textContent;

    if (digit.includes(key)) {
      if (b === "" && sign == "") {
        a += key;
        out.textContent = a;
        console.log(a);
      } else if (a !== "" && b !== "" && finish) {
        b = key;
        finish = false;
        out.textContent = b;
      } else {
        b += key;
        out.textContent = b;
        console.log(a, b, sign);
      }
      return;
    }

    if (action.includes(key)) {
      sign = key;
      out.textContent = sign;
      console.log(a, b, sign);
    }

    if (key == "=") {
      if (b == "") {
        b = a;
      }
      switch (sign) {
        case "+":
          a = +a + +b;
          break;
        case "-":
          a = a - b;
          break;
        case "X":
          a = a * b;
          break;
        case "/":
          if (b == 0) {
            out.textContent = "Error";
            b = "";
            a = "";
            sign = "";
            return;
          }
          a = a / b;
          break;
        case "%":
          a = (a * b) / 100;
          break;
      }
      finish = true;
      out.textContent = a;
    }
  });
