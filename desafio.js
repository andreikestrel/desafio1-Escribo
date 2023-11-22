
function calcDiv(num) {
  let soma = 0;
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      soma += i;
    }
  }
  return soma;
}

// Testes da função baseados nos exemplos do desafio
console.log(`A função recebe 10 | Retorna : ${calcDiv(10)}`);
console.log(`A função recebe 11 | Retorna : ${calcDiv(11)}`);