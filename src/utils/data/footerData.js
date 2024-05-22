import {
  Facebook,
  Twitter,
  Instagram,
  MailOutline,
  Phone,
  Room,
} from '@material-ui/icons';

// objects footer

export const e = [
  {
    id: 21,
    route: '/products/shirts',
    name: 'Shirts',
  },
  {
    id: 22,
    route: '/cart',
    name: 'My Cart',
  },

  {
    id: 23,
    route: '/products/coats',
    name: 'Coats',
  },
  {
    id: 24,
    route: '/',
    name: 'My Account',
  },
  {
    id: 25,
    route: '/products/jackets',
    name: 'Jackets',
  },
  {
    id: 26,
    route: '/',
    name: 'Privacy Policy',
  },

  {
    id: 27,
    route: '/',
    name: 'Home',
  },
  {
    id: 28,
    route: '/',
    name: 'Terms',
  },
];

export const social = [
  {
    id: 31,
    icon: <Facebook />,
    platform: 'Facebook',
    color: '3B5999',
    link: 'https://www.facebook.com/',
  },
  
  {
    id: 33,
    icon: <Instagram />,
    platform: 'Instagram',
    color: 'E4405F',
    link: 'https://www.instagram.com',
  },
];

export const contact = [
  {
    id: 331,
    icon: <Room style={{ marginRight: '10px' }} />,
    text: 'univarcity chowk bwp',
    url: 'https://www.google.com/search?q=univarcity+chowk+bwp+map&rlz=1C1CHBF_enPK1091PK1091&oq=univarcity+chowk+bwp+map&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQABgNGIAEMgkIAhAAGA0YgAQyCQgDEAAYDRiABDIJCAQQABgNGIAEMggIBRAAGBYYHjIICAYQABgWGB4yCAgHEAAYFhgeMggICBAAGBYYHjIICAkQABgWGB7SAQg4MDExajBqN6gCALACAA&sourceid=chrome&ie=UTF-8',
  },
  {
    id: 332,
    icon: <Phone style={{ marginRight: '10px' }} />,
    text: '+92 309 0977906',
    url: '',
  },
  {
    id: 333,
    icon: <MailOutline style={{ marginRight: '10px' }} />,
    text: 'aliasaeed1313@gmail.com',
    url: '',
  },
];
