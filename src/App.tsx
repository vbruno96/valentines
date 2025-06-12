import { useState } from 'react'
import { HeartParticles } from './components/heart-particles'
import { Page } from './components/page'
import { Splash } from './components/splash'

export function App() {
  const [isShowing, setIsShowing] = useState(false)

  function handleShowThePage() {
    setIsShowing(!isShowing)
  }

  return (
    <div className="min-h-dvh relative overflow-y-hidden">
      <Page showing={isShowing} />
      <Splash showing={!isShowing} onShowThePage={handleShowThePage} />
      {isShowing && <HeartParticles />}
    </div>
  )
}
