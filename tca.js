let consulente = prompt(parseFloat("Qual é seu nome?"))
const arcanos = [
    "O Louco", "O Mago", "A Sacerdotisa", "A Imperatriz", "O Imperador",
    "O Hierofante", "Os Enamorados", "O Carro", "A Justiça", "O Eremita",
    "A Roda da Fortuna", "A Força", "O Enforcado", "A Morte", "A Temperança",
    "O Diabo", "A Torre", "A Estrela", "A Lua", "O Sol", "O Julgamento", "O Mundo"
    ];
    
    
    function somarDigitos(numero) {
    let soma = 0;
    while (numero > 0) {
    soma += numero % 10;
    numero = Math.floor(numero / 10);
    }
    return soma;
    }
    
    
    const data = prompt("Qual é sua data de nascimento? (dd/mm/aaaa) ");
    const parte = data.split("/"); 
    const dia = parseInt(parte[0]);
    const mes = parseInt(parte[1]);
    const ano = parseInt(parte[2]);
    
    
    if (partes.length !== 3 || isNaN(dia) || isNaN(mes) || isNaN(ano) || dia < 1 || dia > 31 || mes < 1 || mes > 12) {
    console.log("Data inválida!");
    } else {
    let total = somarDigitos(dia) + somarDigitos(mes) + somarDigitos(ano);
    console.log("Soma inicial:", total);
    
    
    while (total > 22) {
    total = somarDigitos(total);
    console.log("Reduzido:", total);
    }
    const posicao = total === 22 ? 0 : total;
    console.log("\nSeu arcano pessoal é o " + total + ": " + arcanos[posicao]);
    }
