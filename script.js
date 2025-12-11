let display = document.querySelector("#display");
let num_btn = document.querySelectorAll(".num");
let opr_btn = document.querySelectorAll(".opr");
let operation = document.querySelector("#operation");
let ac_btn = document.querySelector("#ac");
let del_btn = document.querySelector("#del");
let equal_btn = document.querySelector("#equals");

let first_num = "";
let second_num = "";

opr_btn.forEach((b) => {
    b.disabled = true;
});

num_btn.forEach((button) => {
    button.addEventListener("click", () => {
        display.value += button.innerText;
        opr_btn.forEach((b) => {
            b.disabled = false;
        });
    }); 
});

opr_btn.forEach((btn) => {
    btn.addEventListener("click", () => {
        first_num = display.value;
        operation.value = btn.innerText;
        display.value = "";
    });
});

ac_btn.addEventListener("click", () => {
    display.value = "";
    operation.value = "";
    first_num = "";
    second_num = "";
    opr_btn.forEach((b) => {
        b.disabled = true;
    });
});

del_btn.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});

equal_btn.addEventListener("click", () => {
    let op = operation.value; // Store the operator before overwriting it
    operation.value = "=";
    second_num = display.value;

    if(op === "+"){
        display.value = parseFloat(first_num) + parseFloat(second_num);
    }
    else if(op === "-"){
        display.value = parseFloat(first_num) - parseFloat(second_num);
    }
    else if(op === "*" || op === "x" || op === "X"){
        display.value = parseFloat(first_num) * parseFloat(second_num);
    }
    else {
        display.value = parseFloat(first_num) / parseFloat(second_num);
    }
    // Reset first_num so the next calculation starts fresh or allows chaining
    first_num = ""; 
});
