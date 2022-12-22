import { render, screen } from '@testing-library/react'
import CharcterListItem from './index'

describe('<CharcterListItem />', () => {
  it('renders the component', () => {
    render(
      <CharcterListItem
        character={{
          id: 1,
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        }}
      />
    )

    expect(screen.getByAltText('rick and morty')).toBeInTheDocument()
  })
})
