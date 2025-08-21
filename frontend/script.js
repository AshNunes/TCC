const API_URL = "http://localhost:3000/jogos";

document.addEventListener("DOMContentLoaded", () => {
  carregarJogos();

  const form = document.getElementById("jogo-form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const situacao = document.getElementById("situacao").value;
    const avaliacao = document.getElementById("avaliacao").value;
    const observacao = document.getElementById("observacao").value;

    const novoJogo = { nome, situacao, avaliacao, observacao };

    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoJogo),
    });

    form.reset();
    carregarJogos();
  });
});

async function carregarJogos() {
  const lista = document.getElementById("jogos-lista");
  lista.innerHTML = "";

  const res = await fetch(API_URL);
  const jogos = await res.json();

  jogos.forEach((jogo) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${jogo.nome}</strong> - 
      ${jogo.situacao} - 
      ${jogo.avaliacao} <br/>
      <small>${jogo.observacao || ""}</small>
    `;
    lista.appendChild(li);
  });
}
