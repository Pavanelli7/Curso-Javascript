var btn = document.querySelector('.btn');

console.log(btn.classList.add('azul'));
btn.innerText;
btn.addEventListener('click', function(){
  console.log('Clicou');
});

// nomeie 3 propriedades ou métodos de strings
var texto = 'Texto';
console.log(texto.length);
console.log(texto.toLowerCase());
console.log(texto.toUpperCase());
console.log(texto.replace('te', 'tado'));


// nomeie 5 propriedades ou métodos de elementos do DOM
// var btn = document.querySelector('.btn');
            // innerHTML
            // id
            // addEventListener
            //appendChild
            // outerHTML


// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
let clipBoard1 = new ClipboardJS('#btnCopy'); //olhar código no index.html