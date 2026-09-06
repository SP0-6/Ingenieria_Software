let user = {
    id: 1,
    name: 'Chanchito feliz',
    age: 16,
};

for (let prop in user) {
    console.log(prop, user[prop]);
}

let animales = ['Chanchito feliz', 'Dragon', 'Canguro'];
for (let indice in animales) {
    console.log(indice, animales[indice]);
}