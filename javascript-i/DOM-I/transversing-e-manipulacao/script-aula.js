// const h1 = document.querySelector('h1');
// const animaisLista = document.querySelector('.animais-descricao');

// h1.innerHTML = '<p>Novo Título</>'

// // console.log(animaisLista.innerText);

// const lista = document.querySelector('.animais-lista');

// console.log(lista.children[--lista.children.length]); // último filho
// console.log(lista.querySelector('li:last-child'));

// const animais = document.querySelector('.animais');
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');

// const mapa = document.querySelector('.mapa');

// console.log(titulo);

// contato.replaceChild(mapa, titulo);

// // contato.insertBefore(animais, mapa);

// const novoh1 = document.createElement('h1');
// novoh1.innerText = 'Novo Título';
// novoh1.classList.add('titulo');

// mapa.appendChild(novoh1);

// console.log(novoh1);

const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneH1 = h1.cloneNode(true);


cloneH1.classList.add('azul');
faq.appendChild(cloneH1);

