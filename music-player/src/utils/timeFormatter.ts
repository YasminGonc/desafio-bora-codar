export function timeFormatter(time: number) {
  const minutesAmount = Math.floor(time / 60)
  const secondsAmount = Math.floor(time % 60)

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  return [minutes, seconds]
}
