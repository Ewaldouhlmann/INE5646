function tratadorDeCliqueExercicio3() {
    const texto = prompt('Digite uma string:');

    if (texto === null || texto.length < 2) {
        alert('String muito curta ou nenhuma string informada.');
        return;
    }

    const semPrimeiroEUltimo = texto.slice(1, -1);

    alert(semPrimeiroEUltimo);
}