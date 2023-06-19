/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
// alert(`Olá, boas vindas ao jogo de cartas BlackJack!`)
// const start = confirm(`Deseja iniciar uma partida? Clique: \nOk, caso deseje iniciar \ncancel, caso não deseje iniciar!`)

// let somaJogador = 0
// let somaComputador = 0

// if (start === true) {
//    for (let i = 1; i <= 2; i++) {
//       const jogador = comprarCarta()
//       const computador = comprarCarta()

//       somaComputador += computador.valor
//       somaJogador += jogador.valor

//       console.log(`Carta ${i} do Computador:  ${computador.texto}`)
//       console.log(`Carta ${i} do Jogador:  ${jogador.texto}`)

//    }

// } else {
//    console.log("Fim de jogo!")
// }

// console.log(`Soma computador: ${somaComputador}`)
// console.log(`Soma jogador: ${somaJogador}`)

// if (somaComputador <= 21 && (somaComputador > somaJogador || somaJogador > 21)) {
//    console.log("O computador venceu!")
// } else if (somaJogador <= 21 && (somaJogador > somaComputador || somaComputador > 21)) {
//    console.log("O jogador venceu!")
// } else {
//    console.log("Empate!");
// }
