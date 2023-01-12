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
import {
  Play,
  FastForward,
  Rewind,
  Pause,
  ArrowClockwise,
} from 'phosphor-react'
import largeImage from '../../assets/largeImage.png'
import galeriaDoTempo from '../../assets/geleira-do-tempo.mp3'
// import teste from '../../assets/short-success-sound-glockenspiel-treasure-video-game-6346.mp3'
import { timeFormatter } from '../../utils/timeFormatter'
import { ButtonWithTooltip } from '../ButtonWithTooltip'

interface PlayerProps {
  size: 'full' | 'smallFirst' | 'smallSecond'
  music: string
  artist: string
}

export function Player({ size, music, artist }: PlayerProps) {
  const song = useRef(new Audio(galeriaDoTempo))
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [timeLeft, setTimeLeft] = useState(0)

  const [playSong, setPlaySong] = useState(false)
  const [pauseSong, setPauseSong] = useState(true)
  const [forwardSong, setForwardSong] = useState(true)
  const [rewindSong, setRewindSong] = useState(true)

  const [minutes, seconds] = timeFormatter(currentTime)
  const [minutesLeft, secondsLeft] = timeFormatter(timeLeft)

  function handlePlayMusic() {
    song.current.play()
    setPauseSong(false)
    setPlaySong(true)
    setForwardSong(false)
    setRewindSong(false)
  }

  function handlePauseMusic() {
    song.current.pause()
    setPauseSong(true)
    setPlaySong(false)
    setForwardSong(true)
    setRewindSong(true)
  }

  function handleForwardMusicTime() {
    song.current.currentTime += 10
  }

  function handleRewindMusicTime() {
    song.current.currentTime -= 10
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

    if (song.current.duration === currentTime) {
      setPlaySong(true)
      setPauseSong(true)
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
        <ButtonWithTooltip
          note="Voltar 10s"
          onClickFunction={handleRewindMusicTime}
          disabled={rewindSong}
        >
          <Rewind weight={'fill'} />
        </ButtonWithTooltip>

        <ButtonWithTooltip
          note="Pausar"
          onClickFunction={handlePauseMusic}
          disabled={pauseSong}
        >
          <Pause weight={'fill'} />
        </ButtonWithTooltip>

        <ButtonWithTooltip
          note="Play"
          onClickFunction={handlePlayMusic}
          disabled={playSong}
        >
          <Play weight={'fill'} />
        </ButtonWithTooltip>

        {song.current.duration === currentTime && (
          <ButtonWithTooltip note="Replay" onClickFunction={handlePlayMusic}>
            <ArrowClockwise weight={'fill'} />
          </ButtonWithTooltip>
        )}

        <ButtonWithTooltip
          note="Avançar 10s"
          onClickFunction={handleForwardMusicTime}
          disabled={forwardSong}
        >
          <FastForward weight={'fill'} />
        </ButtonWithTooltip>
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
