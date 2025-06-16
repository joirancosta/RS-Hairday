import { schedulesDay } from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel.js";

const periods = document.querySelectorAll(".period")
// console.log(periods)
// Gera evento de click para cada lista (manhã, tarde e noite)
periods.forEach((period) => {
  // Captura o evento de click na lista
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // Obtém a li pai do elemento clicado
      const item = event.target.closest("li")
      // console.log(item)
      // Pega o id do agendamento para remover
      const { id } = item.dataset
      // console.log(id)
      //  Confirma que o id selecionado
      if (id) {
        // Confirmar se o usuário quer cancelar
        const isConfirm = confirm("Tem certeza que desejas cancelar o agendamento?")
        if (isConfirm) {
          // console.log("Remover")
          // Faz a requisição na API para cancelar
          await scheduleCancel({ id })
          // Recarrega os agendamentos
          schedulesDay()
        }
      }
    }
  })
})