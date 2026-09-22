function tratadorDeCliqueExercicio2() {
    const agora = new Date();

    let horas = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();

    const periodo = horas >= 12 ? 'PM' : 'AM';

    horas = horas % 12;
    if (horas === 0) {
        horas = 12;
    }

    const mensagem = `Horário: ${horas} ${periodo} : ${minutos}m : ${segundos}s`;

    alert(mensagem);
}