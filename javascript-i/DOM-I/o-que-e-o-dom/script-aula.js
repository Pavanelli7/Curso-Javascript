console.log(window.location.href);

const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;


function callbackh1 (){
    console.log(`Clicou em ${titulo.innerText}`);
}

titulo.addEventListener('click', callbackh1);