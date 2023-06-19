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
alert(`Bem vindo ao novo jogo de cartas Blackjack 2.0!`)
let start = confirm(`Deseja iniciar a partida?`)

let arrayPlayer = []
let arrayComputer = []
let cardsPlayer = ``
let cardsComputer = ``
let somaPlayer = 0
let somaComputer = 0
let winner = ""

if (start) {
   let buyCards = true
   while (buyCards) {
      for (i = 0; i <= 1; i++) {
         arrayPlayer.push(comprarCarta())
         arrayComputer.push(comprarCarta())
         somaPlayer += arrayPlayer[i].valor
         somaComputer += arrayComputer[i].valor
         cardsPlayer += arrayPlayer[i].texto + " "
         cardsComputer += arrayComputer[i].texto + " "
         if (somaPlayer === 22 || somaComputer === 22) {
            somaPlayer = 0
            somaComputer = 0
            for (i = 0; i <= 1; i++) {
               arrayPlayer.push(comprarCarta())
               arrayComputer.push(comprarCarta())
               somaPlayer += arrayPlayer[i].valor
               somaComputer += arrayComputer[i].valor
               cardsPlayer += arrayPlayer[i].texto + " "
               cardsComputer += arrayComputer[i].texto + " "
            }
         } else {
            buyCards = false
         }
      }
   }

   let compraDeCartas = true
   while (compraDeCartas) {
      if (somaPlayer > 21) {
         compraDeCartas = false;
      }
      else {
         let novaRodada = confirm(`Suas cartas são: ${cardsPlayer}\nCarta revelada do computador é: ${arrayComputer[0].texto}\nDeseja comprar mais carta?`)
         if (novaRodada) {
            arrayPlayer.push(comprarCarta())
            cardsPlayer += arrayPlayer[arrayPlayer.length - 1].texto + " "
            somaPlayer += arrayPlayer[arrayPlayer.length - 1].valor
            console.log(`Cartas do jogador: ${cardsPlayer}`)
            console.log(`Pontos do jogador ${somaPlayer}`)
         }
         else {
            compraDeCartas = false
         }
      }
   }
   if (somaPlayer <= 21) {
      while (somaComputer < 21 && somaComputer <= somaPlayer) {
         arrayComputer.push(comprarCarta())
         somaComputer += arrayComputer[arrayComputer.length - 1].valor
         cardsComputer += arrayComputer[arrayComputer.length - 1].texto + " "
      }
   }
   console.log(`Cartas finais do jogador: ${cardsPlayer}\nCarta finais do computador: ${cardsComputer}`)
   console.log(`Pontos jogador ${somaPlayer}\nPontos computador: ${somaComputer}`)

   if (somaComputer <= 21 && (somaComputer > somaPlayer || somaPlayer > 21)) {
      winner = `O computador venceu!`
   } else if (somaPlayer <= 21 && (somaPlayer > somaComputer || somaComputer > 21)) {
      winner = "O jogador venceu!"
   } else {
      winner = "Empate!"
   }
   alert(`Cartas do jogador: ${cardsPlayer} - Pontos do jogador: ${somaPlayer}\nCartas computador: ${cardsComputer} - Pontos do Computador: ${somaComputer}\n${winner}`)
} else {
   alert(`Você não iniciou o jogo!`)
}