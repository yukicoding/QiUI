import React, { useState } from 'react'
import classNames from 'classnames'

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
}

export enum ButtonType {
  Primiary = 'primary',
  Default = 'default ',
  Danger = 'danger',
  Link = 'link',
}

interface BaseButtonProps {
  className?: string
  disable?: boolean
  size?: ButtonSize
  btnType?: ButtonType
  children: React.ReactNode
  href?: string
}
type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<ButtonProps> = (props) => {
  const { btnType, className, disable, size, children, href, ...restProps } =
    props
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disable: btnType === ButtonType.Link && disable,
  })
  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    )
  } else {
    return (
      <button className={classes} disabled={disable} {...restProps}>
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  btnType: ButtonType.Default,
  disable: false,
}
export default Button
