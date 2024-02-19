/**
 * Módulo para implementar funções matemáticas.
 */

/**
 * Realiza a soma do dobro do valor de cada número par em um vetor de números.
 * A função deve ser implementada utilizando a abordagem funcional com o modelo map/reduce.
 * @param {Array} numeros vetor com os números desejados
 */
function somaDobroNumerosParesFuncional(numeros){
    // TODO: Insira seu código funcional aqui
    const somaDobroPar = numeros
    .filter(num => num % 2 === 0)
    .map(num => num * 2)
    .reduce((soma, num) => soma + num, 0);
    return somaDobroPar;
}

/**
 * Realiza a soma do dobro do valor de cada número par em um vetor de números.
 * A função deve ser implementada utilizando a abordagem estruturada (procedural) convencional.
 * @param {Array} numeros vetor com os números desejados
 */
function somaDobroNumerosParesProcedural(numeros){
    // TODO: Insira seu código estruturado aqui
    let somaDobroPar2 = 0;
    for(let i = 0; i < numeros.length; i++) {
        if(numeros[i] % 2 == 0) {
            somaDobroPar2 += numeros[i] * 2;
        }
    }
    return somaDobroPar2;
}

export { somaDobroNumerosParesFuncional, somaDobroNumerosParesProcedural };
