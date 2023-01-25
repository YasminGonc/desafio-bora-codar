import { ReactNode } from 'react'
import { ButtonComponent } from './styles'

export interface ButtonProps {
  text: string
  type: 'primary' | 'secondary' | 'tertiary' | 'hoverPrimary' | 'hoverSecondary'
  focus?: boolean
  disabled?: boolean
  children?: ReactNode
}

export function Button({
  text,
  type,
  focus = false,
  disabled = false,
  children,
}: ButtonProps) {
  return (
    <ButtonComponent type={type} focus={focus} disabled={disabled}>
      {children}
      {text}
    </ButtonComponent>
  )
}
