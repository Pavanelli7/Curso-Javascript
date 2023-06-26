var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];


console.log(videoGames[0]);

// videoGames.pop(); // Remove o último e retorna ele
// videoGames.push('360'); // Adiciona ao final da array
// videoGames.length; // Retorna o número de elementos

for (var numero = 1; numero <= 4; numero++) {
  console.log(numero);
}

var i = 0;
while (i <= 10) {
  console.log(i);
  i = i + 5;
}

for (var item = 0; item < videoGames.length; item++){
  console.log(videoGames[item]);

  if (videoGames[item] === 'PS4') {
    break;
  }
}

console.log('_______________________________');

var frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva'];

frutas.forEach(function(fruta, index) {
  console.log(fruta, index);
})