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
    
    
    if (parte.length !== 3 || isNaN(dia) || isNaN(mes) || isNaN(ano) || dia < 1 || dia > 31 || mes < 1 || mes > 12) {
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

    const baralho = [
      {
        nome: "O Cavaleiro", tag: "noticias",
        arcanosFavoraveis: [1, 7, 10, 19],
        significado: "Positivo: novidades, mensagens positivas e oportunidades. Negativo: atrasos, notícias desagradáveis e precipitação."
      },
      {
        nome: "O Trevo", tag: "sorte",
        arcanosFavoraveis: [0, 10, 17, 19],
        significado: "Positivo: sorte, oportunidades inesperadas e pequenas conquistas. Negativo: instabilidade, obstáculos passageiros e oportunidades perdidas."
      },
      {
        nome: "O Navio", tag: "viagens",
        arcanosFavoraveis: [7, 10, 21],
        significado: "Positivo: viagens, mudanças e novas experiências. Negativo: distanciamento, saudade e dificuldades no caminho."
      },
      {
        nome: "A Casa", tag: "familia",
        arcanosFavoraveis: [4, 5, 14, 19],
        significado: "Positivo: estabilidade, segurança e harmonia familiar. Negativo: conflitos familiares, insegurança e acomodação."
      },
      {
        nome: "A Árvore", tag: "saude",
        arcanosFavoraveis: [3, 14, 17, 19],
        significado: "Positivo: crescimento, equilíbrio e fortalecimento. Negativo: estagnação, desgaste e necessidade de cuidados."
      },
      {
        nome: "As Nuvens", tag: "desafios",
        arcanosFavoraveis: [12, 18, 20],
        significado: "Positivo: esclarecimento de dúvidas e superação de confusões. Negativo: incertezas, insegurança e falta de clareza."
      },
      {
        nome: "A Serpente", tag: "desafios",
        arcanosFavoraveis: [2, 15, 18],
        significado: "Positivo: estratégia, inteligência e capacidade de superar obstáculos. Negativo: intrigas, falsidade e complicações."
      },
      {
        nome: "O Caixão", tag: "mudancas",
        arcanosFavoraveis: [13, 16, 20],
        significado: "Positivo: encerramento de ciclos, renovação e recomeços. Negativo: perdas, desgaste e resistência às mudanças."
      },
      {
        nome: "O Buquê", tag: "amor",
        arcanosFavoraveis: [3, 6, 17, 19],
        significado: "Positivo: carinho, felicidade, admiração e momentos agradáveis. Negativo: expectativas frustradas e sentimentos superficiais."
      },
      {
        nome: "A Foice", tag: "mudancas",
        arcanosFavoraveis: [13, 16, 20],
        significado: "Positivo: decisões necessárias, libertação e renovação. Negativo: rupturas inesperadas e decisões precipitadas."
      },
      {
        nome: "O Chicote", tag: "conflitos",
        arcanosFavoraveis: [11, 15, 16],
        significado: "Positivo: determinação, disciplina e força. Negativo: discussões, tensão e repetição de problemas."
      },
      {
        nome: "Os Pássaros", tag: "amizades",
        arcanosFavoraveis: [1, 6, 17, 19],
        significado: "Positivo: conversas agradáveis, encontros e boas notícias. Negativo: fofocas, ansiedade e desentendimentos."
      },
      {
        nome: "A Criança", tag: "mudancas",
        arcanosFavoraveis: [0, 1, 19, 20],
        significado: "Positivo: novos começos, espontaneidade e oportunidades. Negativo: imaturidade, ingenuidade e falta de experiência."
      },
      {
        nome: "A Raposa", tag: "trabalho",
        arcanosFavoraveis: [1, 9, 15, 21],
        significado: "Positivo: esperteza, estratégia e capacidade profissional. Negativo: enganos, interesses ocultos e desconfiança."
      },
      {
        nome: "O Urso", tag: "dinheiro",
        arcanosFavoraveis: [4, 8, 15, 19],
        significado: "Positivo: força, prosperidade, proteção e estabilidade material. Negativo: controle excessivo, ambição e disputas por poder."
      },
      {
        nome: "A Estrela", tag: "espiritualidade",
        arcanosFavoraveis: [2, 17, 18, 21],
        significado: "Positivo: esperança, inspiração e realização de sonhos. Negativo: ilusões, expectativas exageradas e falta de direção."
      },
      {
        nome: "A Cegonha", tag: "mudancas",
        arcanosFavoraveis: [3, 10, 13, 20],
        significado: "Positivo: transformações positivas, evolução e novidades. Negativo: instabilidade e resistência às mudanças."
      },
      {
        nome: "O Cão", tag: "amizades",
        arcanosFavoraveis: [5, 6, 11, 19],
        significado: "Positivo: lealdade, confiança e amizade verdadeira. Negativo: dependência, decepções e confiança mal depositada."
      },
      {
        nome: "A Torre", tag: "trabalho",
        arcanosFavoraveis: [4, 9, 11, 21],
        significado: "Positivo: independência, autoridade e conquistas pessoais. Negativo: isolamento, distanciamento e rigidez."
      },
      {
        nome: "O Jardim", tag: "amizades",
        arcanosFavoraveis: [3, 6, 17, 19],
        significado: "Positivo: vida social, reconhecimento e novas conexões. Negativo: aparências, exposição excessiva e falsidade social."
      },
      {
        nome: "A Montanha", tag: "desafios",
        arcanosFavoraveis: [4, 9, 11, 12],
        significado: "Positivo: perseverança e superação de obstáculos. Negativo: bloqueios, atrasos e dificuldades."
      },_
      {
        nome: "Os Caminhos", tag: "decisoes",
        arcanosFavoraveis: [1, 6, 7, 10],
        significado: "Positivo: novas possibilidades, liberdade e boas escolhas. Negativo: indecisão, dúvidas e caminhos confusos."
      },
      {
        nome: "Os Ratos", tag: "dinheiro",
        arcanosFavoraveis: [13, 15, 16, 18],
        significado: "Positivo: percepção de problemas e oportunidade de corrigir perdas. Negativo: prejuízos, desgaste e desperdícios."
      },
      {
        nome: "O Coração", tag: "amor",
        arcanosFavoraveis: [3, 6, 17, 19],
        significado: "Positivo: amor, paixão, felicidade e sentimentos sinceros. Negativo: desilusões, ciúmes e sofrimento emocional."
      },
      {
        nome: "A Aliança", tag: "amor",
        arcanosFavoraveis: [5, 6, 11, 21],
        significado: "Positivo: compromisso, união, parceria e fidelidade. Negativo: acordos frustrados, dependência e compromissos difíceis."
      },
      {
        nome: "O Livro", tag: "estudos",
        arcanosFavoraveis: [2, 5, 9, 12],
        significado: "Positivo: conhecimento, aprendizado e descobertas. Negativo: segredos, informações escondidas e falta de conhecimento."
      },
      {
        nome: "A Carta", tag: "noticias",
        arcanosFavoraveis: [1, 5, 10, 20],
        significado: "Positivo: mensagens importantes, respostas e comunicação. Negativo: mal-entendidos, notícias desagradáveis e atrasos."
      },
      {
        nome: "O Homem", tag: "relacionamentos",
        arcanosFavoraveis: [1, 4, 7, 11],
        significado: "Positivo: figura masculina importante, iniciativa e ação. Negativo: conflitos, egoísmo e atitudes impulsivas."
      },
      {
        nome: "A Mulher", tag: "relacionamentos",
        arcanosFavoraveis: [2, 3, 8, 18],
        significado: "Positivo: figura feminina importante, sensibilidade e intuição. Negativo: conflitos, insegurança e instabilidade emocional."
      },
      {
        nome: "Os Lírios", tag: "familia",
        arcanosFavoraveis: [5, 9, 14, 19],
        significado: "Positivo: paz, maturidade, harmonia e tranquilidade. Negativo: frieza, desentendimentos e falta de entusiasmo."
      },
      {
        nome: "O Sol", tag: "sucesso",
        arcanosFavoraveis: [1, 19, 21],
        significado: "Positivo: vitória, felicidade, reconhecimento e prosperidade. Negativo: orgulho, excesso de confiança e esgotamento."
      },
      {
        nome: "A Lua", tag: "espiritualidade",
        arcanosFavoraveis: [2, 17, 18, 19],
        significado: "Positivo: intuição, criatividade, reconhecimento e sensibilidade. Negativo: instabilidade emocional, ilusões e insegurança."
      },
      {
        nome: "A Chave", tag: "solucoes",
        arcanosFavoraveis: [1, 10, 19, 21],
        significado: "Positivo: respostas, soluções, oportunidades e conquistas. Negativo: dificuldade para encontrar soluções e oportunidades desperdiçadas."
      },
      {
        nome: "Os Peixes", tag: "dinheiro",
        arcanosFavoraveis: [3, 10, 15, 19],
        significado: "Positivo: abundância, prosperidade e crescimento financeiro. Negativo: descontrole financeiro, desperdício e interesses materiais excessivos."
      },
      {
        nome: "A Âncora", tag: "trabalho",
        arcanosFavoraveis: [4, 7, 11, 14],
        significado: "Positivo: segurança, estabilidade e persistência. Negativo: estagnação, apego e resistência ao progresso."
      },
      {
        nome: "A Cruz", tag: "desafios",
        arcanosFavoraveis: [5, 12, 13, 20],
        significado: "Positivo: superação, aprendizado e fortalecimento. Negativo: preocupações, dificuldades e responsabilidades pesadas."
      }
    ];

