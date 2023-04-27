import React, { forwardRef } from 'react'
import type { ButtonHTMLAttributes } from 'react'
import classnames from 'classnames'
import styles from '../../styles/_variablex.scss'
import './button.scss'

type themeType = 'default' | 'primary' | 'danger' | 'warning' | 'success'
type btype = 'submit' | 'button' | 'reset'
interface ButtonProps {
  theme: themeType
  type: btype
  disabled: boolean
  loading: boolean
  size: 'small' | 'large'
  block: boolean
  variant: 'default' | 'outline' | 'text' | 'dashed' // 按钮类型 描边 文本 幽灵
}

const Button = forwardRef(
  (
    props: Partial<ButtonProps> & ButtonHTMLAttributes<HTMLElement>,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    const {
      theme,
      className,
      disabled,
      loading,
      size,
      block,
      children,
      variant,
      ...restProps
    } = props

    return React.createElement(
      'button',
      {
        ref,
        className: classnames([
          `${styles.classPrefix}__button`,
          `${styles.classPrefix}__button--variant--${variant}`,
          `${styles.classPrefix}__button--theme--${theme}`,

          {
            [`${styles.classPrefix}__button--loading`]: loading || disabled,
            [`${styles.classPrefix}__button--disable`]: disabled,
            [`${styles.classPrefix}__button--sm`]: size === 'small',
            [`${styles.classPrefix}__button--lg`]: size === 'large',
            [`${styles.classPrefix}__button--full`]: block,
          },

          className,
        ]),
        ...restProps,
      },
      <>{children}</>
    )
  }
)
Button.defaultProps = {
  theme: 'default',
  type: 'submit',
  variant: 'default',
}
export default Button
