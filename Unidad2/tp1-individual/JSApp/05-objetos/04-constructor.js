function Usuario() {
    this.id = 1;
    this.recuperarClave = function () { 
        console.log('recuperando contraseña');
    }
}

let usuario = new Usuario();

console.log(usuario);