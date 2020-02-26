let conteudo = document.querySelector(".container");
let questionOneValue =
  " 1) Dada uma String como entrada, crie uma função que inverte as palavras desta string e devolva a nova string como saida. Exemplo: Entrada: 'Teste da cosmo' Saída: Cosmo da Teste";

let firstChallenge = document.createElement("div");
firstChallenge.setAttribute("class", "first-challenge");

let questionOne = (document.createElement("p").innerHTML = questionOneValue);
let divPalavra = document.createElement("div");
let palavra = "TESTE DA COSMO";

let buttonQ1 = document.createElement("button");
buttonQ1.setAttribute("class", "button-q1");
buttonQ1.innerText = "INVERTER";
buttonQ1.onclick = inverterPalavra;

conteudo.append(firstChallenge);
firstChallenge.append(questionOne);
firstChallenge.append(divPalavra);
divPalavra.append(palavra);
firstChallenge.appendChild(buttonQ1);

function inverterPalavra() {
  divPalavra.innerHTML = "";
  let palavraArray = palavra
    .split(" ")
    .reverse()
    .join(" ");

  divPalavra.append(palavraArray);
  console.log(palavraArray);
  alert(palavraArray);
}

let questionTwo =
  "2. Dado um Array de String como entrada, crie uma função que junte cada uma das posições do array em uma única String e a junção deve ser feita por ponto e virgula (;). Exemplo: Entrada ['Primeiro', 'Segundo', 'Texto'] => saída 'primeiro;segundo;texto . *Não usar a função join()*";

let secondChallenge = document.createElement("div");
secondChallenge.setAttribute("class", "second-challenge");
conteudo.append(secondChallenge);
secondChallenge.append(questionTwo);

let divStringArray = document.createElement("div");
let arrayString = ["Primeiro", "Segundo", "Texto"];

let buttonQ2 = document.createElement("button");
buttonQ2.setAttribute("class", "button-q1");
buttonQ2.innerText = "JUNTAR DADOS";
buttonQ2.onclick = juntarDados;

secondChallenge.append(divStringArray);
divStringArray.append(arrayString);
secondChallenge.append(buttonQ2);

function juntarDados() {
  divStringArray.innerHTML = "";
  let arrayStringToString = arrayString.toString();
  let result = arrayStringToString.replace(/,/g, ";");
  divStringArray.append(result);
  console.log(result);
  alert(result);
}

let questionThree =
  "3) Dado um array de Number como entrada, crie uma função que ordena de forma crescente e devolva um novo array ordenado como saída. Exemplo: Entrada: [1, 2, 6, 3, 5, 2] => Saída: [1, 2, 2, 3, 5, 6]";

let thirdChallenge = document.createElement("div");
thirdChallenge.setAttribute("class", "third-challenge");
conteudo.append(thirdChallenge);
thirdChallenge.append(questionThree);

let divArray = document.createElement("div");
let arrayNumbers = [1, 2, 6, 3, 5, 2];

let buttonQ3 = document.createElement("button");
buttonQ3.setAttribute("class", "button-q1");
buttonQ3.innerText = "ORDENAR NÚMEROS";
buttonQ3.onclick = ordenarNumeros;

thirdChallenge.append(divArray);
divArray.append(arrayNumbers);
thirdChallenge.append(buttonQ3);

function ordenarNumeros() {
  arrayNumbers.sort();
  divArray.innerHTML = "";
  divArray.append(arrayNumbers);
  console.log(arrayNumbers);
  alert(arrayNumbers);
}
