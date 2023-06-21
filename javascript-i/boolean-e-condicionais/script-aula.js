var possuiGraduacao = false;
var possuiDoutorado = true;

if (possuiGraduacao) {
    console.log('É verdadeiro');
} else if (possuiDoutorado) {
    console.log('Possui Doutorado');
} else {
    console.log('Não possui nada');
}

var nome = '';

if (nome) {
    console.log(nome);
} else {
    console.log('Nome não existe');
}

if (!possuiGraduacao) {
    console.log(possuiGraduacao);
    console.log('Não possui graduação');
}

if ((5 - 5) && (5 + 5)) {
    console.log(true);
} else {
    console.log(false);
}

var condicional = (5 - 3) && (5 + 5);

if (condicional) {
    console.log('Verdadeiro', condicional);
} else {
    console.log('Falso');
}

var condicional2 = (5 - 5) || (5 + 5) || (10 - 2)
console.log(condicional2);

var corFavorita = 'Azul';

switch (corFavorita) {
    case 'Azul':
        console.log('Olhe para o céu');
        break;

    case 'Amarelo':
        console.log('Olhe para o sol');
        break;

    case 'Vermelho':
        console.log('olha para as rosas');
        break

    default:
        console.log('feche os olhos');
}