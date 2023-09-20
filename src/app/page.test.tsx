import { fireEvent, render, screen } from '@testing-library/react'
import Home from './page'

it('App Router: Works with Client Components (React State)', async () => {
  render(<Home />)
  expect(await screen.findByText("Hello World")).toBeVisible()
})
