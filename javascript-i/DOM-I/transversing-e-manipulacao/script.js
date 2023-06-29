const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-descricao');

h1.innerHTML = '<p>Novo Título</>'

// console.log(animaisLista.innerText);

const lista = document.querySelector('.animais-lista');

console.log(lista.children[--lista.children.length]); // último filho
console.log(lista.querySelector('li:last-child'));




// lista.parentElement; // pai
// lista.parentElement.parentElement; // pai do pai
// lista.previousElementSibling; // elemento acima
// lista.nextElementSibling; // elemento abaixo

// lista.children; // HTMLCollection com os filhos
// lista.children[0]; // primeiro filho

