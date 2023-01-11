import { useEffect, useRef, useState } from 'react'
import {
  ButtonsContainer,
  HeaderContainer,
  PlayerContainer,
  ProgressIndicator,
  ProgressRoot,
  TextContainer,
  TimeContainer,
} from './styles'
import { Play, FastForward, Rewind, Pause } from 'phosphor-react'
import largeImage from '../../assets/largeImage.png'
import galeriaDoTempo from '../../assets/geleira-do-tempo.mp3'

interface PlayerProps {
  size: 'full' | 'smallFirst' | 'smallSecond'
  music: string
  artist: string
}

export function Player({ size, music, artist }: PlayerProps) {
  const [song, setSong] = useState(new Audio(galeriaDoTempo))
  const [progress, setProgress] = useState(0)
  const [playSong, setPlaySong] = useState(false)
  const [pauseSong, setPauseSong] = useState(true)

  const songDuration = song.duration

  // console.log(songDuration)

  const currentTimeRef = useRef(0)

  function handlePlayMusic() {
    song.play()
    setPauseSong(false)
    setPlaySong(true)
  }

  function handlePauseMusic() {
    song.pause()
    setPauseSong(true)
    setPlaySong(false)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      // const percentage = Math.floor((song.currentTime / songDuration) * 100)
      // console.log(percentage)
    }, 1000)
    const timer = setTimeout(() => {
      setProgress(10)
    }, 500)
    return () => clearTimeout(timer)
  })

  useEffect(() => {
    const interval = setInterval(() => {
      currentTimeRef.current = Math.random()
    }, 1000)

    // return () => clearInterval(interval)
  }, [])

  return (
    <PlayerContainer size={size}>
      <HeaderContainer display={size === 'full'}>
        <img src={largeImage} alt="" />
        <TextContainer>
          <h2>{music}</h2>
          <p>{artist}</p>
        </TextContainer>
      </HeaderContainer>

      <ButtonsContainer>
        <button>
          <Rewind weight={'fill'} />
        </button>
        <button onClick={handlePauseMusic} disabled={pauseSong}>
          <Pause weight={'fill'} />
        </button>
        <button onClick={handlePlayMusic} disabled={playSong}>
          <Play weight={'fill'} />
        </button>
        <button>
          <FastForward weight={'fill'} />
        </button>
      </ButtonsContainer>

      <ProgressRoot>
        <ProgressIndicator
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      </ProgressRoot>

      <TimeContainer>
        <p>00:00</p>
        <p>{currentTimeRef.current}</p>
      </TimeContainer>
    </PlayerContainer>
  )
}
