function haOnzeDigitos(cpf) {
    //---- edite aqui para a validação do exercício 9a
    return cpf.length === 11
}

function todosOsOnzeDigitosSaoNumeros(cpf) {
    //---- edite aqui para a validação do exercício 9b
    return /^[0-9]+$/.test(cpf)
}

function osOnzeNumerosSaoDiferentes(cpf) {
    //---- edite aqui para a validação do exercício 9c
    return new Set(cpf).size > 1
}

function calcularDigitoVerificador(digitos) {
    const pesoInicial = digitos.length + 1
    let soma = 0

    for (let i = 0; i < digitos.length; i++) {
        soma += digitos[i] * (pesoInicial - i)
    }

    let resto = (soma * 10) % 11
    if (resto === 10) {
        resto = 0
    }

    return resto
}

function oPrimeiroDigitoVerificadorEhValido(cpf) {
    //---- edite aqui para a validação do exercício 9d
    const digitos = cpf.split("").map(Number)
    const primeirosNove = digitos.slice(0, 9)
    const digitoVerificador = digitos[9]

    return calcularDigitoVerificador(primeirosNove) === digitoVerificador
}

function oSegundoDigitoVerificadorEhValido(cpf) {
    //---- edite aqui para a validação do exercício 9e
    const digitos = cpf.split("").map(Number)
    const primeirosDez = digitos.slice(0, 10)
    const digitoVerificador = digitos[10]

    return calcularDigitoVerificador(primeirosDez) === digitoVerificador
}





//------------------- Não edite abaixo ----------------------------
function validarCPF(validacao, cpf) {
    switch (validacao) {
        case "onzeDigitos": return haOnzeDigitos(cpf)
        case "onzeSaoNumeros": return todosOsOnzeDigitosSaoNumeros(cpf) && validarCPF("onzeDigitos", cpf)
        case "naoSaoTodosIguais": return osOnzeNumerosSaoDiferentes(cpf) && validarCPF("onzeSaoNumeros", cpf)
        case "verificador10": return oPrimeiroDigitoVerificadorEhValido(cpf) && validarCPF("naoSaoTodosIguais", cpf)
        case "verificador11": return oSegundoDigitoVerificadorEhValido(cpf) && validarCPF("verificador10", cpf)

        default:
            console.error(validacao+" é um botão desconhecido...")
            return false
    }
}


function tratadorDeCliqueExercicio9(nomeDoBotao) {
    const cpf = document.getElementById("textCPF").value

    const validacao = (nomeDoBotao === "validade") ? "verificador11": nomeDoBotao
    const valido = validarCPF(validacao, cpf)
    const validoString = valido ? "valido": "inválido"
    const validadeMensagem = "O CPF informado ("+cpf+") é "+ validoString
    console.log(validadeMensagem)

    if (nomeDoBotao !== "validade") {
        let divResultado = document.getElementById(validacao);
        divResultado.textContent = validoString
        divResultado.setAttribute("class", valido ? "divValidadeValido": "divValidadeInvalido")    
    } else {
        window.alert(validadeMensagem)
    }

    
}