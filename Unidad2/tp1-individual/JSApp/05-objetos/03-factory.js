function crearUsuario(name, email) {
    return {
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('recuperando contraseña');
        },
    };
}

let user1 = crearUsuario('Nico', 'nico@hola');
let user2 = crearUsuario('Sofi', 'sofia@hola');

console.log(user1, user2);