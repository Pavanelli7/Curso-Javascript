const listaAnimais = document.querySelector('.animais-lista');
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);
console.log(listaAnimais.scrollHeight);

const primeiroah2 = document.querySelector('h2');

const rect = primeiroah2.getBoundingClientRect();
console.log(rect);
console.log(primeiroah2.offsetLeft);

console.log(
  window.innerWidth
);