const plus = document.getElementById("plus") as HTMLElement
const cancelBtn = document.getElementById("cancelBtn") as HTMLElement
const UI1 = document.querySelector(".UI1") as HTMLElement
const UI2 = document.querySelector(".UI2") as HTMLElement
const taskName = document.getElementById("taskName") as HTMLInputElement
const taskImage = document.getElementById("taskImage") as HTMLInputElement
const startDate = document.getElementById("startDate") as HTMLElement
const addTaskBtn = document.getElementById("addTaskBtn") as HTMLButtonElement
const form = document.getElementById("form") as HTMLElement
const pleaseAdd = document.getElementById("pleaseAdd") as HTMLDivElement
const TaskBtn = document.getElementById("TaskBtn") as HTMLAnchorElement


plus.addEventListener('click',()=>{
    UI1.style.display = 'none'
    UI2.style.display = 'block'
})

cancelBtn.addEventListener('click',()=>{
    UI1.style.display = 'block'
    UI2.style.display = 'none'
})

const showMessage = (message: string) => {
    const messageDiv = document.createElement("div") as HTMLDivElement;
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
  
  
  
 

TaskBtn.addEventListener("click", function() {
 // console.log("Button clicked.");
 // Example usage:

 if (
    taskName.value && taskImage.value === ""
    
) {
   // console.log("hh");
    
showMessage("Validation failed. Please check your inputs and try again.");
}

});
