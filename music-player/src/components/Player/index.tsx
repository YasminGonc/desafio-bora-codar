import { useContext, useEffect, useRef, useState } from 'react'
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
import { timeFormatter } from '../../utils/timeFormatter'
import { ButtonWithTooltip } from '../ButtonWithTooltip'
import { MusicContext } from '../../context/musicContext'

export interface PlayerProps {
  size: 'full' | 'smallFirst' | 'smallSecond'
  musicName: string
  artist: string
  music: string
  musicId: string
  disable: boolean
}

export function Player({
  size,
  musicName,
  artist,
  music,
  musicId,
  disable,
}: PlayerProps) {
  const song = useRef(new Audio(music))
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [timeLeft, setTimeLeft] = useState(0)

  const [minutes, seconds] = timeFormatter(currentTime)
  const [minutesLeft, secondsLeft] = timeFormatter(timeLeft)

  const {
    handlePlayMusic,
    handlePauseMusic,
    handleForwardMusicTime,
    handleRewindMusicTime,
    disableButtons,
    playSong,
    pauseSong,
    forwardSong,
    rewindSong,
  } = useContext(MusicContext)

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
      disableButtons(song)
    }
  }, [currentTime, disableButtons])

  return (
    <PlayerContainer size={size}>
      <HeaderContainer display={size === 'full'}>
        <img src={largeImage} alt="" />
        <TextContainer>
          <h2>{musicName}</h2>
          <p>{artist}</p>
        </TextContainer>
      </HeaderContainer>

      <ButtonsContainer>
        <ButtonWithTooltip note="Voltar 10s">
          <button
            disabled={disable || rewindSong}
            onClick={() => handleRewindMusicTime(song)}
          >
            <Rewind weight={'fill'} />
          </button>
        </ButtonWithTooltip>

        <ButtonWithTooltip note="Pausar">
          <button
            disabled={disable || pauseSong}
            onClick={() => handlePauseMusic(song)}
          >
            <Pause weight={'fill'} />
          </button>
        </ButtonWithTooltip>

        <ButtonWithTooltip note="Play">
          <button
            disabled={playSong}
            onClick={() => handlePlayMusic(song, musicId)}
          >
            <Play weight={'fill'} />
          </button>
        </ButtonWithTooltip>

        <ButtonWithTooltip note="Avançar 10s">
          <button
            disabled={disable || forwardSong}
            onClick={() => handleForwardMusicTime(song)}
          >
            <FastForward weight={'fill'} />
          </button>
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
