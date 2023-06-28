const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
menu.classList.remove('azul');
menu.classList.toggle('azul'); // toggle = remove se tem e adiciona se não tem
menu.classList.toggle('azul'); // toggle = remove se tem e adiciona se não tem

if (menu.classList.contains('azul')) {
  console.log('Possui azul');
} else {
  menu.classList.add('azul')
}

console.log(menu.className);

const animais = document.querySelector('.animais');

console.log(animais.attributes[1]);

const img = document.querySelector('img');

console.log(img.getAttribute('src'));

img.setAttribute('alt', 'É uma raposa'); // nome do atributo e valor

console.log(img.hasAttribute('alt')); // verifica se existe o atributo

// img.removeAttribute('alt') // remove os atributos 


// animais.className; // string com o nome das classes
// animais.className = 'azul'; // substitui completamente a string
// animais.className += ' vermelho'; // adiciona vermelho à string

// animais.attributes = 'class="ativo"'; // não funciona, read-only
