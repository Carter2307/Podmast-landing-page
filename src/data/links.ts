const SLOGANG =
  'Our solutions make production faster and cheaper, Contact us for more information'

const currentYear = new Date().getUTCFullYear()

export interface NavLinkItem {
  label: string
  url: string
}

const NAV_LINKS: NavLinkItem[] = [
  {
    label: 'Home',
    url: '#',
  },
  {
    label: 'About',
    url: '#',
  },
  {
    label: 'Services',
    url: '#',
  },
  {
    label: 'Contact',
    url: '#',
  },
]

const FOOTER_LINKS = {
  description: SLOGANG,
  items: [
    {
      title: 'Company',
      links: [
        { label: 'About Us', link: '#' },
        { label: 'Customers', link: '#' },
        {
          label: 'Newsroom',
          link: '#',
        },
        { label: 'Events', link: '#' },
      ],
    },
    {
      title: 'Industries',
      links: [
        { label: 'Operation Manufacturing', link: '#' },
        {
          label: 'Industrial Manufacturing',
          link: '#',
        },
        { label: 'High Tech & Electronics', link: '#' },
        { label: 'Automobile', link: '#' },
      ],
    },
    {
      title: 'Products',
      links: [
        { label: 'User and Factory Connected System', link: '#' },
        {
          label: 'Enterprise Resource Planning',
          link: '#',
        },
        { label: 'Quality Management System', link: '#' },
        { label: 'Supply Chain Planning', link: '#' },
      ],
    },
    {
      title: 'Get in Touch',
      type: 'social',
      links: [
        { label: 'info@prodmast.com', link: 'mailto:info@prodmast.com' },
        {
          label: 'LinkedIn',
          link: '#',
        },
        { label: 'Twitter', link: '#' },
        { label: 'YouTube', link: '#' },
        { label: 'Facebook', link: '#' },
      ],
    },
  ],
  legal: [
    {
      label: 'Terms & Conditions',
      link: '#',
    },
    {
      label: 'Privacy Policy',
      link: '#',
    },
  ],
  mention: `© ${currentYear}. All rights reserved`,
}

export { NAV_LINKS, FOOTER_LINKS }
