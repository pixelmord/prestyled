import theme from '@theme-ui/preset-tailwind';
const buttonCommon = {
  cursor: 'pointer',
  ml: 1,
  '&:first-of-type': {
    ml: 0,
  },
};
export const buttons = {
  ...theme.buttons,
  default: {
    ...buttonCommon,
    color: 'text',
    backgroundColor: 'grayLight',
    '&:hover': {
      backgroundColor: 'gray',
    },
  },
  primary: {
    variant: 'buttons.default',
    color: 'white',
    backgroundColor: 'primary',
    '&:hover': {
      backgroundColor: 'primaryHighlight',
    },
  },
  secondary: {
    variant: 'buttons.primary',
    color: 'background',
    bg: 'secondary',
  },
};
