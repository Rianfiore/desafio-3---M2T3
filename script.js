let contador = [];
let contador2 = [];
let contador3 = [];
let contador4 = [];
let contagem = 10;
let indexContador2 = 0;

for (let i = 1; i <= 10; i++) {
  contador[i - 1] = i;
}

while (contagem >= 1) {
  contador2[indexContador2] = contagem;
  indexContador2++;
  contagem--;
}

for (let i = 0; i <= 100; i++) {
  i % 2 !== 0 && contador3.push(i);
  i % 2 === 0 && contador4.push(i);
}

console.log("FOR Loop: ", ...contador);
console.log("WHILE Loop: ", ...contador2);
console.log("=========================");
console.log("Pares e Ímpares");
console.log("Ímpares: ", ...contador3);
console.log("Pares: ", ...contador4);
