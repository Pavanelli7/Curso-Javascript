// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dados = {
    nome: 'Vittor',
    sobrenome: 'Pavanelli',
    estado: 'São paulo',
    empresa: 'Stefanini'
} 


// Crie um método no objeto anterior, que mostre o seu nome completo
dados.exibirNomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`;
}
console.log(dados.exibirNomeCompleto());


// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }
  carro.preco = 2000;

  console.log(carro.preco);
  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
  var cachorro = {
    raca: 'Labrador',
    cor: 'Preto',
    idade: 10,
    bravo: true
  }

  console.table(cachorro)