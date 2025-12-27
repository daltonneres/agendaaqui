const tabela = document.getElementById("tabela");

const agendamentos = [
  {
    nome: "João Silva",
    telefone: "46 99999-1111",
    servico: "Corte de Cabelo",
    data: "10/01/2026",
    hora: "14:00",
    status: "confirmado"
  },
  {
    nome: "Maria Oliveira",
    telefone: "46 98888-2222",
    servico: "Barba",
    data: "11/01/2026",
    hora: "16:30",
    status: "pendente"
  },
  {
    nome: "Carlos Souza",
    telefone: "46 97777-3333",
    servico: "Corte + Barba",
    data: "12/01/2026",
    hora: "10:00",
    status: "cancelado"
  }
];

function render() {
  tabela.innerHTML = "";
  agendamentos.forEach(a => {
    tabela.innerHTML += `
      <tr>
        <td>${a.nome}</td>
        <td>${a.telefone}</td>
        <td>${a.servico}</td>
        <td>${a.data}</td>
        <td>${a.hora}</td>
        <td><span class="status ${a.status}">${a.status}</span></td>
      </tr>
    `;
  });
}

render();

function exportarCSV() {
  let csv = "Nome,Telefone,Serviço,Data,Hora,Status\n";
  agendamentos.forEach(a => {
    csv += `${a.nome},${a.telefone},${a.servico},${a.data},${a.hora},${a.status}\n`;
  });

  const blob = new Blob([csv], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "agendamentos.csv";
  link.click();
}
