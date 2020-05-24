import theme from '@theme-ui/preset-tailwind';

export const links = {
  ...(theme.links && theme.links),
  nav: {
    display: 'block',
    width: '100%',
    px: 2,
    py: 2,
    color: 'inherit',
    textDecoration: 'none',
    fontSize: 1,
    fontWeight: 'bold',
    bg: 'transparent',
    transitionProperty: 'background-color',
    transitionTimingFunction: 'ease-out',
    transitionDuration: '.2s',
    borderRadius: 2,
    '&:hover': {
      bg: 'highlight',
    },
    '&.active': {
      color: 'primary',
      bg: 'highlight',
    },
  },
};
