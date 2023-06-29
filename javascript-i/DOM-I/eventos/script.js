// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');
// Meu código

function handleLink(event) {
  event.preventDefault();
  event.currentTarget.classList.toggle('ativo')
}

linksInternos.forEach(link => {
  link.addEventListener('click', handleLink)
});

/*
    // Código do professor


  function handleLink(event) {
    event.preventDefault();
    linksInternos.forEach(link => {
      link.classList.remove('ativo');
    });
    event.currentTarget.classList.add('ativo')  
  }

  linksInternos.forEach(link => {
    link.addEventListener('click', handleLink)
  });
*/


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll('body *');

function handleElemento(event) {
  console.log(event.currentTarget);
}

todosElementos.forEach(elemento => {
  elemento.addEventListener('click', handleElemento)
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

/*
function handleElemento(event) {
  event.currentTarget.remove();
}
*/

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 


function handleKeyboard(event) {
  const elementosTexto = document.querySelectorAll('*');

  elementosTexto.forEach((elemento) => {
    const tamanhoAtual = parseFloat(window.getComputedStyle(elemento).fontSize);

    if (event.key === '+') {
      const novoTamanho = tamanhoAtual * 1.05; 
      elemento.style.fontSize = novoTamanho + 'px';
    } else if (event.key === '-') {
      const novoTamanho = tamanhoAtual * 0.95;
      elemento.style.fontSize = novoTamanho + 'px';
    }  else if (event.shiftKey && event.key === 'Enter') {
      elemento.style.fontSize = ''; 
    }
  });
}

window.addEventListener('keydown', handleKeyboard);