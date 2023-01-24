import { ButtonComponent } from './styles'

export interface ButtonProps {
  text: string
  type: 'primary' | 'secondary' | 'tertiary' | 'hoverPrimary' | 'hoverSecondary'
  focus?: boolean
  disabled?: boolean
}

export function Button({
  text,
  type,
  focus = false,
  disabled = false,
}: ButtonProps) {
  return (
    <ButtonComponent type={type} focus={focus} disabled={disabled}>
      {text}
    </ButtonComponent>
  )
}
