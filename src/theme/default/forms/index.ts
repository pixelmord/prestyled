import theme from '@theme-ui/preset-tailwind';
import { Theme } from 'theme-ui';
export const forms = {
  ...(theme.forms && theme.forms),
  label: {
    fontSize: 1,
    fontWeight: 'bold',
  },
  input: {
    borderColor: 'gray',
    '&:focus': {
      borderColor: 'primary',
      boxShadow: (t: Theme): string => `0 0 0 2px ${t.colors?.primary}`,
      outline: 'none',
    },
  },
  select: {
    borderColor: 'gray',
    '&:focus': {
      borderColor: 'primary',
      boxShadow: (t: Theme): string => `0 0 0 2px ${t.colors?.primary}`,
      outline: 'none',
    },
  },
  textarea: {
    borderColor: 'gray',
    '&:focus': {
      borderColor: 'primary',
      boxShadow: (t: Theme): string => `0 0 0 2px ${t.colors?.primary}`,
      outline: 'none',
    },
  },
  slider: {
    bg: 'muted',
  },
};
