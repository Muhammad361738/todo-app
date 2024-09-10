const btnEle = document.querySelector(".btn");

const inpEle = document.querySelector("#input-field");

const taskEle = document.querySelector(".list-item")

btnEle.addEventListener("click",()=>{
    if(inpEle.value === ""){
        alert("Please Add Your Task First ...")
    }else{
        let listEle = document.createElement("li");
        listEle.textContent = inpEle.value

        taskEle.appendChild(listEle);


        let spanEle = document.createElement("span")
        spanEle.textContent = "\u00d7"
        listEle.appendChild(spanEle)

    }
    inpEle.value = ""
    seveItem()
});

taskEle.addEventListener("click",(d)=>{
    if(d.target.tagName === "LI"){
        d.target.classList.toggle("checked")
        seveItem()
    }else if(d.target.tagName ==="SPAN"){
        d.target.parentElement.remove()
         seveItem()
    }
})


function seveItem (){
    localStorage.setItem("task", taskEle.innerHTML)
}

function getEle(){
    taskEle.innerHTML = localStorage.getItem("task")
}
getEle()