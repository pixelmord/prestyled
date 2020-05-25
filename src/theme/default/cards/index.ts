import theme from '@theme-ui/preset-tailwind';

export const cards = {
  ...(theme.cards && theme.cards),
  default: {
    padding: 2,
    borderRadius: 4,
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
  },
};
