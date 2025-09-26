import * as React from 'react';
import classNames from 'classnames';

type NavLinkProps = React.ComponentProps<'a'> & {};

const NavLink = (props: NavLinkProps) => {
  const { children, className, ...rest } = props;

  return (
    <a className={classNames('link', className)} {...rest}>
      {children}
    </a>
  );
};

export { NavLink };
export type { NavLinkProps };
