let seconds = 0
let timer
function startTime(seconds) {
  const data = new Date(seconds * 1000)
  return data.toLocaleTimeString('pt-BR',{
    hour12: false, 
    timeZone: 'UTC'
  })
}

start.addEventListener('click', () => {
  clearInterval(timer)
  textTimer.classList.remove('color')
  timer = setInterval(() => {
    seconds++
    textTimer.textContent = startTime(seconds)
  }, 1000)
})

pause.addEventListener('click', () => {
  clearInterval(timer)
  textTimer.classList.add('color')
})

cancel.addEventListener('click', () => {
  seconds = 0
  clearInterval(timer)
  textTimer.textContent = startTime(seconds)
  textTimer.classList.remove('color')
})

