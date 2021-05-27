// JavaScript source code
var nome = "Fabio Mad. Reges";
var cargo = "DEV Growdev";


var nomeHtml = document.getElementById("nome-no-html");
var cargoHtml = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");


function colocarNomeNoHtml(nome) {
    nomeHtml.innerHTML = nome;


}


function colocarcargonohtml(cargo) {
    cargoHtml.innerHTML = cargo;

}

function clickNoProjetos() {
    console.log("Clicou no botão projetos!!!");
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function clickNoSobre() {
    console.log("Clicou no botão Sobre!!!");
    texto1.style.display = "block";
    texto2.style.display = "none";
}
colocarNomeNoHtml(nome);
colocarcargonohtml(cargo);