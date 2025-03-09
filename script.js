// Função para verificar se um número é primo
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Função para calcular a soma dos dígitos de um número
function somaDigitos(numero) {
    return numero.toString().split('').reduce((acc, digito) => acc + parseInt(digito), 0);
}

// Função principal para verificar os amuletos
function verificarAmuletos() {
    const input = document.getElementById('amuletos').value.trim();
    
    if (!input) {
        alert('Por favor, insira os amuletos!');
        return;
    }

    const amuletos = input.split(',').map(Number);
    
    let dignos = [];
    let detalhes = '';

    amuletos.forEach(amulet => {
        const soma = somaDigitos(amulet);
        const primo = isPrime(soma);
        
        detalhes += `${amulet}: ${soma} (${primo ? 'primo' : 'não primo'})<br>`;
        
        if (primo) dignos.push(amulet);
    });

    document.getElementById('resultado').innerHTML = dignos.length > 0 
        ? `Amuletos dignos encontrados: ${dignos.join(', ')}`
        : 'Nenhum amuleto digno encontrado.';
    
    document.getElementById('detalhes').innerHTML = `<strong>Processamento Detalhado:</strong><br>${detalhes}`;
}

// Função para reiniciar o jogo
function reiniciar() {
    document.getElementById('amuletos').value = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('detalhes').innerHTML = '';
}
