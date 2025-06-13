export function hoursClick(){
  const hours = document.querySelectorAll(".hour-available")
  // console.log(hours)
  // Remove a classe hour-selected de todas as li não selecionadas
  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected")
      })
      selected.target.classList.add("hour-selected")
    })
  })

}