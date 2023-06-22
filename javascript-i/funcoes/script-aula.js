function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(2));

function pi() {
    return 3.14;
}

var total = 5 * pi();
console.log(total);

// peso e altura são parâmetros
function imc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}

console.log(imc(80, 1.8));  // argumento

function corFavorita(cor) {
    if (cor === 'azul') {
        return 'Cor azul'
    } else if (cor === 'verde') {
        return 'Cor verde'
    } else {
        return 'Cor vermelha'
    }
}

console.log(corFavorita('verde'));


/*
    function mostraConsole(){
        console.log('oi')
    }

     addEventListener('click', mostraConsole);

*/

addEventListener('click', function () {
    console.log('Oi');
});

function imc2(peso, altura) {
    var imc = peso / (altura ** 2)
    console.log(imc);
}

imc2(80, 1.8)

function terceiraIdade(idade) {
    if (typeof idade !== 'number') {
        return 'Preencha um número';
    } else if (idade >= 60) {
        return true;
    } else {
        return false;
    }


}

console.log(terceiraIdade(59));

function faltaVisitar(paisesVisitados) {
   var totalPaises = 193;
   return `Falta visitar ${totalPaises - paisesVisitados} países` 
}

console.log(faltaVisitar(93));

var profissao = 'Dev Front';

function dados() {
    var nome = 'Vittor'
    var idade = 19;

    function outrosDados() {
        var endereco = 'São Paulo'
        
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }
    return outrosDados();
}

console.log(dados());