"use script"

window.onload= function(){
  let task = document.querySelector(".box2")
  let list = document.querySelector(".line")
  let addTask = document.querySelector(".btn")

  addTask.addEventListener("click", ()=>{
    list.insertAdjacentHTML(`afterbegin`,
    `li
    
    <h4>${task.value}</h4>
    </li>`);
    task.value = ""
    // let deleteTask = document.querySelectorAll(".deleteTask");
    // deleteTask.forEach(del =>{
    //   <i class="fas fa-trash-alt">deleteTask</i> 
    //   del.addEventListener("click",() =>{
    //     del.parentElement.remove();
    //   })
    // })
  })
}













// document.querySelector("#push").onclick = function(){
//   if(document.querySelector('#newtask input').value.length == 0){
//     alert("Please Enter A Task")
//   } else{
//     document.querySelector('#task').innerHTML= `
//     <div class = "task">
//     <span id="taskname">
//     ${document.querySelector('#newtask input').value}

//   </span>

//   <button class = "delete">
//   <i i class = "far"></i>
//   </button>
//     `
//   }
// }