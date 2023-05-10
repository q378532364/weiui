import React, { forwardRef } from 'react'
import type { ButtonHTMLAttributes } from 'react'
import classnames from 'classnames'
import styles from '../../styles/_variablex.scss'
import './button.scss'

type themeType = 'default' | 'primary' | 'danger' | 'warning' | 'success'

interface ButtonProps {
  theme: themeType
  disabled: boolean
  loading: boolean
  size: 'small' | 'large'
  block: boolean
  variant: 'default' | 'outline' | 'text' | 'dashed' // 按钮类型 描边 文本 幽灵
  shape: 'default' | 'square' | 'round' | 'circle'
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
      shape,

      ...restProps
    } = props

    return React.createElement(
      'button',
      {
        ref,
        disabled: disabled,
        className: classnames([
          `${styles.classPrefix}__button`,

          `${styles.classPrefix}__button--variant--${variant}`,

          `${styles.classPrefix}__button--theme--${theme}`,
          shape !== 'default' &&
            `${styles.classPrefix}__button--shape--${shape}`,

          {
            [`${styles.classPrefix}__button--loading`]: loading || disabled,
            [`${styles.classPrefix}__button--disabled`]: disabled,
            [`${styles.classPrefix}__button--sm`]: size === 'small',
            [`${styles.classPrefix}__button--lg`]: size === 'large',
            [`${styles.classPrefix}__button--full`]: block
          },

          className
        ]),
        ...restProps
      },

      <>
        <span className={classnames([`${styles.classPrefix}__button__text`])}>
          {children}
        </span>
      </>
    )
  }
)
Button.defaultProps = {
  theme: 'default',
  variant: 'default',
  shape: 'default'
}
export default Button
