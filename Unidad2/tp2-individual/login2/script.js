const wrapper=document.querySelector('.wrapper'),
    btnIn=document.getElementById('btn-in'),
    btnUp=document.getElementById('btn-up');

    btnIn.addEventListener("click", ()=>{
        wrapper.classList.remove('toggle');
    });

    btnUp.addEventListener("click", ()=>{
        wrapper.classList.add('toggle');
    });