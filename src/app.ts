const plus = document.getElementById("plus") as HTMLAnchorElement
const cancelBtn = document.getElementById("cancelBtn") as HTMLElement
const UI1 = document.querySelector(".UI1") as HTMLAreaElement
const UI2 = document.querySelector(".UI2") as HTMLAnchorElement

plus.addEventListener('click',()=>{
    UI1.style.display = 'none'
    UI2.style.display = 'block'
})

cancelBtn.addEventListener('click',()=>{
    UI1.style.display = 'block'
    UI2.style.display = 'none'
})