import { render, screen, within } from '@testing-library/react'
import CharactersList from './index'

const characters = [
  {
    id: 1,
    name: 'rick',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
  {
    id: 2,
    name: 'morty',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  },
]

describe('<CharactersList />', () => {
  it('should render list of 2 characters', () => {
    render(<CharactersList data={characters} />)

    const list = screen.getByRole('list')
    const { getAllByRole } = within(list)
    const items = getAllByRole('listitem')

    expect(items.length).toBe(2)
  })
})
