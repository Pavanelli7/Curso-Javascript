// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 19;
var parenteIdade = 43;

if (minhaIdade > parenteIdade) {
    console.log('É maior');
} else if (minhaIdade == parenteIdade) {
    console.log('É igual');
} else {
    console.log('É menor');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
// 3
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

if (nome) {
    console.log('Nome é True');
} else {
    console.log('Nome é False');
}

if (idade) {
    console.log('Idade é True');
} else {
    console.log('Idade é False');
}

if (possuiDoutorado) {
    console.log('Doutorado é True');
} else {
    console.log('Doutorado é False');
}

if (empregoFuturo) {
    console.log('True');
} else {
    console.log('Emprego Futuro é False');
}

if (dinheiroNaConta) {
    console.log('Dinheirona Conta é True');
} else {
    console.log('Dinheiro na Conta é False');
}

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
    console.log('Brasil maior que china');
} else if (brasil < china) {
    console.log('Brasil menor que china');
} else {
    console.log('Tem a mesma quantidade de habitantes');
}

// O que irá aparecer no console?
if (('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}
// False

// O que irá aparecer no console?
if (('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão');
} else {
    console.log('Falso');
}
// Cão
