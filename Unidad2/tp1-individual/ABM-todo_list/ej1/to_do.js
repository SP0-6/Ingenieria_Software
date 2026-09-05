const $input = document.getElementById("input-box"),
    $list=document.getElementById("list-container");

function addTarea(){
    if($input.value===''){
        alert("Debe darle un nombre a la tarea")
    }else if(validarTarea($input.value)){
        let li=document.createElement("li");
        li.innerHTML=$input.value;

        $list.appendChild(li);
        $input.value="";

        let span=document.createElement("span");
        span.innerHTML="x";
        li.appendChild(span)

        save();
    }else{
        alert("Esa tarea ya existe");
    }
}

$list.addEventListener("click", function(e){
    if (e.target.tagName==="LI") {
        e.target.classList.toggle("checked");
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
    save();
}, false);

function validarTarea(valor){
    let tareas = $list.getElementsByTagName("li");

    for(let tarea of tareas){
        let nombreTarea=tarea.firstChild.textContent;

        if(nombreTarea === valor){
            
            return false;
        }
    }

    return true;
}

function save(){
    localStorage.setItem("data", $list.innerHTML);
}

function show(){
    $list.innerHTML=localStorage.getItem("data")
}
show();