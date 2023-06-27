// Retorne no console todas as imagens do site
const todasImagens = document.querySelectorAll('img');
console.log(todasImagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const apenasImagem = document.querySelectorAll('img[src^="img/imagem"]');
console.log(apenasImagem);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroh2 = document.querySelector('.animais-descricao h2');
console.log(primeiroh2);

// Selecione o último p do site
const ultimoP = document.querySelectorAll('p');
console.log(ultimoP[--ultimoP.length].innerText); 
















































// Retorne no console todas as imagens do site
// const allImg = document.querySelectorAll('img');
// console.log(allImg);

// // Retorne no console apenas as imagens que começaram com a palavra imagem
// const apenasImagem = document.querySelectorAll('img[src^="img/imagem"]'); 
// console.log(apenasImagem);

// // Selecione todos os links internos (onde o href começa com #)
// const allLinksInternos = document.querySelectorAll('[href^="#"]'); 
// console.log(allLinksInternos);

// // Selecione o primeiro h2 dentro de .animais-descricao
// const primeiroh2 = document.querySelector('.animais-descricao h2');
// console.log(primeiroh2);
// // Selecione o último p do site

