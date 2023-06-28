// const imgs = document.querySelectorAll('img');

// imgs.forEach(function(item, index, array) { //item = img da vez // index = posição do item na array 
//     console.log(item.outerHTML, index, array);
// });

// transformando em array

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item) {
    // console.log(item);
})

const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => { //item = img da vez // index = posição do item na array 
    console.log(item, index);
});
