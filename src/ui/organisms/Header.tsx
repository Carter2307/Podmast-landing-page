import { Logo } from '../atoms/Logo.tsx';
import { NavMenu } from '../molecules/NavMenu.tsx';
import { NAV_LINKS } from '../../data/links.ts';
import { HamburgerMenu } from '../atoms/HamburgerMenu.tsx';
import { Button } from '../atoms/Button.tsx';
import { useState } from 'react';
import { useWindowSize } from '@uidotdev/usehooks';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { width } = useWindowSize();
  const isLgScreen = (width || 0) >= 1080;

  return (
    <header className="header">
      <Logo />
      <NavMenu links={NAV_LINKS} open={openMenu} />

      <div className={'header__cta'}>
        <Button variant={'primary'}>Contact</Button>

        {!isLgScreen && (
          <HamburgerMenu handleChange={(state) => setOpenMenu(state)} />
        )}
      </div>
    </header>
  );
};

export { Header };
