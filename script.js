const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

const btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
    if(inputBox.value===''){
        alert("You must write something !");
    }
    else{
        const li=document.createElement("li");
        li.innerText=inputBox.value;
        listContainer.appendChild(li);
        const span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
});

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI")
    {
        e.target.classList.toogle("checked");
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
    }
},false);