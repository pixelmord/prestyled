import theme from '@theme-ui/preset-tailwind';

export const badges = {
  ...theme.badges,
  primary: {
    color: 'background',
  },
  highlight: {
    color: 'text',
    bg: 'highlight',
  },
  accent: {
    color: 'background',
    bg: 'accent',
  },
  outline: {
    color: 'primary',
    bg: 'transparent',
    boxShadow: 'inset 0 0 0 1px',
  },
  circle: {
    height: 16,
    minWidth: 16,
    lineHeight: '16px',
    textAlign: 'center',
    borderRadius: 9999,
  },
};
