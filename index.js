function calculadora() {
    
    alert("Hello World, isso é uma calculadora!");
    
    let n1 = parseFloat(prompt("Insira o primeiro número"));

    let n2 = parseFloat(prompt("Insira o segundo número:"));

    let operacao = prompt("Qual operação deseja realizar? Digite: 1 - Soma | 2 - Subtração | 3 - Multiplicação | 4 - Divisão.");

    let resultadoDaOperacao;
    
    switch(operacao) {
        case "1":
            resultadoDaOperacao = n1 + n2;
            break;
        case "2":
            resultadoDaOperacao = n1 - n2;
            break;
        case "3":
            resultadoDaOperacao = n1 * n2;
            break;
        case "4":
            if (n2 !== 0) {
                resultadoDaOperacao = n1 / n2;
            } else {
                alert("Não é possível dividir um número por zero!");
                calculadora();
                return;
            }
            break;
        default:
            alert("Operação inválida!");
            calculadora();
            return;
    }

}