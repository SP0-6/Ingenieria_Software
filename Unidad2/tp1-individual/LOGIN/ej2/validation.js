const $submit=document.getElementById("submit"),
    $email=document.getElementById("email-input"),
    $password=document.getElementById("password-input"),
    $repeat=document.getElementById("password-repeat-input"),
    $firstname=document.getElementById("firstname-input"),
    $visible=document.getElementById("visible"),
    $msjError=document.getElementById("msj-error");

document.addEventListener("change", (ev)=>{
    if (ev.target === $visible){
        if($visible.checked === false) {
            $password.type="password";
            $repeat.type="password";
        }
        else {
            $password.type="text";
            $repeat.type="text";
        }
    }
})

function createInput(campo, msj){
    obj={
        campo,
        msj
    }
    return obj;
}

document.addEventListener("click", (ev)=>{

    if (ev.target === $submit){
        

        email=createInput($email, "Email requerido");
        password=createInput($password, "Contraseña requerida");

        if($firstname){
            nombre=createInput($firstname, "Nombre requerido");
            repeat=createInput($repeat, "Debe repetir su contraseña");

            errors=getErrors([email, password, nombre, repeat]);

            if(errors.length===0){
                errors=validatePass($password.value, $repeat.value);
            }
            
        }else{
            errors=getErrors([email, password]);
        }
        
        if(errors.length>0){
            ev.preventDefault();
            $msjError.innerText=errors.join(". ");
        }else{
            ev.preventDefault();
            window.location.href="index.html";}
        
    }   
})

function validatePass(pass, repeat){
    let errors=[];
    if (pass.length < 8){
        errors.push("La contraseña debe tener al menos 8 caracteres");
        $password.parentElement.classList.add('incorrect');
    }
    else if (pass!==repeat){
        errors.push("La contraseña debe coincidir con su repetición");
        $password.parentElement.classList.add('incorrect');
        $repeat.parentElement.classList.add('incorrect');
    }
    return errors;
}

function getErrors(arr){
    let errors=[];
    
    for(i of arr){
        if (i.campo.value==="" || i.campo.value == null){
            errors.push(i.msj);
            i.campo.parentElement.classList.add('incorrect');
        }
    }

    return errors;
}

const allInputs=[$firstname, $email, $password, $repeat];

allInputs.forEach(input=>{
    input.addEventListener("input", ()=>{
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
            $msjError.innerText=""
        }
    })
})

