const wrapper = document.querySelector('.wrapper');
const registroLink = document.querySelector('.signup-link');
const inicioLink = document.querySelector('.login-link');

registroLink.addEventListener('click', function(e) {
    e.preventDefault();
    wrapper.classList.remove('active');
});

inicioLink.addEventListener('click', function(e) {
    e.preventDefault();
    wrapper.classList.add('active');
});