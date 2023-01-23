import { useEffect, useRef, useState } from 'react'
import {
  ImageContainer,
  PageContainer,
  ProductCardContainer,
  ProductCode,
  TextContainer,
} from './styles'
import cauch from '../../assets/couch.png'
import cauchGif from '../../assets/couch-gif.gif'
import vectorTour from '../../assets/vector-tour.png'
import { ToastComponent } from '../ToastComponent'

export function ProductCard() {
  const [dynamicImage, setDynamicImage] = useState(false)
  const [open, setOpen] = useState(false)
  const timeRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timeRef.current)
  }, [])

  function handleDynamicImage() {
    if (dynamicImage) {
      setDynamicImage(false)
    } else {
      setDynamicImage(true)
    }
  }

  function handleAddToCart() {
    setOpen(false)
    window.clearTimeout(timeRef.current)
    timeRef.current = window.setTimeout(() => {
      setOpen(true)
    }, 100)
  }

  return (
    <PageContainer>
      <ProductCardContainer>
        <ImageContainer>
          <img src={dynamicImage ? cauchGif : cauch} alt="Sofá Margot" />
          <button onClick={handleDynamicImage}>
            {dynamicImage ? 'X' : <img src={vectorTour} alt="Tour 360" />}
          </button>
        </ImageContainer>

        <TextContainer>
          <ProductCode>Código: 42404</ProductCode>
          <h1>Sofá Margot II - Rosé</h1>
          <p>R$ 4.000</p>
          <ToastComponent open={open} setOpen={setOpen}>
            <button onClick={handleAddToCart}>Adicionar à cesta</button>
          </ToastComponent>
        </TextContainer>
      </ProductCardContainer>
    </PageContainer>
  )
}
