const ClickEvent = document.querySelectorAll(".log");

ClickEvent.forEach((log)=>{
  log.addEventListener("click",() =>{
    alert("Hello Friends");
  })
})