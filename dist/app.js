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
const UI1bottom = document.querySelector(".UI1bottom");
const ItemsBlock = document.querySelector(".noTask");
const Items = [];
plus.addEventListener('click', () => {
    UI1.style.display = 'none';
    UI2.style.display = 'block';
});
cancelBtn.addEventListener('click', () => {
    UI1.style.display = 'block';
    UI2.style.display = 'none';
});
TaskBtn.addEventListener('click', () => {
    const taskname = taskName.value;
    const taskimage = taskImage.value;
    const start = startDate.value;
    const singlestreak = {
        taskimage,
        taskname,
        start
    };
    Items.push(singlestreak);
    Items.map((item) => {
        console.log(item);
        let div = document.createElement("div");
        UI1bottom.innerHTML = "wdfghjk";
        div.value = item;
        UI1bottom.appendChild(item);
    });
});
