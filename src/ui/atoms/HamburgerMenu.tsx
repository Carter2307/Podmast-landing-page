import { useState } from 'react'
import * as React from 'react'
import classNames from 'classnames'

interface HamburgerMenuProps extends React.ComponentProps<'button'> {
  handleChange?: (state: boolean) => void
}

const HamburgerMenu = (props: HamburgerMenuProps) => {
  const { handleChange, className, ...rest } = props
  const [open, setOpen] = useState(false)
  const classnames = classNames('hamburger-menu', className)

  return (
    <button
      data-opened={open}
      className={classnames}
      onClick={() => {
        setOpen(!open)
        handleChange?.(!open)
      }}
      {...rest}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}

export { HamburgerMenu }
