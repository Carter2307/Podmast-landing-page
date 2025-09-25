import * as React from 'react'

type NavLinkProps = React.ComponentProps<'a'> & {}

const NavLink = (props: NavLinkProps) => {
  const { children, ...rest } = props
  return (
    <a className={'nav__link'} {...rest}>
      {children}
    </a>
  )
}

export { NavLink }
export type { NavLinkProps }
