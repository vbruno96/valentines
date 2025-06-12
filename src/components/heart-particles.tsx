import type { Container, ISourceOptions } from '@tsparticles/engine'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { useEffect, useMemo, useState } from 'react'

export function HeartParticles() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container)
  }

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 120,
      pauseOnOutsideViewport: true,
      smooth: true,
      fullScreen: {
        zIndex: -1,
      },
      particles: {
        move: {
          direction: 'bottom',
          enable: true,
          outModes: {
            default: 'out',
          },
          size: true,
          speed: {
            min: 1,
            max: 3,
          },
        },
        number: {
          value: 500,
          density: {
            enable: true,
            area: 800,
          },
        },
        opacity: {
          value: 1,
          animation: {
            enable: false,
            startValue: 'max',
            destroy: 'min',
            speed: 0.3,
            sync: true,
          },
        },
        rotate: {
          value: {
            min: 0,
            max: 360,
          },
          direction: 'random',
          move: true,
          animation: {
            enable: true,
            speed: 60,
          },
        },
        tilt: {
          direction: 'random',
          enable: true,
          move: true,
          value: {
            min: 0,
            max: 360,
          },
          animation: {
            enable: true,
            speed: 60,
          },
        },
        shape: {
          type: 'emoji',
          options: {
            emoji: {
              particles: {
                size: {
                  value: 8,
                },
              },
              value: ['❤️', '🩷', '💜', '🩵'],
            },
          },
        },
        size: {
          value: {
            min: 2,
            max: 4,
          },
        },
        roll: {
          darken: {
            enable: true,
            value: 30,
          },
          enlighten: {
            enable: true,
            value: 30,
          },
          enable: true,
          speed: {
            min: 15,
            max: 25,
          },
        },
        wobble: {
          distance: 30,
          enable: true,
          move: true,
          speed: {
            min: -15,
            max: 15,
          },
        },
      },
      detectRetina: true,
    }),
    []
  )

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="h-1/2"
      />
    )
  }

  return
}
