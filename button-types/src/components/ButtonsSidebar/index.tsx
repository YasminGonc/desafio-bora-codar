import { ButtonsSidebarContainer, TableContainer } from './styles'

export function ButtonsSidebar() {
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
          </tr>

          <tr>
            <td>hover</td>
          </tr>

          <tr>
            <td>focus</td>
          </tr>

          <tr>
            <td>disabled</td>
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
