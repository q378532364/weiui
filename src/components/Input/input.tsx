import React from 'react'
import classNames from 'classnames'
import styles from '../../styles/_variablex.scss'
import './input.scss'

interface InputProps {
  suffix: React.ReactNode
}

const Input = React.forwardRef(
  (
    props: React.InputHTMLAttributes<HTMLInputElement> & Partial<InputProps>,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const { suffix } = props
    return (
      <>
        {React.createElement(
          'div',
          {
            className: classNames([`${styles.classPrefix}__input`])
          },

          React.createElement('input', {
            className: classNames([
              `${styles.classPrefix}__input__inner`,
              {
                [`${styles.classPrefix}__input__suffix`]: suffix
              }
            ]),
            ...props
          }),
          <>
            {
              <span
                className={classNames([
                  `${styles.classPrefix}__input__suffix`
                ])}>
                {suffix}
              </span>
            }
          </>
        )}
      </>
    )
  }
)

export default Input
