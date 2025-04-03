import { render, screen } from '@testing-library/react'
import { Main } from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // renderiza o componente
    render(<Main title="Title" />)
    // busca o elemento e verifica a existência

    expect(screen.getByRole('heading', { name: /Title/i })).toBeInTheDocument()
  })
})
