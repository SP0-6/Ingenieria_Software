let email = 'sofia@parra.com';
let nombre = 'Sofia';
let direccion = {
    calle: 'Super Calle',
    numero: 15,
};

let user = {
    email,
    nombre,
    direccion,
    activo: true,
    recuperarClave: function () {
        console.log('Recuperando contraseña');
    },
};