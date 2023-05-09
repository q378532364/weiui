import React from 'react'
import classNames from 'classnames'
import './input.scss'

const Input = React.forwardRef(
  (props: any, ref: React.ForwardedRef<HTMLInputElement>) => {
    return (
      <>
        {React.createElement(
          'input',
          {
            className: classNames(['wei__input', {}]),
            ...props
          },
          <span>21321</span>
        )}
      </>
    )
  }
)

export default Input
