import { useState } from 'react'
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

export function ProductCard() {
  const [dynamicImage, setDynamicImage] = useState(false)

  function handleDynamicImage() {
    if (dynamicImage) {
      setDynamicImage(false)
    } else {
      setDynamicImage(true)
    }
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
          <button>Adicionar à cesta</button>
        </TextContainer>
      </ProductCardContainer>
    </PageContainer>
  )
}
