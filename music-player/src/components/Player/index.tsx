import React, { useEffect, useRef, useState } from 'react'
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
import { timeFormatter } from '../../utils/timeFormatter'
import { ButtonWithTooltip } from '../ButtonWithTooltip'

interface PlayerProps {
  size: 'full' | 'smallFirst' | 'smallSecond'
  musicName: string
  artist: string
  music: string
  currentMusic: string
}

export function Player({
  size,
  musicName,
  artist,
  music,
  currentMusic,
}: PlayerProps) {
  const song = useRef(new Audio(music))
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [timeLeft, setTimeLeft] = useState(0)
  const [currentMusicIndex, setCurrentMusicIndex] = useState<string | null>(
    null,
  )

  // const [currentTargetName, setCurrentTargetName] = useState('0')

  const [playSong, setPlaySong] = useState(false)
  const [pauseSong, setPauseSong] = useState(true)
  const [forwardSong, setForwardSong] = useState(true)
  const [rewindSong, setRewindSong] = useState(true)

  const [minutes, seconds] = timeFormatter(currentTime)
  const [minutesLeft, secondsLeft] = timeFormatter(timeLeft)

  function handlePlayMusic(event: React.MouseEvent<HTMLButtonElement>) {
    song.current.play()
    setPauseSong(false)
    setPlaySong(true)
    setForwardSong(false)
    setRewindSong(false)

    setCurrentMusicIndex(currentMusic)

    console.log(event.currentTarget.name)
    console.log(song.current.src)
    if (
      song.current.src ===
      'http://127.0.0.1:5173/src/assets/geleira-do-tempo.mp3'
    ) {
      if (event.currentTarget.name !== '1') {
        // event.currentTarget.disabled = true
        setPlaySong(false)
      }
    }
    // if (event.currentTarget.name !== currentMusicIndex) {
    //   // setPlaySong(false)
    //   console.log('ok')
    // }
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
      setForwardSong(true)
      setRewindSong(true)
    }
  }, [currentTime])

  // console.log(currentMusicIndex)

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
          onClickFunction={(event) => handlePlayMusic(event)}
          disabled={playSong}
          name={currentMusic}
        >
          <Play weight={'fill'} />
        </ButtonWithTooltip>

        {song.current.duration === currentTime && (
          <ButtonWithTooltip
            note="Replay"
            onClickFunction={(event) => handlePlayMusic(event)}
          >
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
