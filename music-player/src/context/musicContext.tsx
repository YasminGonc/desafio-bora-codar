import React, { createContext, ReactNode, useState } from 'react'

interface MusicContextProps {
  playSong: boolean
  pauseSong: boolean
  forwardSong: boolean
  rewindSong: boolean
  currentMusicId: string
  handlePlayMusic: (
    song: React.MutableRefObject<HTMLAudioElement>,
    id: string,
  ) => void
  handlePauseMusic: (song: React.MutableRefObject<HTMLAudioElement>) => void
  handleForwardMusicTime: (
    song: React.MutableRefObject<HTMLAudioElement>,
  ) => void
  handleRewindMusicTime: (
    song: React.MutableRefObject<HTMLAudioElement>,
  ) => void
  disableButtons: () => void
}

export const MusicContext = createContext({} as MusicContextProps)

interface MusicProviderProps {
  children: ReactNode
}

export function MusicProvider({ children }: MusicProviderProps) {
  const [playSong, setPlaySong] = useState(false)
  const [pauseSong, setPauseSong] = useState(true)
  const [forwardSong, setForwardSong] = useState(true)
  const [rewindSong, setRewindSong] = useState(true)
  const [currentMusicId, setCurrentMusicId] = useState('')

  function handlePlayMusic(
    song: React.MutableRefObject<HTMLAudioElement>,
    id: string,
  ) {
    song.current.play()
    setPauseSong(false)
    setPlaySong(true)
    setForwardSong(false)
    setRewindSong(false)
    setCurrentMusicId(id)
  }

  function handlePauseMusic(song: React.MutableRefObject<HTMLAudioElement>) {
    song.current.pause()
    setPauseSong(true)
    setPlaySong(false)
    setForwardSong(true)
    setRewindSong(true)
  }

  function handleForwardMusicTime(
    song: React.MutableRefObject<HTMLAudioElement>,
  ) {
    song.current.currentTime += 10
  }

  function handleRewindMusicTime(
    song: React.MutableRefObject<HTMLAudioElement>,
  ) {
    song.current.currentTime -= 10
  }

  function disableButtons() {
    setPlaySong(true)
    setPauseSong(true)
    setForwardSong(true)
    setRewindSong(true)
  }

  return (
    <MusicContext.Provider
      value={{
        playSong,
        pauseSong,
        forwardSong,
        rewindSong,
        currentMusicId,
        handlePlayMusic,
        handlePauseMusic,
        handleForwardMusicTime,
        handleRewindMusicTime,
        disableButtons,
      }}
    >
      {children}
    </MusicContext.Provider>
  )
}
