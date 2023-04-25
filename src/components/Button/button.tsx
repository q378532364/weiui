import React from 'react'
import type { ButtonHTMLAttributes } from 'react'

type themeType = 'default' | 'primary' | 'danger' | 'warning' | 'success'
interface ButtonProps {
  theme: themeType
  type: 'sumit' | 'rest' | 'button'
}

const Button = (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
  const { theme = 'default', type = 'button' } = props
  return <button className={`w-btn-${theme}`}></button>
}

export default Button
