function reverterString(str) {
    // reverter a string usando o método split, reverse e join
    return str.split('').reverse().join('');
}


function tratadorDeCliqueExercicio6() {
    const texto = prompt('Digite uma string:');
    // Verifica se o usuário cancelou o prompt ou se a string está vazia
    if (texto === null || texto.length === 0) {
        alert('Nenhuma string informada.');
        return;
    }
    // Chama a função para reverter a string
    const stringInvertida = reverterString(texto);
    console.log('String invertida: ' + stringInvertida);
    return stringInvertida;
}