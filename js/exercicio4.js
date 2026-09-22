function tratadorDeCliqueExercicio4() {
    var valor1 = prompt("Informe o primeiro valor:");
    var valor2 = prompt("Informe o segundo valor:");

    verificaIntervalodoNumero(Number(valor1));
    verificaIntervalodoNumero(Number(valor2));
}

function verificaIntervalodoNumero(valor) {
    // Tratamento de erro: verifica se o valor é um número
    if (isNaN(valor)) {
        console.log("O valor informado não é um número válido.");
        return;
    }

    // Verifica se está no intervalo 30..50, 60..100 ou em nenhum dos dois
    if (valor >= 30 && valor <= 50) {
        console.log(valor + " está no intervalo [30,50].");
    } else if (valor >= 60 && valor <= 100) {
        console.log(valor + " está no intervalo [60,100].");
    } else {
        console.log("O número informado não está em nenhum dos dois intervalos.");
    }
}