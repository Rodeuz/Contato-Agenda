const numero = document.getElementById("numeroContato");
const tabela = document.getElementById("tabela-agenda");
const nome = document.getElementById("nomeContato");

let linhas = "";
const numeros_array = [];
const nomes_array = [];

document.getElementById("form-agenda").addEventListener("submit", function (e) {
  e.preventDefault();

  AdicionaLinha();
  console.log(numero.value);
  atualizaAgenda();
});

function AdicionaLinha() {
  if (!(numero.value.length == 9) || isNaN(numero.value)) {
    alert("Digite um numero valido que contenha 9 digitos e apenas numeros ");
    numero.style.color = "red";
  } else if (nomes_array.includes(nome.value)) {
    alert("Já existe um contato com esse nome");
    nome.style.color = "red";
  } else if (numeros_array.includes(numero.value)) {
    alert("Já existe um Contato com esse numero");
    numero.style.color = "red";
  } else {
    numero.style.color = "";
    nome.style.color = "";
    nomes_array.push(nome.value);
    numeros_array.push(numero.value);

    let linha = "<tr>";
    linha += `<td> ${nome.value} </td>`;
    linha += `<td> ${numero.value} </td>`;

    linha += `</tr>`;

    linhas += linha;
  }
}

function atualizaAgenda() {
  const corpoTabela = document.querySelector(`tbody`);
  corpoTabela.innerHTML = linhas;
}
