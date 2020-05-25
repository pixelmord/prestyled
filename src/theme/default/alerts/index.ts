import theme from '@theme-ui/preset-tailwind';

export const alerts = {
  ...(theme.alerts && theme.alerts),
  primary: {
    color: 'background',
  },
  secondary: {
    color: 'background',
    bg: 'secondary',
  },
  accent: {
    color: 'background',
    bg: 'accent',
  },
  highlight: {
    color: 'text',
    bg: 'highlight',
  },
};
