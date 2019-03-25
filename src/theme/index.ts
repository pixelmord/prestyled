// tslint:disable: object-literal-sort-keys
const createMediaQuery = (n: string) => `@media screen and (min-width:${n})`;

const aliases = ['sm', 'md', 'lg', 'xl', 'xxl'];
const breakpointStrings: string[] = [32, 40, 48, 64, 75].map(
  (n: number) => n + 'em'
);
export const breakpoints: {
  [key: string]: string;
} = breakpointStrings.reduce(
  (acc, curr, index) => ({
    ...acc,
    [`${aliases[index]}`]: curr,
  }),
  {}
);

export const mediaQueries: {
  [key: string]: string;
} = breakpointStrings.map(createMediaQuery).reduce(
  (acc, curr, index) => ({
    ...acc,
    [`${aliases[index]}`]: curr,
  }),
  {}
);

export const baseColors = {
  /* Colors (most courtesy of http://clrs.cc/) */
  aqua: '#7fdbff',
  black: '#111',
  blue: '#0074d9',
  fuchsia: '#f012be',
  gray: '#aaa',
  green: '#2ecc40',
  lime: '#01ff70',
  maroon: '#85144b',
  navy: '#001f3f',
  olive: '#3d9970',
  orange: '#ff851b',
  purple: '#b10dc9',
  red: '#ff4136',
  silver: '#ddd',
  teal: '#39cccc',
  white: 'white',
  yellow: '#ffdc00',
};

export const grayScale = {
  grayBlack: '#22292f',
  grayDarkest: '#3d4852',
  grayDarker: '#606f7b',
  grayDark: '#8795a1',
  gray: '#b8c2cc',
  grayLight: '#dae1e7',
  grayLighter: '#f1f5f8',
  grayLightest: '#f8fafc',
};

export const colors = {
  ...baseColors,
  ...grayScale,
  primary: baseColors.blue,
  text: grayScale.grayDarkest,
  msAppTileColor: grayScale.grayDarkest,
};

export const space = [
  // margin and padding
  '0em',
  '0.5em',
  '1em',
  '2em',
  '3em',
  '4em',
  '5em',
  '6em',
];

export const fonts = {
  headline: `system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
  text: `system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
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
  // alias
  regular,
};

export const lineHeights = {
  standard: 1.6,
  display: 1.25,
};

export const letterSpacings = {
  normal: 'normal',
  caps: '0.025em',
};

export const textStyles = {
  h6: {
    fontFamily: fonts.headline,
    fontSize: fontSizes[3],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display,
    marginTop: '0.2em',
    marginBottom: '0.7em',
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: `calc(${fontSizes[3]} * -0.7)`,
    },
  },
  h5: {
    fontFamily: fonts.headline,
    fontSize: fontSizes[4],
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.display,
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
    fontFamily: fonts.headline,
    fontSize: fontSizes[5],
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.display,
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
    fontFamily: fonts.headline,
    fontSize: fontSizes[6],
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.display,
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
    fontFamily: fonts.headline,
    fontSize: fontSizes[7],
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.display,
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
    fontFamily: fonts.headline,
    fontSize: fontSizes[8],
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.display,
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

export const buttons = {
  primary: {
    color: 'white',
    backgroundColor: 'blue',
    '&:hover': {
      backgroundColor: 'black',
    },
  },
};

export const base = {
  /* Components */
  bgColor: grayScale.grayLighter,
  borderColor: grayScale.grayLight,
  borderRadius: '.25rem',
  borderWidth: '1px',
  boxShadowInner: 'inset 0 1px 1px rgba(0, 0, 0, .05)',
  boxShadowOuter: '0 1px 0 rgba(0, 0, 0, .05)',
  focusWidth: '2px',
  paddingX: '1rem',
  paddingY: '1rem',
  speed: '.1s',
};

export interface Theme {
  name: string;
  colors: {
    [key: string]: any;
  };
  fonts: {
    [key: string]: any;
  };
  fontSizes: Array<string | number>;
  fontWeights: {
    [key: string]: number;
  };
  lineHeights: {
    [key: string]: number;
  };
  letterSpacings: {
    [key: string]: number | string;
  };
  textStyles: {
    [key: string]: any;
  };
  buttons: {
    [key: string]: any;
  };
  space: Array<string | number>;
  [key: string]: any;
}

export const defaultTheme: Theme = {
  name: 'Default',
  /* Colors */
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  space,
  base,
  buttons,
  textStyles,
};
