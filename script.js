"use strict";

const btn = document.querySelector(".btn");
const tip = document.querySelector(".tip");
const total = document.querySelector(".total");
const error = document.querySelector(".error");

const hideError = () => {
  setTimeout(() => {
    error.style.display = "none";
  }, 5000);
};

const calculateTip = () => {
  const bill = document.querySelector(".bill").value;
  const rate = document.querySelector(".rate").value;

  if (bill === "" || rate === "") {
    error.style.display = "block";
    hideError();
  } else if (isNaN(bill)) {
    error.textContent = "Please, enter a number";
    error.style.display = "block";
    hideError();
  } else {
    let tipAmt = bill * rate;
    tipAmt = Math.ceil(tipAmt);
    tip.textContent = `Tip : $${tipAmt}`;

    let totalBill = Number(bill) + tipAmt;
    total.textContent = `Total Bill : $${totalBill}`;
  }
};

btn.addEventListener("click", calculateTip);
