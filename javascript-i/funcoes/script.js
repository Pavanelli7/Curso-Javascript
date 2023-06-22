// Crie uma função para verificar se um valor é Truthy
function verificaCpf(cpf) {
    if (cpf.length === 11) {
        return true;
    } else {
        return false
    }
}
console.log(verificaCpf("61690527814"));


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(tamanho) {
    return tamanho * 4;
}
console.log(perimetroQuadrado(2));


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto('Vittor', 'Pavanelli'));


// Crie uma função que verifica se um número é par
function verificaPar(numero) {
    if (numero % 2 === 0) {
        return `O número ${numero} é par`
    } else {
        return `O número ${numero} é impar`
    }
}
console.log(verificaPar(3));


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(texto) {
    return typeof texto;
}
console.log(tipoDado('Vittor'));


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function () {
   console.log('Vittor Pavanelli'); 
});


// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }

  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
console.log(precisoVisitar(20));
console.log(jaVisitei(20));