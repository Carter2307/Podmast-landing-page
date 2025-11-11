import { FOOTER_LINKS } from '../../data/links.ts';
import { Logo } from '../atoms/Logo.tsx';
import { NavLink } from '../atoms/NavLink.tsx';
import { getIcon } from '../../assets/Icons.tsx';

const Footer = () => {
  const { items, description, legal, mention, contact } = FOOTER_LINKS;
  const [contactItem, ...socialItems] = contact.links;

  return (
    <footer className={'footer'}>
      <div className={'footer__container'}>
        <div className={'footer__top'}>
          <div className={'footer__brand'}>
            <Logo />
            <p>{description}</p>
          </div>
          <nav className={'footer__nav'}>
            {items.map((item) => {
              return (
                <div className={'footer__nav__section'} key={item.title}>
                  <h4>{item.title}</h4>

                  <ul>
                    {item.links.map((link) => {
                      return (
                        <li className={'footer__nav__item'} key={link.label}>
                          <NavLink href={link.link}>{link.label}</NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}

            {/* Get in touch*/}
            <div className={'footer__nav__section'}>
              <h4>{contact.title}</h4>

              <ul>
                <li className={'footer__nav__item'}>
                  <NavLink href={contactItem.link}>{contactItem.label}</NavLink>
                </li>
                <li className={'footer__nav__item'}>
                  {socialItems.map((socialIcon) => {
                    const icon = getIcon(socialIcon.icon as string);
                    return (
                      <NavLink href={socialIcon.link} key={socialIcon.label}>
                        {icon}
                      </NavLink>
                    );
                  })}
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <hr className={'divider'} />

        <div className={'footer__bottom'}>
          <p>{mention}</p>
          <ul>
            {legal.map((link) => {
              return (
                <li key={link.label}>
                  <NavLink href={link.link}>{link.label}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
