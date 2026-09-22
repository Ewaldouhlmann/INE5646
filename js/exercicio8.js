function obterRegiaoFiscalAtravesDoCPFInformado(cpfInformado) {
    //edite esta função!
    let regiaoFiscal = undefined
    console.log(cpfInformado)
    // Verifica se o CPF informado é válido (tem 11 dígitos)
    if (cpfInformado.length !== 11 || isNaN(cpfInformado)) {
        console.log("CPF inválido. Certifique-se de informar um CPF com 11 dígitos numéricos.");
        return "CPF inválido";
    }
    //----------------------------
    // SWITCH CASE PARA DETERMINAR A REGIÃO FISCAL ATRAVÉS DO CPF INFORMADO
    /* REGIÕES FISCAIS:
    0: RS;
    1: DF, GO, MT, MS e TO;
    2: AC, AP, AM, PA, RO e RR;
    3: CE, MA e PI;
    4: AL, PB, PE e RN;
    5: BA e SE;
    6: MG;
    7: ES e RJ;
    8: SP;
    9: PR e SC.
    */

    switch (cpfInformado[8]) {
        case '0':
            regiaoFiscal = "RS";
            break;
        case '1':
            regiaoFiscal = "DF, GO, MT, MS e TO";
            break;
        case '2':
            regiaoFiscal = "AC, AP, AM, PA, RO e RR";
            break;
        case '3':
            regiaoFiscal = "CE, MA e PI";
            break;
        case '4':
            regiaoFiscal = "AL, PB, PE e RN";
            break;
        case '5':
            regiaoFiscal = "BA e SE";
            break;
        case '6':
            regiaoFiscal = "MG";
            break;
        case '7':
            regiaoFiscal = "ES e RJ";
            break;
        case '8':
            regiaoFiscal = "SP";
            break;
        case '9':
            regiaoFiscal = "PR e SC";
            break;
        
    }
    return regiaoFiscal
}



function tratadorDeCliqueExercicio8() {
    let textCPF = document.getElementById("textCPF")
	let textRegiao = document.getElementById("regiaoFiscal")

    const regiaoFiscal = obterRegiaoFiscalAtravesDoCPFInformado(textCPF.value);
    textRegiao.textContent = "Região fiscal: "+regiaoFiscal
}
