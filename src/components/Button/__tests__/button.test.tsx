import Button from '../button'
import styles from "../../../styles/_variablex.scss"
import { render } from '@testing-library/react'

const classPrefix = styles.classPrefix + '__'
test('test button', () => {
  const wrap = render(<Button>123</Button>)
  const element = wrap.queryAllByText('123')
  expect(element).toBeTruthy()
})

describe('test button compent', () => {
  it('should render the correct default button', () => {
    const wrap = render(<Button data-testid='test'>123</Button>)
    const element = wrap.getByTestId("test")
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass(classPrefix + 'button--theme--default')
  })
})
