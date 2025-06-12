interface SplashProps {
  showing: boolean
  onShowThePage: () => void
}

export function Splash({ showing, onShowThePage }: SplashProps) {
  return (
    <div
      data-show={showing}
      className="absolute data-[show=false]:translate-y-full flex items-center justify-center w-screen min-h-dvh h-full transition-transform duration-1000"
    >
      <button
        type="button"
        className="bg-transparent px-4 py-2 border border-bg-zinc-100 text-zinc-50 text-xl font-semibold rounded-lg hover:bg-purple-400 hover:border-purple-400 transition-colors"
        onClick={onShowThePage}
      >
        Clique aqui!
      </button>
    </div>
  )
}
