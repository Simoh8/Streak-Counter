const plus = document.getElementById("plus") as HTMLButtonElement
const cancelBtn = document.getElementById("cancelBtn") as HTMLButtonElement
const UI1 = document.querySelector(".UI1") as HTMLDivElement
const UI2 = document.querySelector(".UI2") as HTMLDivElement
const taskName = document.getElementById("taskName") as HTMLInputElement
const taskImage = document.getElementById("taskImage") as HTMLInputElement
const startDate = document.getElementById("startDate") as HTMLInputElement
const addTaskBtn = document.getElementById("addTaskBtn") as HTMLButtonElement
const form = document.getElementById("form") as HTMLFormElement
const pleaseAdd = document.getElementById("pleaseAdd") as HTMLDivElement
const TaskBtn = document.getElementById("TaskBtn") as HTMLButtonElement
const UI1bottom = document.querySelector(".UI1bottom") as HTMLDivElement
const ItemsBlock = document.querySelector(".noTask") as HTMLDivElement
const Items: object[] = []

plus.addEventListener('click', () => {
  UI1.style.display = 'none'
  UI2.style.display = 'block'
})

cancelBtn.addEventListener('click', () => {
  UI1.style.display = 'block'
  UI2.style.display = 'none'
})

TaskBtn.addEventListener('click', () => {
  const taskname = taskName.value
  const taskimage = taskImage.value
  const start = startDate.value

  const singlestreak = {
    taskimage,
    taskname,
    start
  }

  Items.push(singlestreak)
  Items.map((item) => {
    console.log(item);

    let div = document.createElement("div")
    UI1bottom.innerHTML="wdfghjk"
    div.value = item
      UI1bottom.appendChild(item)
    })

})
