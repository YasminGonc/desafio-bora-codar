import { Button, ButtonProps } from '../Button'
import { ButtonsSidebarContainer, TableContainer } from './styles'

export function ButtonsSidebar() {
  const defaultButtons: ButtonProps[] = [
    {
      text: 'default primary',
      type: 'primary',
    },
    {
      text: 'default secondary',
      type: 'secondary',
    },
    {
      text: 'default tertiary',
      type: 'tertiary',
    },
  ]

  const hoverButtons: ButtonProps[] = [
    {
      text: 'hover primary',
      type: 'hoverPrimary',
    },
    {
      text: 'hover secondary',
      type: 'hoverSecondary',
    },
    {
      text: 'hover tertiary',
      type: 'tertiary',
    },
  ]

  const focusButtons: ButtonProps[] = [
    {
      text: 'focus primary',
      type: 'primary',
    },
    {
      text: 'focus secondary',
      type: 'secondary',
    },
    {
      text: 'focus tertiary',
      type: 'tertiary',
    },
  ]

  const disabledButtons: ButtonProps[] = [
    {
      text: 'disabled primary',
      type: 'primary',
    },
    {
      text: 'disabled secondary',
      type: 'secondary',
    },
    {
      text: 'disabled tertiary',
      type: 'tertiary',
    },
  ]

  return (
    <ButtonsSidebarContainer>
      <h2>Tipos de botão</h2>
      <p>
        Dentro de um layout, botões servem para destacar ações importantes a
        serem tomadas.
      </p>
      <p>Acompanhe abaixo um exemplo de tipos e propriedades.</p>

      <TableContainer>
        <thead>
          <tr>
            <th />
            <th>botão primário</th>
            <th>botão secundário</th>
            <th>botão terciário</th>
            <th>cursor</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>default</td>
            {defaultButtons.map((button) => {
              return (
                <td key={button.type}>
                  <Button text={button.text} type={button.type} />
                </td>
              )
            })}
          </tr>

          <tr>
            <td>hover</td>
            {hoverButtons.map((button) => {
              return (
                <td key={button.type}>
                  <Button text={button.text} type={button.type} />
                </td>
              )
            })}
          </tr>

          <tr>
            <td>focus</td>
            {focusButtons.map((button) => {
              return (
                <td key={button.type}>
                  <Button text={button.text} type={button.type} focus />
                </td>
              )
            })}
          </tr>

          <tr>
            <td>disabled</td>
            {disabledButtons.map((button) => {
              return (
                <td key={button.type}>
                  <Button text={button.text} type={button.type} disabled />
                </td>
              )
            })}
          </tr>

          <tr>
            <td>loading</td>
          </tr>

          <tr>
            <td>movable</td>
          </tr>
        </tbody>
      </TableContainer>
    </ButtonsSidebarContainer>
  )
}
