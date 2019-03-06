// tslint:disable: object-literal-sort-keys
const createMediaQuery = (n: string) => `@media screen and (min-width:${n})`;

const addAliases = (arr: string[] | number[], arrAlias: string[]) =>
  aliases.forEach((key, i) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get() {
        return this[i];
      },
    })
  );

export const breakpoints: string[] = [32, 40, 48, 64].map(
  (n: number) => n + 'em'
);

export const mediaQueries = breakpoints.map(createMediaQuery);

const aliases = ['sm', 'md', 'lg', 'xl'];

addAliases(breakpoints, aliases);
addAliases(mediaQueries, aliases);

export const colors = {
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
  headline: `'Montserrat','Helvetica Neue',Helvetica,Arial,sans-serif`,
  text: `'Montserrat','Helvetica Neue',Helvetica,Arial,sans-serif`,
};

export const fontSizes = [
  '0.625rem',
  '0.75rem',
  '0.875rem',
  '1rem',
  '1.125rem',
  '1.5rem',
  '2rem',
  '3rem',
  '4rem',
];

export const medium = 500;
export const bold = 700;
// alias
export const regular = medium;

// styled-system's `fontWeight` function can hook into the `fontWeights` object
export const fontWeights = {
  medium,
  bold,
  // alias
  regular,
};

export const lineHeights = {
  standard: 1.5,
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
      marginTop: `calc(${fontSizes[4]} * -0.7)`,
    },
  },
  h5: {
    fontFamily: fonts.headline,
    fontSize: fontSizes[4],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display,
    marginBottom: '0.7em',
    marginTop: '0.2em',
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: `calc(${fontSizes[4]} * -0.7)`,
    },
  },
  h4: {
    fontFamily: fonts.headline,
    fontSize: fontSizes[5],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display,
    marginBottom: '0.7em',
    marginTop: '0.2em',
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: `calc(${fontSizes[5]} * -0.7)`,
    },
  },
  h3: {
    fontFamily: fonts.headline,
    fontSize: fontSizes[6],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display,
    marginBottom: '0.7em',
    marginTop: '0.2em',
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: `calc(${fontSizes[6]} * -0.7)`,
    },
  },
  h2: {
    fontFamily: fonts.headline,
    fontSize: fontSizes[7],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display,
    marginBottom: '0.7em',
    marginTop: '0.2em',
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: `calc(${fontSizes[7]} * -0.7)`,
    },
  },
  h1: {
    fontFamily: fonts.headline,
    fontSize: fontSizes[8],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display,
    marginBottom: '0.7em',
    marginTop: '0.2em',
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: `calc(${fontSizes[8]} * -0.7)`,
    },
  },
};

const components = {
  /* Components */
  componentBgColor: '#f2f2f2',
  componentBorderColor: '#ddd',
  componentBorderRadius: '.25rem',
  componentBorderWidth: '1px',
  componentBoxShadowInner: 'inset 0 1px 1px rgba(0, 0, 0, .05)',
  componentBoxShadowOuter: '0 1px 0 rgba(0, 0, 0, .05)',
  componentFocusWidth: '2px',
  componentPaddingX: '1rem',
  componentPaddingY: '1rem',
  componentSpeed: '.1s',
};

export const defaultTheme = {
  name: 'Default',
  /* Colors */
  colors: {
    ...colors,
    /* Special colors */
    primary: colors.blue,
  },
  fontSizes,
  space,
  letterSpacings,
  /* Components */
  ...components,
  buttons: {
    primary: {
      color: 'white',
      backgroundColor: 'blue',
      '&:hover': {
        backgroundColor: 'black',
      },
    },
  },
  textStyles,
};
export default defaultTheme;
