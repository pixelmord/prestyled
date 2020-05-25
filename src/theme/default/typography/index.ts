import theme from '@theme-ui/preset-tailwind';
import { mediaQueries } from '../mediaQueries';

export const fonts = {
  heading: `system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
  body: `system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
  mono: `Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace`,
};

export const fontSizes = [
  '0.625rem', // 0: 10px
  '0.75rem', // 1: 12px
  '0.875rem', // 2: 14px
  '1rem', // 3: 16px
  '1.0625rem', // 4: 17px
  '1.125rem', // 5: 18px
  '1.1875rem', // 6: 19px
  '1.25rem', // 7: 20px
  '1.5rem', // 8: 24px
  '1.5625rem', // 9: 25px
  '1.9375rem', // 10: 31px
  '2rem', // 11: 32px
  '2.5rem', // 12: 40px
  '3rem', // 13: 48px
  '4rem', // 14: 64px
];

export const medium = 500;
export const bold = 700;
// alias
export const regular = 400;

// styled-system's `fontWeight` function can hook into the `fontWeights` object
export const fontWeights = {
  medium,
  bold,
  regular,
  heading: medium,
};

export const lineHeights = {
  standard: 1.6,
  display: 1.25,
  heading: 1.25,
};

export const letterSpacings = {
  normal: 'normal',
  caps: '0.015em',
};
export const styles = {
  ...theme.styles,
  root: {
    fontFamily: 'body',
    color: 'text',
    bg: 'background',
  },
  p: {
    color: 'text',
  },
  h6: {
    variant: 'text.heading',
    fontSize: fontSizes[3],
    fontWeight: 'bold',
    marginTop: '0.2em',
    marginBottom: '0.7em',
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: `calc(${fontSizes[3]} * -0.7)`,
    },
  },
  h5: {
    variant: 'text.heading',
    fontSize: fontSizes[4],

    marginBottom: '0.7em',
    marginTop: '0.2em',
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: `calc(${fontSizes[4]} * -0.7)`,
    },
    [`${mediaQueries.lg}`]: {
      fontSize: fontSizes[7],
      '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
        marginTop: `calc(${fontSizes[7]} * -0.7)`,
      },
    },
  },
  h4: {
    variant: 'text.heading',
    fontSize: fontSizes[5],

    marginBottom: '0.7em',
    marginTop: '0.2em',
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: `calc(${fontSizes[5]} * -0.7)`,
    },
    [`${mediaQueries.lg}`]: {
      fontSize: fontSizes[9],
      '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
        marginTop: `calc(${fontSizes[9]} * -0.7)`,
      },
    },
  },
  h3: {
    variant: 'text.heading',
    fontSize: fontSizes[6],

    marginBottom: '0.7em',
    marginTop: '0.2em',
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: `calc(${fontSizes[6]} * -0.7)`,
    },
    [`${mediaQueries.lg}`]: {
      fontSize: fontSizes[10],
      '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
        marginTop: `calc(${fontSizes[10]} * -0.7)`,
      },
    },
  },
  h2: {
    variant: 'text.heading',
    fontSize: fontSizes[7],

    marginBottom: '0.7em',
    marginTop: '0.2em',
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: `calc(${fontSizes[7]} * -0.7)`,
    },
    [`${mediaQueries.lg}`]: {
      fontSize: fontSizes[12],
      '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
        marginTop: `calc(${fontSizes[12]} * -0.7)`,
      },
    },
  },
  h1: {
    variant: 'text.heading',
    fontSize: fontSizes[8],
    marginBottom: '0.7em',
    marginTop: '0.2em',
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: `calc(${fontSizes[8]} * -0.7)`,
    },
    [`${mediaQueries.lg}`]: {
      fontSize: fontSizes[13],
      '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
        marginTop: `calc(${fontSizes[13]} * -0.7)`,
      },
    },
  },
};

export const text = {
  ...(theme.text && theme.text),
  default: {
    color: 'text',
    fontSize: 3,
  },
  xxsmall: {
    color: 'text',
    fontSize: 0,
  },
  xsmall: {
    color: 'text',
    fontSize: 1,
  },
  small: {
    color: 'text',
    fontSize: 2,
  },
  heading: {
    fontFamily: 'heading',
    fontWeight: 'normal',
    lineHeight: 'heading',
    color: 'text',
  },
  primary: {
    variant: 'text.default',
    color: 'primary',
  },
  secondary: {
    variant: 'text.default',
    color: 'secondary',
  },
  accent: {
    variant: 'text.default',
    color: 'accent',
  },
  muted: {
    variant: 'text.default',
    color: 'muted',
  },
  display: {
    variant: 'text.heading',
    fontSize: [5, 6],
    fontWeight: 'display',
    lineHeight: 'display',
    letterSpacing: '-0.03em',
    mt: 3,
  },
  caps: {
    variant: 'text.default',
    textTransform: 'uppercase',
    letterSpacing: 'caps',
  },
  h1: styles.h1,
  h2: styles.h2,
  h3: styles.h3,
  h4: styles.h4,
  h5: styles.h5,
  h6: styles.h6,
};
