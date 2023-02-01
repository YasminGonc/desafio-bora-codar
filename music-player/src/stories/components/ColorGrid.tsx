import { getContrast } from 'polished'

export function ColorGrid() {
  const colors = [
    {
      name: 'purple100',
      color: '#AA92C3',
    },
    {
      name: 'purple200',
      color: '#2A2141',
    },
    {
      name: 'purple300',
      color: '#0F0D13',
    },
    {
      name: 'white',
      color: '#E1E1E6',
    },
    {
      name: 'gray',
      color: '#C4C4CC',
    },
  ]
  return colors.map((color) => {
    return (
      <div
        key={color.name}
        style={{ backgroundColor: color.color, padding: '2rem' }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: getContrast(color.color, '#FFF') < 3.5 ? '#000' : '#FFF',
          }}
        >
          <strong>${color.name}</strong>
          <span>{color.color}</span>
        </div>
      </div>
    )
  })
}
