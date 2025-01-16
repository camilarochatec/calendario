// Selecionar os elementos
const dia = document.getElementById("dia");
const mes = document.getElementById("mes");
const ano = document.getElementById("ano");

// Colocar a contagem dos dias
for (let i = 1; i <= 31; i++) {
    dia.innerHTML += `<option value="${i}">${i}</option>`;
}

// Colocar os meses
const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", 
    "Junho", "Julho", "Agosto", "Setembro", "Outubro", 
    "Novembro", "Dezembro"
];

meses.forEach((nomeMes, index) => {
    mes.innerHTML += `<option value="${index + 1}">${nomeMes}</option>`;
});

// Colocar os anos
const anoAtual = new Date().getFullYear();
for (let i = anoAtual; i >= anoAtual - 50; i--) {
    ano.innerHTML += `<option value="${i}">${i}</option>`;
}

// Verificando ano bissexto
function verificar() {
    const diaSelecionado = dia.value;
    const mesSelecionado = mes.value;
    const anoSelecionado = Number(ano.value);

    // Verifica se o ano é bissexto
    const bissexto = (anoSelecionado % 4 === 0 && (anoSelecionado % 100 !== 0 || anoSelecionado % 400 === 0));

    const mensagem = bissexto
        ? `Quem nasceu em ${diaSelecionado}/${mesSelecionado}/${anoSelecionado}, nasceu em um ano bissexto.`
        : `Quem nasceu em ${diaSelecionado}/${mesSelecionado}/${anoSelecionado}, NÃO nasceu em um ano bissexto.`;

    document.getElementById("resultado").textContent = mensagem;
}


