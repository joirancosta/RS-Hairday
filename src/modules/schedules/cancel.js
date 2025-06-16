const periods = document.querySelectorAll(".period")
// console.log(periods)
// Gera evento de click para cada lista (manhã, tarde e noite)
periods.forEach((period) => {
  // Captura o evento de click na lista
  period.addEventListener("click", (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // Obtém a li pai do elemento clicado
      const item = event.target.closest("li")
      // console.log(item)
      const { id } = item.dataset
      // console.log(id)
      if (id) {
        const isConfirm = confirm("Tem certeza que desejas cancelar o agendamento?")
        if (isConfirm) {
          console.log("Remover")
        }
      }
    }
  })
})