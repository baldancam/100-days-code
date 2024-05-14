function lancarDados() {
    const selectElement = document.getElementById("faces");
    const valorSelecionado = parseInt(selectElement.value);
    const numerosorteado = document.getElementById("numerosorteado");

    // Verifica se algum número foi selecionado
    if (valorSelecionado > 0) {
        const array = []; // array para armazenar o número de lados selecionado
        for (let i = 1; i <= valorSelecionado; i++) {
            array.push(i); // adiciona os números dentro do array
        }

        const interval = setInterval(() => {
            const numeroAleatorio = selecionarNumeroAleatorio(array);// armazena o número aleatorio gerado
            numerosorteado.innerText = numeroAleatorio;// exibe o numero sorteado no <span>
        }, 100); // Intervalo de 200 milissegundos

        setTimeout(() => {
            clearInterval(interval); // Para a animação após um tempo
            const numeroFinal = selecionarNumeroAleatorio(array);
            numerosorteado.innerText = numeroFinal;
        }, 2000); // Tempo total de 2 segundos para a animação

    } else {
        alert('Por favor, selecione o número de lados.');
    }

     // função gera um número aleatorio
    function selecionarNumeroAleatorio(array) {
        const indiceAleatorio = Math.floor(Math.random() * array.length);
        return array[indiceAleatorio];
    }
}
