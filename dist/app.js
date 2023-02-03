"use strict";
const plus = document.getElementById("plus");
const cancelBtn = document.getElementById("cancelBtn");
const UI1 = document.querySelector(".UI1");
const UI2 = document.querySelector(".UI2");
const taskName = document.getElementById("taskName");
const taskImage = document.getElementById("taskImage");
const startDate = document.getElementById("startDate");
const addTaskBtn = document.getElementById("addTaskBtn");
const form = document.getElementById("form");
const pleaseAdd = document.getElementById("pleaseAdd");
const TaskBtn = document.getElementById("TaskBtn");
plus.addEventListener('click', () => {
    UI1.style.display = 'none';
    UI2.style.display = 'block';
});
cancelBtn.addEventListener('click', () => {
    UI1.style.display = 'block';
    UI2.style.display = 'none';
});
const showMessage = (message) => {
    const messageDiv = document.createElement("div");
    messageDiv.innerText = message;
    // messageDiv.style.backgroundColor = "blue";
    // messageDiv.style.color = "black";
    // messageDiv.style.padding = "10px";
    // messageDiv.style.position = "fixed";
    // messageDiv.style.bottom = "10px";
    // messageDiv.style.right = "10px";
    // messageDiv.style.zIndex = "9999";
    pleaseAdd.appendChild(messageDiv);
    setTimeout(() => {
        pleaseAdd.removeChild(messageDiv);
    }, 5000);
    //console.log(pleaseAdd);
};
TaskBtn.addEventListener("click", function () {
    // console.log("Button clicked.");
    // Example usage:
    if (taskName.value === "") {
        // console.log("hh");
        showMessage("Validation failed. Please check your inputs and try again.");
    }
});
