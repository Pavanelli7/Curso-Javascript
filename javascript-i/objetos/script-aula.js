var pessoa = {
    nome: 'Vittor',
    idade: 19
}

console.log(pessoa);

var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro: function(lado){
        return this.lados * lado;
    }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(2));
console.table(quadrado);

console.log(Math.PI);
console.log(Math.random());

var height = 100;
var menu = {
    width: 800,
    height: 50,
    backgrounColor: '#84E',
    metadeHeight() {
        return this.height /2;
    }
}

menu.backgrounColor = 'blue';
menu.color = '#000';

var bg = menu.backgrounColor;

console.log(bg);
console.log(menu.metadeHeight());
