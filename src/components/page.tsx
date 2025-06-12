import { Carrousel } from './carrousel'
import { DurationTime } from './duration'
import { Spotify } from './spotify'

interface PageProps {
  showing: boolean
}

export function Page({ showing }: PageProps) {
  return (
    <div
      data-show={showing}
      className="absolute inset-0 -translate-y-full data-[show=true]:translate-y-0 h-dvh transition-transform duration-1000 overflow-y-auto"
    >
      <div className="max-w-4xl mx-auto pt-8 space-y-8">
        <Spotify />
        <Carrousel />
        <section className="bg-gradient-to-b from-zinc-900/0 via-zinc-900/60 to-zinc-900 w-full space-y-4 pb-8 px-6 xl:px-0 text-lg">
          <div className="space-y-2 text-xl font-semibold text-center">
            <p>Eu te ❤️ há:</p>
            <DurationTime />
          </div>
          <div className="h-px bg-zinc-50 w-full" />
          <p>
            Desde que eu te conheci minha vida ser tornou mais alegre, meus dias
            fizeram mais sentido, estar com você me faz ficar mais leve, a cada
            ano junto é uma aventura nova, de dates na Europa à um apê comprado.
            Sou muito grato por te ter na minha vida gatinha, espero que o nosso
            amor seja sempre leve e tranquilo, as vezes eu tenho medo de pensar
            sobre o futuro mas de saber que você estará ao meu lado me faz ficar
            tranquilo. Feliz dia dos namorados amor. Ser seu namorado é bom pra
            caralho {'<3'}
          </p>
        </section>
      </div>
    </div>
  )
}
