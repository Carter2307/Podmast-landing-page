import type { NavLinkItem } from '../../data/links.ts';
import { NavLink } from '../atoms/NavLink.tsx';
import * as React from 'react';

interface NavMenuProps extends React.ComponentProps<'nav'> {
  links: NavLinkItem[];
  open?: boolean;
}

const NavMenu = (props: NavMenuProps) => {
  const { links, open = false, ...rest } = props;

  return (
    <nav className={'nav'} data-nav-opened={open} {...rest}>
      <ul className={'nav__list'}>
        {links.map((link) => {
          return (
            <li className={'nav__list__item'} key={link.label}>
              <NavLink href={link.url} className={'nav__link'}>
                {link.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { NavMenu };
