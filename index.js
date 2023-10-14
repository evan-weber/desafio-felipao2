console.log("Segundo desafio do Felipao - Por Geder Evando Weber")

console.log("Calculadora de partidas Rankeadas")

console.log("********************************")

//Variaveis + functions de calculo

let saldoVitorias = calculadoraSaldo(90, 41)

function calculadoraSaldo(vitorias, derrotas){
    let saldo = vitorias - derrotas
    return saldo
}

let nivelHeroi = calculadoraNivel()

function calculadoraNivel(){
    let vitorias = 90
    let derrotas = 41
    let saldo = vitorias-derrotas

    let posicao;
        if(saldo <= 10){
        posicao = "0";
    }   else if (saldo >= 11 && saldo <= 20){
        posicao = "1";
    }   else if (saldo >= 21 && saldo <= 50){
        posicao = "2";
    }   else if (saldo >= 51 && saldo <= 80){
        posicao = "3";
    }   else if (saldo >= 81 && saldo <= 90){
        posicao = "4";
    }   else if (saldo >= 91 && saldo <= 100){
        posicao = "5";
    }   else if (saldo >= 101) {
        posicao = "6";
    }

    let classes = ["FERRO", "BRONZE", "PRATA", "OURO", "DIAMANTE", "LENDARIO", "IMORTAL"]
    let nivel = classes[posicao]
    return nivel
    
}

//Saida

console.log("O Heroi tem um saldo de " + saldoVitorias + " vitorias e esta no nivel de " + nivelHeroi)
