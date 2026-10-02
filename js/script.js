function calcular(a, b, operador) {
    const num1 = Number(a);
    const num2 = Number(b);
    
    if (isNaN(num1) || isNaN(num2)) {
        return "Erro: valores inválidos!";
    }
    
    switch (operador) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': 
            return num2 !== 0 ? 
                num1 / num2 : 
                "Erro: divisão por zero!";
        default: 
            return "Operador inválido";
    }
}

function Operacao(operador) {
    const num1 = document.getElementById('numero1').value;
    const num2 = document.getElementById('numero2').value;
    
    // Se o operador for passado como parâmetro, utilize-o. Caso contrário, obtenha-o do select.
    const op = operador || document.getElementById('operador').value;
    
    const resultado = calcular(num1, num2, op);
    
    const resultadoDiv = document.getElementById('resultado');
    const valorResultado = document.getElementById('valorResultado');
    
    // Verificar si es un error
    if (typeof resultado === 'string' && resultado.includes('Error')) {
        resultadoDiv.classList.add('error');
        valorResultado.textContent = resultado;
    } else {
        resultadoDiv.classList.remove('error');
        valorResultado.textContent = `Resultado: ${resultado}`;
    }
    
    resultadoDiv.style.display = 'block';
}

// Permitir calcular con Enter
document.getElementById('numero2').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        Operacao();
    }
});