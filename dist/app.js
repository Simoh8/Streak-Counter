"use strict";
const plus = document.getElementById("plus");
const cancelBtn = document.getElementById("cancelBtn");
const UI1 = document.querySelector(".UI1");
const UI2 = document.querySelector(".UI2");
plus.addEventListener('click', () => {
    UI1.style.display = 'none';
    UI2.style.display = 'block';
});
cancelBtn.addEventListener('click', () => {
    UI1.style.display = 'block';
    UI2.style.display = 'none';
});
