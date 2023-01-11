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
  const song = useRef(new Audio(galeriaDoTempo))
  const [progress, setProgress] = useState(0)
  const [playSong, setPlaySong] = useState(false)
  const [pauseSong, setPauseSong] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const [timeLeft, setTimeLeft] = useState(0)

  const minutesAmount = Math.floor(currentTime / 60)
  const secondsAmount = Math.floor(currentTime % 60)

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  const minutesLeftAmount = Math.floor(timeLeft / 60)
  const secondsLeftAmount = Math.floor(timeLeft % 60)

  const minutesLeft = String(minutesLeftAmount).padStart(2, '0')
  const secondsLeft = String(secondsLeftAmount).padStart(2, '0')

  function handlePlayMusic() {
    song.current.play()
    setPauseSong(false)
    setPlaySong(true)
  }

  function handlePauseMusic() {
    song.current.pause()
    setPauseSong(true)
    setPlaySong(false)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(song.current.currentTime)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (song.current.duration) {
      setProgress(Math.round((currentTime / song.current.duration) * 100))
      setTimeLeft(song.current.duration - currentTime)
    }
  }, [currentTime])

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
        {song.current.duration === currentTime && (
          <button>
            <FastForward weight={'fill'} />
          </button>
        )}
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
        <p>{`${minutes}:${seconds}`}</p>
        <p>{`${minutesLeft}:${secondsLeft}`}</p>
      </TimeContainer>
    </PlayerContainer>
  )
}
