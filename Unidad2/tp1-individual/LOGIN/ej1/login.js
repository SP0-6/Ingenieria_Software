const $submit=document.getElementById("submit"),
    $password=document.getElementById("password"),
    $username=document.getElementById("username"),
    $visible=document.getElementById("visible");

document.addEventListener("change", (ev)=>{
    if (ev.target === $visible){
        if($visible.checked === false) $password.type="password";
        else $password.type="text";
    }
})

document.addEventListener("click", (ev)=>{
    if (ev.target === $submit){
        if($password.value !== "" && $username.value!== "" ){
            ev.preventDefault();
            window.location.href="index.html";
        }
    }
})