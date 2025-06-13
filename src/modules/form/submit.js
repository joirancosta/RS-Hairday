import dayjs from "dayjs";

const form = document.querySelector("form")
const clientName =  document.getElementById("client")
const selectedDate = document.getElementById("date")

// Data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")
// Carrega a data atual
selectedDate.value = inputToday
// Define a data mínima como sendo a data atual
selectedDate.min = inputToday

form.onsubmit = (event) => {
  // Previne o comportamento padrão de carregamento da página
  event.preventDefault()
  try {
    // Recuperando o nome do cliente
    const name = clientName.value.trim()
    if (!name){
      return alert("Informe o nome do cliente!")
    }
    const hourSelected = document.querySelector(".hour-selected")
    // Recuperando o horário selecionado
    if (!hourSelected){
      return alert("Selecione a hora!")
    } 
    // Recupera somente a hora
    const [hour] = hourSelected.innerText.split(":")
    // Insere a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour")
    // console.log(when)
    // Gera ID
    const id = new Date().getTime()
    console.log({
      id,name,when
    })
  } catch (error) {
    alert("Não foi possível realizar o agendamento!")
    console.log(error)
  }
}