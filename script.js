// Crie uma função que recebe como parâmetro
// a quantidade de vitórias e derrotas de um jogador
// depois retorne o resultado para uma variável
// o saldo de Rankeadas deve ser feito através do calculo 
// (vitórias - derrotas)
let resultado = calcularRank(100,18)

function calcularRank(quantVitorias,quantDerrotas){
        return quantVitorias - quantDerrotas
}

let nivel = ""

switch (true) {
    case resultado < 10:
        nivel = "Ferro"
        break
    case resultado <= 20:
        nivel = "Bronze"
        break
    case resultado <= 50:
        nivel = "Prata"
        break
    case resultado <= 80:
        nivel = "Ouro"
        break
    case resultado <= 90:
        nivel = "Diamante"
        break
    case resultado <= 100:
        nivel = "Lendário"
        break
    default:
        nivel = "Imortal"
}

// Saída do resultado
console.log(`O Herói tem um saldo de vitórias de ${resultado} e está no nível ${nivel}`)







