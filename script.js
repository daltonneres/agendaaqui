const form = document.getElementById("agendamentoForm");
const mensagem = document.getElementById("mensagem");
const modal = document.getElementById("modal");

form.addEventListener("submit", e => {
  e.preventDefault();

  const agendamento = {
    nome: nome.value,
    telefone: telefone.value,
    servico: servico.value,
    data: data.value,
    hora: hora.value,
    criadoEm: new Date().toLocaleString()
  };

  const lista = JSON.parse(localStorage.getItem("agendamentos")) || [];
  lista.push(agendamento);
  localStorage.setItem("agendamentos", JSON.stringify(lista));

  mensagem.textContent = "✅ Horário agendado com sucesso!";
  mensagem.style.color = "#7CFF7C";
  form.reset();
});

function abrirModal() {
  modal.style.display = "flex";
}
function fecharModal() {
  modal.style.display = "none";
}
