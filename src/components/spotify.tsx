export function Spotify() {
  return (
    <div className="mx-auto w-80 md:w-2xl h-40">
      <iframe
        className="rounded-xl w-full h-full"
        src="https://open.spotify.com/embed/track/47Slg6LuqLaX0VodpSCvPt?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Web Player"
      />
    </div>
  )
}
