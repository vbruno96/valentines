import { type Duration, intervalToDuration, setDefaultOptions } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useEffect, useState } from 'react'

setDefaultOptions({
  locale: ptBR,
})

export function DurationTime() {
  const [duration, setDuration] = useState<Duration>({})

  const usDate = new Date('2022-06-12T23:00:00.000Z')

  useEffect(() => {
    setInterval(() => {
      setDuration(
        intervalToDuration({
          start: usDate,
          end: new Date(),
        })
      )
    }, 1000)
  }, [usDate])

  return (
    <time className="block">
      {`${duration.years} anos, ${duration.months} meses, ${duration.days} dias, ${duration.hours} horas, ${duration.minutes} minutos e ${duration.seconds} segundos`}
    </time>
  )
}
