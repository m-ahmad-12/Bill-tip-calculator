let billAmount = document.querySelector(".billAmount");
let customInput = document.querySelector(".percentage");
let noPeople = document.querySelector(".noPeople");
let tipButtons = document.querySelectorAll(".tip button");
let resetBtn = document.querySelector(".resetBtn");

let tipValueEl = document.getElementById("tipValue");
let totalValueEl = document.getElementById("totalValue");
let perPersonValueEl = document.getElementById("perPersonValue");

let bill = 0;
let tip = 0;
let people = 1;

function calculate() {
if (!bill || bill < 0) bill = 0;
if (!people || people <= 0) people = 1;

let tipAmount = bill * (tip / 100);
let total = bill + tipAmount;
let perPerson = total / people;

tipValueEl.textContent = tipAmount.toFixed(2);
totalValueEl.textContent = total.toFixed(2);
perPersonValueEl.textContent = perPerson.toFixed(2);
}

billAmount.addEventListener("input", function () {
bill = Number(billAmount.value);
calculate();
});

noPeople.addEventListener("input", function () {
people = Number(noPeople.value);
calculate();
});

customInput.addEventListener("input", function () {
tipButtons.forEach(b => b.classList.remove("active"));
tip = Number(customInput.value);
calculate();
});

tipButtons.forEach(function (btn) {
btn.addEventListener("click", function () {
tipButtons.forEach(b => b.classList.remove("active"));
btn.classList.add("active");
tip = Number(btn.textContent.replace("%", ""));
customInput.value = "";
calculate();
});
});

resetBtn.addEventListener("click", function () {
bill = 0;
tip = 0;
people = 1;

billAmount.value = "";
customInput.value = "";
noPeople.value = "";

tipButtons.forEach(b => b.classList.remove("active"));

tipValueEl.textContent = "0.00";
totalValueEl.textContent = "0.00";
perPersonValueEl.textContent = "0.00";
});
calculate();
