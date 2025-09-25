import * as React from 'react'
import classNames from 'classnames'

interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: 'primary' | 'secondary' | 'tertiary'
}

const Button = (props: ButtonProps) => {
  const { children, variant = 'primary', className, ...rest } = props
  const cn = classNames(
    'btn',
    {
      'btn-primary': variant === 'primary',
      'btn-secondary': variant === 'secondary',
      'btn-tertiary': variant === 'tertiary',
    },
    className
  )
  return (
    <button className={cn} {...rest}>
      {children}
    </button>
  )
}

export { Button }
