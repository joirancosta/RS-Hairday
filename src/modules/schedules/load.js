import { scheduleFetchByDay } from "../../services/shedule-fetch-by-day.js";
import { schedulesShow } from "../schedules/show.js";
import { hoursLoad } from "../form/hours-load.js";

// Seleciona o input de data
const selectedDate = document.getElementById("date")
export async function schedulesDay() {
  // Busca na API os agendamentos para carregar do lado direito da tela

  // Obtém  a data do input
  const date = selectedDate.value
  // Busca na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({date})
  // console.log(dailySchedules)
  // Exibe os agendamentos
  schedulesShow({dailySchedules})
  // Renderiza as horas disponíveis
  hoursLoad({date})
  // Os horários disponíveis (horário futuro + não agendado) do lado esquerdo (form)
}