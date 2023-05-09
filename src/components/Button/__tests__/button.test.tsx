import Button from '../button'
import { render } from '@testing-library/react'

test('test button', () => {
  const wrap = render(<Button>123</Button>)
  const element = wrap.queryAllByText('123')
  expect(element).toBeTruthy()
})

describe('test button compent', () => {
  it('should render the correct default button', () => {
    const wrap = render(<Button>123</Button>)
    const element = wrap.getByTestId('123')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('wei__button--theme--default')
  })
})
