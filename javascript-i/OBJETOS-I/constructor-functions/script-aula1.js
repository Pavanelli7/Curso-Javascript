function Carro(marcaAtribuida, precoAtribuido) {
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido;
}

const honda = new Carro('Honda', 3000);
const fiat = new Carro('Fiat', 4000);

function Carro2(marcaAtribuida, precoInicial) {
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    this.marca = marcaAtribuida;
    this.preco = precoFinal;
    console.log(this);
}

const mazda = new Carro2('Mazda', 5000);